// import properties from "@/properties.json";
import PropertyCard from "@/components/propertyCard";

const fetchProperties = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/properties");
    if (!res.ok) {
      throw new Error("Faild to fetch");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  properties.sort((a, b) => {
    new Date(b.createdAt) - new Date(a.createdAt);
  });
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesPage;
