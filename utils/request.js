const fetchProperties = async () => {
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;
  try {
    if (!apiDomain) {
      return [];
    }
    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) {
      throw new Error("Faild to fetch");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export { fetchProperties };
