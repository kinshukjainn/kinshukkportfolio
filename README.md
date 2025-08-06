# 🌐 Kinshuk Jain's Developer Portfolio

Welcome to the repository for my personal developer portfolio, a project that showcases my skills, projects, and professional journey. This portfolio is built using modern web technologies and is deployed using AWS services.

**Live Site:** [cloudkinshuk.in](https://cloudkinshuk.in)

---

## 📖 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Tailwind CSS Configuration](#tailwind-css-configuration)
- [Deployment](#deployment)
- [Cloning the Project](#cloning-the-project)
- [License](#license)

---

## 📌 About the Project

In today's tech-driven world, having a standout portfolio website isn't just a bonus—it's essential. With the rise of AI tools and competition in every field, I realized it was time to build something that would reflect my skills, personality, and projects. This portfolio is a single-page application (SPA) that is responsive, accessible, and easy to maintain.

---

## 🛠️ Tech Stack

### Development Environment

- **IDE:** Visual Studio Code
- **Package Manager:** npm (primary), with optional support for bun, yarn, or pnpm

### Core Technologies

| Tool               | Version   |
|--------------------|-----------|
| React              | 19.0.0    |
| TypeScript         | 5.7.2     |
| React Router DOM   | 7.3.0     |
| Tailwind CSS       | 4.0.14    |
| Framer Motion      | 12.5.0    |
| React Icons        | 5.5.0     |
| Lucide React       | 0.482.0   |

### Multiple fonts which i use : 

- **Poppins** from Google Fonts
- **Fira Sans** from Google Fonts
- **Roboto** from Google Fonts 

### Deployment & Cloud Setup

- **Frontend Hosting:** AWS Amplify (Serverless, scalable, easy CI/CD)
- **DNS & SSL:** AWS Route 53
- **Domain Provider:** Hostinger (.in domain for ₹1000 / 2 years)
- **Version Control:** Git & GitHub
- **Containerization and Imaging :** Docker image and repository 

---

## 📁 Project Structure

```
kinshukkportfolio/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── socialmedia/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started


### Docker Commands for pulling the image of my website 

```Bash
docker pull kinshukdev/kinshukportfolio:latest
```

### Prerequisites

- **Node.js** and **npm** installed
- **Git** installed

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kinshukjainn/kinshukkportfolio.git
   cd kinshukkportfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**

   Navigate to `http://localhost:5173` to view the application.

---

## 🎨 Tailwind CSS Configuration

### Installation

```bash
npm install tailwindcss @tailwindcss/vite
```

### Configuration

In `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

In `index.css`:

```css
@import "tailwindcss";
```

---

## ☁️ Deployment

### Domain Purchase

- **Provider:** Hostinger
- **Domain:** `cloudkinshuk.in` purchased for ₹1000 for 2 years

### AWS Setup

1. **Create AWS Account:**

   - Sign up at [AWS Console](https://aws.amazon.com/console/)

2. **Configure Route 53:**

   - Create a public hosted zone for your domain
   - Note the NS (Name Server) records provided

3. **Update Nameservers in Hostinger:**

   - Replace default nameservers with the ones from Route 53

### AWS Amplify Deployment

1. **Connect GitHub Repository:**

   - Authorize AWS Amplify to access your GitHub account
   - Select the `kinshukkportfolio` repository and the desired branch

2. **Build Settings:**

   AWS Amplify will automatically detect the build settings. Ensure your `package.json` has the following scripts:

   ```json
   "scripts": {
     "dev": "vite",
     "build": "tsc -b && vite build",
     "lint": "eslint .",
     "preview": "vite preview"
   }
   ```

3. **Domain Management:**

   - Add your custom domain (`cloudkinshuk.in`) in AWS Amplify
   - Configure subdomains as needed (e.g., `www.cloudkinshuk.in`)
   - Set up redirection from `www` to the root domain if desired

4. **DNS Records:**

   - AWS Amplify will provide the necessary DNS records
   - Add these records to your Route 53 hosted zone

---

## 🧪 Cloning the Project

### For Beginners

1. **Fork the Repository:**

   - Navigate to [kinshukjainn/kinshukkportfolio](https://github.com/kinshukjainn/kinshukkportfolio)
   - Click on "Fork" to create a copy under your GitHub account

2. **Clone Your Forked Repository:**

   ```bash
   git clone https://github.com/yourusername/kinshukkportfolio.git
   cd kinshukkportfolio
   ```

3. **Install Dependencies and Run:**

   ```bash
   npm install
   npm run dev
   ```

4. **Customize:**

   - Modify content, styles, and animations as per your preference



Feel free to fork this repository and customize it to create your own portfolio website. Contributions and feedback are welcome!

---

*Note: Replace placeholders like `LICENSE` with actual links or content as applicable.*

--- 
