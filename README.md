# 🤖 Support AI

> An embeddable AI-powered customer support chatbot platform built with **Next.js**, **TypeScript**, **MongoDB**, and **Google Gemini**.

Business owners can securely log in, configure their chatbot with their own business knowledge, and instantly generate a single `<script>` tag to embed an AI support assistant on any website.

---

## 🚀 Features

- 🔐 OAuth Authentication using Scalekit
- 🤖 AI-powered customer support chatbot
- 📚 Custom business knowledge base
- 🌐 Embeddable chatbot widget
- 💬 Real-time AI responses
- 🛡️ Protected dashboard
- ⚡ REST API built with Next.js App Router
- 📱 Fully responsive interface
- ☁️ MongoDB database integration
- 🎨 Clean modern UI with Tailwind CSS

---

## 🖥️ Demo

### 🏠 Landing Page

The landing page introduces the platform, highlights its core features, and allows business owners to securely authenticate using Scalekit OAuth.

<p align="center">
  <img src="https://github.com/user-attachments/assets/8418773c-9bb1-4eeb-93ca-7cb48937da6e" width="900" alt="Landing Page">
</p>

---

### 📊 Dashboard

After logging in, business owners can configure their AI chatbot by providing their business information, support email, and custom knowledge base. These settings are securely stored in MongoDB and are used to generate context-aware AI responses.

<p align="center">
  <img src="https://github.com/user-attachments/assets/171c2115-7371-429a-b516-76ba8d4b892c" width="900" alt="Dashboard">
</p>

---

### 💬 Embedded Chat Widget

The generated chatbot can be embedded into any website using a single `<script>` tag. Visitors can interact with the AI assistant, which answers questions using the business-specific knowledge configured by the owner.

<p align="center">
  <img src="https://github.com/user-attachments/assets/5a988956-b307-4e61-8178-4c21407dbf30" width="900" alt="Embedded Chat Widget">
</p>


---


# 🏗️ System Architecture

```
                     Business Owner
                           │
                           ▼
                 Scalekit OAuth Login
                           │
                           ▼
                 Next.js Dashboard
                           │
                           ▼
                    MongoDB Database
                           │
                           ▼
                  Chat API (/api/chat)
                           │
                           ▼
                Google Gemini 2.5 Flash
                           │
                           ▼
                AI Generated Response
                           │
                           ▼
             Embedded Chat Widget (JS)
                           │
                           ▼
                  Customer's Website
```

---

# ⚙️ Tech Stack

| Category | Technology |
|-----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Authentication | Scalekit OAuth 2.0 |
| Database | MongoDB + Mongoose |
| AI Model | Google Gemini 2.5 Flash |
| HTTP Client | Axios |
| Animation | Motion (Framer Motion) |

---

# 📁 Project Structure

```
src
│
├── app
│   ├── api
│   │   ├── auth
│   │   │   ├── login
│   │   │   ├── callback
│   │   │   └── logout
│   │   │
│   │   ├── chat
│   │   │   └── route.ts
│   │   │
│   │   └── settings
│   │       ├── route.ts
│   │       └── get
│   │
│   ├── dashboard
│   ├── embed
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── DashboardClient.tsx
│   ├── EmbedClient.tsx
│   └── HomeClient.tsx
│
├── lib
│   ├── db.ts
│   ├── getSession.ts
│   └── scalekit.ts
│
├── model
│   └── settings.model.ts
│
├── proxy.ts
└── types.d.ts

public
└── chatBot.js
```

---

# ✨ How It Works

### 1. User Authentication

Business owners authenticate securely using Scalekit OAuth.

---

### 2. Configure Chatbot

Inside the dashboard they provide:

- Business Name
- Support Email
- Business Knowledge Base
- FAQs
- Policies
- Shipping Information

These settings are stored in MongoDB.

---

### 3. Generate Embed Code

The application generates a unique script tag:

```html
<script
src="https://your-domain.com/chatBot.js"
data-owner-id="OWNER_ID">
</script>
```

The business owner pastes this script into their website.

---

### 4. Customer Interaction

Whenever a visitor opens the chatbot:

- chatBot.js loads
- Reads the owner ID
- Sends customer messages to `/api/chat`
- Fetches business knowledge
- Generates AI response using Gemini
- Displays the answer inside the widget

---

# 🔌 API Endpoints

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/auth/login` | Login with OAuth |
| GET | `/api/auth/callback` | OAuth callback |
| GET | `/api/auth/logout` | Logout |

---

## Settings

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/settings` | Save chatbot settings |
| POST | `/api/settings/get` | Fetch chatbot settings |

---

## Chat

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/chat` | Generate AI response |

---

# 💡 AI Prompt Flow

Whenever a customer asks a question, the backend creates a structured prompt like:

```
You are a professional customer support assistant.

Only answer using the information below.

Business Details:
...

Customer Question:
...
```

This ensures responses stay aligned with the business's configured knowledge base.

---

# 🛠️ Getting Started

## Clone Repository

```bash
git clone https://github.com/amitsingh088/support-ai.git
```

```
cd support-ai
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env.local` file.

```env
MONGODB_URL=

SCALEKIT_ENVIRONMENT_URL=

SCALEKIT_CLIENT_ID=

SCALEKIT_CLIENT_SECRET=

GEMINI_API_KEY=

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

---

## Run Development Server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

## Build Production

```bash
npm run build
npm start
```

---

# 📌 Future Improvements

- Conversation history
- Multi-language support
- Voice assistant
- Analytics dashboard
- File upload support
- Markdown rendering
- Streaming AI responses
- Dark mode widget
- Rate limiting
- Admin analytics

---

# 📚 What I Learned

While building this project, I gained practical experience with:

- Next.js App Router
- Server Components
- OAuth Authentication
- MongoDB & Mongoose
- REST API Design
- AI Prompt Engineering
- Embeddable JavaScript Widgets
- Session Management
- Secure Cookie Authentication
- CORS Handling
- TypeScript
- Deployment Best Practices

---

# 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

Feel free to fork the repository and submit a pull request.
