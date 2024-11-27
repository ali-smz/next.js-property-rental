"use client";
import { useEffect } from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const UnreadMessagesCount = ({ session }) => {
  const { messageCount, setMessageCount } = useGlobalContext(0);

  useEffect(() => {
    const fetchUnreadMessagesCount = async () => {
      if (!session) return;
      try {
        const res = await fetch("/api/messages/unread-count");
        if (res.status === 200) {
          const data = await res.json();
          setMessageCount(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUnreadMessagesCount();
  }, [session]);

  return (
    messageCount > 0 && (
      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
        {messageCount}
      </span>
    )
  );
};

export default UnreadMessagesCount;
