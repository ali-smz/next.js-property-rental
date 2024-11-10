export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/messages", "/properties/saved"],
};

// /profile , /property/add
