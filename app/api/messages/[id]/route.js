import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

export const PUT = async (request, { params }) => {
  try {
    await connectDB();
    const usersession = await getSessionUser();

    if (!usersession || !usersession.userId) {
      return new Response(JSON.stringify("login required"), {
        status: 401,
      });
    }
    const { userId } = usersession;
    const solvedParams = await params;
    const { id } = solvedParams;
    const message = await Message.findById(id);

    if (!message) {
      return new Response(JSON.stringify("message not found"), {
        status: 404,
      });
    }

    if (message.recipient.toString() !== userId) {
      return new Response(
        JSON.stringify("you are not the recipient of this message"),
        {
          status: 403,
        }
      );
    }
    message.read = !message.read;
    await message.save();
    return new Response(JSON.stringify(message), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error.message), {
      status: 500,
    });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectDB();
    const usersession = await getSessionUser();

    if (!usersession || !usersession.userId) {
      return new Response(JSON.stringify("login required"), {
        status: 401,
      });
    }
    const { userId } = usersession;
    const solvedParams = await params;
    const { id } = solvedParams;
    const message = await Message.findById(id);

    if (!message) {
      return new Response(JSON.stringify("message not found"), {
        status: 404,
      });
    }

    if (message.recipient.toString() !== userId) {
      return new Response(
        JSON.stringify("you are not the recipient of this message"),
        {
          status: 403,
        }
      );
    }
    await message.deleteOne();
    return new Response("Message Deleted", {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error.message), {
      status: 500,
    });
  }
};
