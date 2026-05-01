BackRise Nexus — Crowdfunding Platform
A full-stack crowdfunding platform built with React + Vite, Express.js, Firebase, Stripe, and Material UI. Users can discover campaigns, back projects with real payments, and launch their own crowdfunding campaigns.

Features
As a Guest

Browse all active campaigns on the home page
View individual campaign pages with progress tracking
Contribute (Back It) to any campaign using a test credit card
Give unlimited Faves to show support

As a Registered User

Create a campaign with title, story, image, category, and goal amount
Each campaign gets its own dedicated Stripe account for fund collection
Edit all campaign details including goal amount (form pre-filled)
Delete your campaign


Tech Stack
LayerTechnologyFrontendReact 18, Vite, TypeScriptUI LibraryMaterial UI (MUI v5)AuthFirebase AuthenticationPaymentsStripe API + Stripe ConnectImage UploadCloudinaryBackendExpress.js, Node.js, TypeScriptDatabaseMongoDB + MongooseRich Textmui-rte

Project Structure
BackRise-Nexus/
├── backend/                  # Express API server
│   └── src/
│       ├── controller/       # Route handlers
│       ├── service/          # Business logic / DB queries
│       ├── models/           # Mongoose models
│       ├── schema/           # Zod validation schemas
│       ├── middleware/       # Express middleware
│       ├── routes.ts         # API routes
│       └── app.ts            # App entry point
│
└── react-app/                # Vite + React frontend
    └── src/
        ├── pages/            # Route-based pages (Controller + View pattern)
        │   ├── campaign/
        │   ├── create/
        │   ├── edit/
        │   ├── login/
        │   └── signup/
        ├── common/           # Reusable components (NavBar, Footer, Progress, etc.)
        ├── context/          # React Context (Auth, Fundraiser)
        ├── services/         # API + Firebase + HTTP service
        └── assets/           # Images, SVGs, theme

Installation & Setup
1. Backend (Express Server)
Navigate to the backend directory:
bashcd backend
Create a .env file:
envPORT=5000
DB_URI=your_mongodb_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
REACT_APP_URL=http://localhost:3000
COMPANY_NAME=BackRise Nexus
Install dependencies and start the server:
bashnpm install
npm run dev
Server runs on the PORT specified in .env.

2. Frontend (React + Vite)
Navigate to the react-app directory:
bashcd react-app
Create a .env file:
envVITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_CLOUDINARY_UPLOAD_URL=
VITE_CLOUDINARY_CLOUD_NAME=
VITE_CLOUDINARY_UPLOAD_PRESET=
VITE_STRIPE_PUBLISHABLE_KEY=
VITE_API_URL=http://localhost:5000/api
Install dependencies and start the app:
bashnpm install
npm run dev
App runs on http://localhost:3000.

API Reference
Base URL: http://localhost:5000/api
MethodEndpointDescriptionGET/fundraiserGet all campaignsGET/fundraiser/:idGet single campaignPOST/fundraiserCreate new campaignPUT/fundraiser/:idUpdate campaignDELETE/fundraiser/:idDelete campaignPOST/contributionAdd contribution to campaign
Sample Campaign Object
json{
  "_id": "61ac706c947d3bc22c43a869",
  "title": "Carved Exotic Wood Bookcase of Curated Holy Books",
  "story": "A curated library of mankind's holy scriptures...",
  "image_url": "https://res.cloudinary.com/...",
  "category": "Education",
  "goal_amount": 12000,
  "current_amount": 500,
  "published": true,
  "owner": "pTJcUxNYUcYXKzfUm7EzVAaqv7t1",
  "stripeId": "acct_1K3FZ8QtwaCQBlju",
  "faves": 4,
  "contributions": [
    {
      "amount": 500,
      "fundraiserId": "61ac706c947d3bc22c43a869",
      "date": "2021-12-05T18:11:56.966Z"
    }
  ]
}

Architecture
Backend — MVC Pattern
Request → Route → Controller → Service → Model → Schema

Route — Defines API endpoints
Controller — Handles request/response
Service — Business logic and DB queries
Model — Mongoose schema
Schema — Zod input validation

Frontend — Controller/View Pattern
Each page is split into two files:

XController.tsx — Business logic, state, API calls
XView.tsx — Pure presentation / JSX


Key Notes (Vite Migration)
This project was migrated from Create React App → Vite. Key differences:
CRAViteREACT_APP_* env varsVITE_* env varsprocess.env.REACT_APP_*import.meta.env.VITE_*src/index.tsxsrc/main.tsxpublic/index.htmlindex.html at project rootnpm run startnpm run dev

License
under MIT Licencse

built by P R Vishal
