"use client";
import { useState, useEffect } from "react";
import { Spinner, PropertyCard } from ".";

const Properties = () => {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [total, setTotal] = useState();

  const maxPage = Math.ceil(total / pageSize);
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          `/api/properties?page=${page}&pageSize=${pageSize}`
        );
        if (res.status === 200) {
          const data = await res.json();
          data.properties.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setProperties(data.properties);
          setTotal(data.total);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, [page, pageSize]);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto flex justify-center items-center my-8">
        <button
          disabled={page === 1}
          onClick={() => {
            window.scrollTo(0, 0);
            setPage(page - 1);
          }}
          className="mr-2 px-2 py-1 border border-gray-300 rounded"
        >
          Previous
        </button>

        <span className="mx-2">
          Page {page} of {maxPage}
        </span>

        <button
          onClick={() => {
            window.scrollTo(0, 0);
            setPage(page + 1);
          }}
          disabled={page === maxPage}
          className="ml-2 px-2 py-1 border border-gray-300 rounded"
        >
          Next
        </button>
      </section>
    </>
  );
};

export default Properties;
