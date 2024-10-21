import React from "react";
import '@/assets/styles/globals.css'

export const metadata = {
  title: "propertyPulse | Find the perfect Rental",
  description: "Find your dream Rental Property",
  keywords: "rental , find rentals , find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
