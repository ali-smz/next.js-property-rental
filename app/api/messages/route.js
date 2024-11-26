import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/Message";
import connectDB from "@/config/database";

export const dynamic = "force-dynamic";

export const POST = async (request) => {
  await connectDB();
  try {
    const { name, recipient, message, phone, email, property } =
      await request.json();
    const usersession = await getSessionUser();

    if (!usersession || !usersession.userId) {
      return new Response(
        JSON.stringify({ message: "You must be logged in" }),
        {
          status: 401,
        }
      );
    }
    const { user } = usersession;
    if (user._id === recipient) {
      return new Response(
        JSON.stringify({ message: "You can't send message to yourself" }),
        { status: 400 }
      );
    }
    const newMessage = new Message({
      sender: user._id,
      recipient,
      property,
      name,
      phone,
      email,
      body: message,
    });
    await newMessage.save();
    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Something went wrong" }), {
      status: 500,
    });
  }
};