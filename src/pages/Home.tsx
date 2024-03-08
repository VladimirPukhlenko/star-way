import Categories from "../components/Categories";
import Banners from "../components/Banners";
import { OfferList } from "../components/OfferList";

export const Home = () => {
  return (
    <div className="container py-10 flex flex-col gap-8">
      <Categories />
      <Banners />
      <OfferList />
    </div>
  );
};
