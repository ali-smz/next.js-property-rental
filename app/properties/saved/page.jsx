"use client";
import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { PropertyCard, Spinner } from "@/components";

const SavedProperties = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const savedBookmarks = async () => {
      try {
        const res = await fetch("/api/bookmarks");
        if (res.status === 200) {
          const data = await res.json();
          setBookmarks(data.bookmarks);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong !");
      } finally {
        setLoading(false);
      }
    };
    savedBookmarks();
  }, []);

  return loading ? (
    <Spinner loading={loading} />
  ) : (
    <section className="px-4 py-6">
      <h1 className="text-center font-bold text-4xl mb-10">Saved Property Page</h1>
      <div className="container-xl lg:container m-auto">
        {bookmarks.length === 0 ? (
          <p>No Property Saved</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bookmarks.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SavedProperties;
