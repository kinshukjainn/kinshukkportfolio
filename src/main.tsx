import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "react-oidc-context";
import "./index.css";
import App from "./App.tsx";

// Get environment variables from .env file
const cognitoAuthConfig = {
  authority: import.meta.env.VITE_COGNITO_AUTHORITY,
  client_id: import.meta.env.VITE_COGNITO_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_COGNITO_REDIRECT_URI,
  response_type: import.meta.env.VITE_COGNITO_RESPONSE_TYPE || "code",
  scope: import.meta.env.VITE_COGNITO_SCOPE || "phone openid email",
  
  // Additional optional configuration
  automaticSilentRenew: true,
  loadUserInfo: true,
  
  // Handle token callbacks
  onSigninCallback: () => {
    // Remove the query parameters from the URL after successful login
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider {...cognitoAuthConfig}>
      <App />
    </AuthProvider>
  </StrictMode>
);