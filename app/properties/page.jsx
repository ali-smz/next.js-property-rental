import { Properties, PropertySearchForm } from "@/components";

const PropertiesPage = async () => {
  return (
    <>
      <div className="bg-blue-700 py-8 mb-4">
        <PropertySearchForm />
      </div>
      <Properties />
    </>
  );
};

export default PropertiesPage;
