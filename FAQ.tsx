<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <!-- Gradients -->
  <defs>
    <linearGradient id="egg-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFEE5" />
      <stop offset="100%" stop-color="#F59E0B" /> <!-- brand-yolk -->
    </linearGradient>
    <linearGradient id="plus-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="10" flood-color="#78350F" flood-opacity="0.18" />
    </filter>
  </defs>

  <!-- Left Egg "O" with Chef's Hat -->
  <g transform="translate(130, 260) rotate(-15)" filter="url(#shadow)">
    <!-- Egg body using path for a natural egg shape (narrower top, wider bottom) -->
    <path d="M 0,-130 C 75,-130 95,95 0,115 C -95,95 -75,-130 0,-130 Z" fill="url(#egg-grad)" stroke="#D97706" stroke-width="2" stroke-opacity="0.2" />
    <!-- Egg shine highlight -->
    <ellipse cx="25" cy="-75" rx="18" ry="30" transform="rotate(15, 25, -75)" fill="#FFFFFF" opacity="0.75" />
    <!-- Letter O -->
    <text x="0" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="95" font-weight="900" fill="#1C1917" text-anchor="middle">O</text>
    
    <!-- Chef's Hat -->
    <g transform="translate(-40, -220) scale(2.0)">
      <!-- Hat base -->
      <path d="M 12,24 L 12,21 C 12,19.5 13,18.5 15,18.5 L 25,18.5 C 27,18.5 28,19.5 28,21 L 28,24 Z" fill="#FFFFFF" stroke="#78350F" stroke-width="1.5" stroke-linejoin="round" />
      <!-- Hat crown -->
      <path d="M 10,20 C 5,13 10,4 18,7 C 18,-1 22,-1 22,7 C 30,4 35,13 30,20 Z" fill="#FFFFFF" stroke="#78350F" stroke-width="1.5" stroke-linejoin="round" />
      <!-- Folds -->
      <path d="M 17,18.5 C 17,14 20,14 20,18.5" stroke="#F59E0B" stroke-width="1" stroke-linecap="round" opacity="0.6" />
      <path d="M 23,18.5 C 23,14 20,14 20,18.5" stroke="#F59E0B" stroke-width="1" stroke-linecap="round" opacity="0.6" />
    </g>
  </g>

  <!-- Center Floating "v" -->
  <g transform="translate(256, 220)">
    <text x="0" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="130" font-weight="900" fill="#B45309" text-anchor="middle">v</text>
  </g>

  <!-- Right Egg "O" with Golden Plus Badge -->
  <g transform="translate(382, 260) rotate(15)" filter="url(#shadow)">
    <!-- Egg body -->
    <path d="M 0,-130 C 75,-130 95,95 0,115 C -95,95 -75,-130 0,-130 Z" fill="url(#egg-grad)" stroke="#D97706" stroke-width="2" stroke-opacity="0.2" />
    <!-- Egg shine highlight -->
    <ellipse cx="25" cy="-75" rx="18" ry="30" transform="rotate(15, 25, -75)" fill="#FFFFFF" opacity="0.75" />
    <!-- Letter O -->
    <text x="0" y="30" font-family="system-ui, -apple-system, sans-serif" font-size="95" font-weight="900" fill="#1C1917" text-anchor="middle">O</text>
    
    <!-- Golden Plus "+" Badge -->
    <g transform="translate(45, -115)">
      <circle cx="0" cy="0" r="28" fill="url(#plus-grad)" stroke="#FFFFFF" stroke-width="4" />
      <text x="0" y="11" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="900" fill="#FFFFFF" text-anchor="middle">+</text>
    </g>
  </g>
</svg>
