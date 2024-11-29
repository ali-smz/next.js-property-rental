// fetch properties
const fetchProperties = async ({ showFeatured = false } = {}) => {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
  try {
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(
      `${apiDomain}/properties${showFeatured ? "/featured" : ""}`
    );
    if (!res.ok) {
      throw new Error("Faild to fetch");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

// fetch property
const fetchProperty = async (id) => {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
  try {
    if (!apiDomain) {
      return null;
    }
    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) {
      throw new Error("Faild to fetch");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};
export { fetchProperties, fetchProperty };
