export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/properties/add", "/messages", "/properties/saved", "/profile"],
};
