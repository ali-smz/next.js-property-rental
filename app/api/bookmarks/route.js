import { getSessionUser } from "@/utils/getSessionUser";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import User from "@/models/User";


export const dynamic = "force-dynamic";

const POST = async (request) => {
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
    let message;

    if (!isBookmarked) {
      user.bookmarks.push(propertyId);
      message = "Bookmark Saved Successfully";
      isBookmarked = true;
    } else {
      user.bookmarks.pull(propertyId);
      message = "Bookmark Removed Successfully";
      isBookmarked = false;
    }
    await user.save();
    return new Response(JSON.stringify({ message, isBookmarked }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("Something Went Wrong !", { status: 500 });
  }
};
