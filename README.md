## Clone project

```bash
Aller sur le dossier du projet créer

git clone https://github.com/magicniclus/bigprojet.git .

npm i

git remote rm origin

git remote add origin url_de_votre_nouveau_repo

git add .

git commit -m "Initial commit: Clone landingPage template"

git push -u origin main

```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Variable Environnement

Create file .env.local

### Firebase

NEXT_PUBLIC_FIREBASE_API_KEY= \Variable\
NEXT_PUBLIC_FIREBASE_DATABASE_URL=\Variable\
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=\Variable\
NEXT_PUBLIC_FIREBASE_PROJECT_ID=\Variable\
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=\Variable\
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=\Variable\
NEXT_PUBLIC_FIREBASE_APP_ID=\Variable\

### MAPBOX

NEXT_PUBLIC_MAPBOX_TOKEN= \Variable\

### SENDGRID

NEXT_PUBLIC_SENDGRID_API_KEY= \Variable\

### STRIPE

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY= \Variable\
NEXT_PUBLIC_STRIPE_SECRET_KEY= \Variable\

### Google Tag

NEXT_PUBLIC_GTM_ID= \Variable\
