import express from "express";
import admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
try {
  // @ts-ignore
  if (!admin.apps || admin.apps.length === 0) {
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
      const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
      admin.initializeApp({
        // @ts-ignore
        credential: admin.credential.cert(serviceAccount),
        projectId: "nomadic-aria-0gtt6"
      });
      console.log("Firebase Admin initialized with Service Account from env.");
    } else {
      admin.initializeApp({
        projectId: "nomadic-aria-0gtt6"
      });
      console.log("Firebase Admin initialized with default credentials.");
    }
  }
} catch (e) {
  console.error("Firebase Admin initialization error:", e);
}

export const db = getFirestore("ai-studio-ovo-8c3e5817-1348-41c1-9692-8d1e069395a1");

// Seed test users automatically on boot to ensure database records exist
export async function seedTestUsers() {
  try {
    const usersCollection = db.collection("users");
    
    await usersCollection.doc("teste.completo@ovoapp.com").set({
      email: "teste.completo@ovoapp.com",
      plano: "premium",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      origin: "seed"
    }, { merge: true });

    await usersCollection.doc("teste.basico@ovoapp.com").set({
      email: "teste.basico@ovoapp.com",
      plano: "basic",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      origin: "seed"
    }, { merge: true });

    await usersCollection.doc("completo@teste.com").set({
      email: "completo@teste.com",
      plano: "premium",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      origin: "seed"
    }, { merge: true });

    await usersCollection.doc("basico@teste.com").set({
      email: "basico@teste.com",
      plano: "basic",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      origin: "seed"
    }, { merge: true });

    console.log("Successfully seeded test users in Firestore.");
  } catch (error) {
    console.error("Error seeding test users:", error);
  }
}

// Seed on module load
seedTestUsers();

const app = express();
app.use(express.json());

// Kiwify Webhook Endpoint
app.post("/api/webhook/kiwify", async (req, res) => {
  console.log("Received Kiwify Webhook:", JSON.stringify(req.body, null, 2));
  try {
    const payload = req.body;
    
    // Try to extract email and status from different common webhook structures
    const email = payload.customer?.email || payload.email || payload.Customer?.email;
    const orderStatus = payload.order_status || payload.status || payload.event;
    
    // Kiwify standard status for successful payment is typically "paid" or "approved" or "completed"
    const isPaid = ["paid", "approved", "completed", "active"].includes(String(orderStatus).toLowerCase());
    
    if (!email) {
      return res.status(400).json({ error: "Email do cliente não encontrado no payload" });
    }

    // Try to determine the plan from product name or custom parameters
    const productName = payload.product?.product_name || payload.product_name || "";
    let plano = "basic";
    
    // If product name contains "premium" or "completo", or they explicitly passed it
    if (
      productName.toLowerCase().includes("premium") || 
      productName.toLowerCase().includes("completo") ||
      payload.plano === "premium" ||
      payload.plan === "premium"
    ) {
      plano = "premium";
    }

    const usersRef = db.collection("users");
    const cleanEmail = email.trim().toLowerCase();

    if (isPaid) {
      // Register or update user with purchased plan
      await usersRef.doc(cleanEmail).set({
        email: cleanEmail,
        plano: plano,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        origin: "kiwify_webhook"
      }, { merge: true });
      
      console.log(`User ${cleanEmail} successfully updated to plan: ${plano}`);
      return res.json({ success: true, message: `Plano ${plano} ativado para o email ${cleanEmail}` });
    } else {
      // If refund or chargeback, we can demote or delete
      if (["refunded", "chargedback", "canceled", "cancelled"].includes(String(orderStatus).toLowerCase())) {
        await usersRef.doc(cleanEmail).delete();
        console.log(`User ${cleanEmail} subscription canceled/deleted due to status: ${orderStatus}`);
        return res.json({ success: true, message: `Acesso removido para o email ${cleanEmail}` });
      }
      return res.json({ success: true, message: `Status recebido (${orderStatus}), nenhuma ação necessária` });
    }
  } catch (err: any) {
    console.error("Erro ao processar webhook da Kiwify:", err);
    return res.status(500).json({ error: "Erro interno ao processar o webhook", details: err.message });
  }
});

// Manual endpoint for easy administration and testing
app.post("/api/admin/set-plan", async (req, res) => {
  try {
    const { email, plano } = req.body;
    if (!email || !["basic", "premium"].includes(plano)) {
      return res.status(400).json({ error: "Email e plano (basic/premium) são obrigatórios" });
    }
    const cleanEmail = email.trim().toLowerCase();
    await db.collection("users").doc(cleanEmail).set({
      email: cleanEmail,
      plano: plano,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      origin: "admin_manual"
    }, { merge: true });
    return res.json({ success: true, message: `Plano ${plano} definido com sucesso para ${cleanEmail}` });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

// Get current plan for an email directly
app.get("/api/user-plan/:email", async (req, res) => {
  try {
    const email = req.params.email.trim().toLowerCase();
    
    // Hardcoded test emails for testing and simulation
    if (email === "completo@teste.com" || email === "teste.completo@ovoapp.com") {
      return res.json({ exists: true, plano: "premium" });
    }
    if (email === "basico@teste.com" || email === "teste.basico@ovoapp.com") {
      return res.json({ exists: true, plano: "basic" });
    }

    const doc = await db.collection("users").doc(email).get();
    if (!doc.exists) {
      return res.json({ exists: false, plano: null });
    }
    return res.json({ exists: true, plano: doc.data()?.plano });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
});

export default app;
