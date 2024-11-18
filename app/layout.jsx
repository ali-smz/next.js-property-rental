import React from "react";
import "@/assets/styles/globals.css";
import { Navbar, Footer, AuthProvider } from "@/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "propertyPulse | Find the perfect Rental",
  description: "Find your dream Rental Property",
  keywords: "rental , find rentals , find properties",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <ToastContainer />
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
