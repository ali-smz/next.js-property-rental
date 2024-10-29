import connectDB from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDB();
    return new Response("ok", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("error", { status: 500 });
  }
};
