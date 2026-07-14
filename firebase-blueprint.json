{
  "entities": {
    "User": {
      "title": "User",
      "description": "User account information and active subscription plan",
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "description": "User's email address"
        },
        "plano": {
          "type": "string",
          "enum": ["basic", "premium"],
          "description": "The active subscription plan for this user"
        },
        "createdAt": {
          "type": "string",
          "format": "date-time",
          "description": "Timestamp when the user account was created or activated"
        }
      },
      "required": ["email", "plano"]
    }
  },
  "firestore": {
    "users/{email}": {
      "schema": "User",
      "description": "Collection of registered users and their active plans indexed by email"
    }
  }
}
