import { getSessionUser } from "@/utils/getSessionUser";
import connectDB from "@/config/database";
import User from "@/models/User";

export const POST = async (request) => {
  await connectDB();
  try {
    const { propertyId } = await request.json();
    const session = await getSessionUser();
    if (!session || !session.userId) {
      return new Response("User Id is Required", { status: 401 });
    }
    const { userId } = session;

    const user = await User.findOne({ _id: userId });
    let isBookmarked = user.bookmarks.includes(propertyId);

    return new Response(JSON.stringify({ isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong !", { status: 500 });
  }
};
