import { useMemo } from "react";
import { FeaturedProducts, Hero } from "../components";
import productsData from "../data/furniture.json";

const Landing = () => {
  const featuredProducts = useMemo(
    () => productsData.filter((product) => product.featured),
    []
  );

  return (
    <div>
      <Hero />
      <FeaturedProducts products={featuredProducts} />
    </div>
  );
};

export default Landing;
