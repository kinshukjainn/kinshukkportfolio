import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

// Get the publishable key from environment variables
const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string;


// this will throw error if the publisable key is present in the code base 
if (!clerkPublishableKey) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={clerkPublishableKey}
      appearance={{
        // Dark theme configuration to match your header
        baseTheme: undefined,
        variables: {
          colorPrimary: "#10b981", // emerald-500
          colorText: "#ffffff",
          colorTextOnPrimaryBackground: "#ffffff",
          colorBackground: "#0f172a", // slate-900
          colorInputBackground: "#1e293b", // slate-800
          colorInputText: "#ffffff",
          borderRadius: "0.75rem", 
        },
        elements: {
          formButtonPrimary: 
            "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-medium rounded-xl transition-all duration-300",
          card: "bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl",
          headerTitle: "text-white font-bold",
          headerSubtitle: "text-gray-300",
          socialButtonsBlockButton: 
            "border border-white/20 hover:border-emerald-500/50 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-xl transition-all duration-300",
          formFieldInput: 
            "bg-slate-800/50 border-white/20 text-white placeholder:text-gray-400 rounded-xl focus:border-emerald-500 focus:ring-emerald-500/20",
          footerActionLink: "text-emerald-400 hover:text-emerald-300",
        }
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>
);
