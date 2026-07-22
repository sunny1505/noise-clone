import HeroSlider from "../components/home/HeroSlider";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import ProductSlider from "../components/home/ProductSlider";
import FreshFinds from "../components/home/FreshFinds";
import ShopGallery from "../components/home/ShopGallery";
import BundleSlider from "../components/home/BundleSlider";


function Home() {
  return (
    <>
  <HeroSlider />
  <Categories />
  <FeaturedProducts />
  <FreshFinds />
  <BundleSlider />
  <ShopGallery />
</>
  );
}

export default Home;