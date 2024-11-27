"use client";
import { useState, useEffect } from "react";
import { Spinner } from ".";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchedMessages = async () => {
      try {
        const res = await fetch("/api/messages");
        if (res.status === 200) {
          const data = await res.json();
          setMessages(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchedMessages();
  }, []);

  return <div>Messages</div>;
};

export default Messages;
