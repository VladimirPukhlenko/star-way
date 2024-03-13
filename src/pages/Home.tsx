import { Banners } from "../components/Banners";
import { Categories } from "../components/Categories";
import { OfferList } from "../components/Offers/OfferList";

export const Home = () => (
  <div className="container flex flex-col gap-8 py-10">
    <Categories />
    <Banners />
    <OfferList />
  </div>
);
