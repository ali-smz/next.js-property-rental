import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/Message";
import connectDB from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDB();
    const usersession = await getSessionUser();

    if (!usersession || !usersession.userId) {
      return new Response(JSON.stringify("login required"), {
        status: 401,
      });
    }
    const { userId } = usersession;
    const count = await Message.countDocuments({
      recipient: userId,
      read: false,
    });
    return new Response(JSON.stringify(count), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
};
