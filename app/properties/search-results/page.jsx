"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { PropertyCard, PropertySearchForm, Spinner } from "@/components";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const SearchResults = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const propertyType = searchParams.get("propertyType");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`
        );
        if (res.status === 200) {
          const data = await res.json();
          setResult(data);
        }
      } catch (error) {
        console.log(error);
        setResult([]);
      } finally {
        setLoading(false);
      }
    };
    fetchSearchResults();
  }, [location, propertyType]);

  return !loading ? (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <Link
            href="/properties"
            className="flex items-center text-blue-500 hover:underline mb-3"
          >
            <FaArrowAltCircleLeft className="mr-2 mb-1" /> Back To Properties
          </Link>
          <h1 className="text-2xl mb-4">Search Results</h1>
          {result.length === 0 ? (
            <p>No search results found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {result.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  ) : (
    <Spinner />
  );
};

export default SearchResults;
