import Hero from "./hero/Hero";
import Feature from "./Feature/Feature";
import BestSelling from "./BestSelling/BestSelling";
import LatestItems from "./LatestItems";
import ProductList from "./ProductList/ProductList";
import Cta from "./Cta/Cta";

const Layout = () => {
  return (
    <>
      <Hero />
      <Feature />
      <BestSelling />
      <LatestItems />
      <ProductList />
      <Cta />
    </>
  );
};

export default Layout;
