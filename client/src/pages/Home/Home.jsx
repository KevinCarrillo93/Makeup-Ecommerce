import React, { useEffect } from "react";
import { SwiperComponent } from "../../components/SwiperComponent/SwiperComponent";
import { useDispatch, useSelector } from "react-redux";
import { getHomeProducts, sortProducts, setSort } from "../../redux/actions";
import { Brands } from "../../components/Brands/Brands" 
import { NewArrivalsGallery } from "../../components/NewArrivalsGallery/NewArrivalsGallery"
import { useNavigate } from "react-router-dom";


export const Home = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { listNewArrivals, listPopular, listOffers, sortedList } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(getHomeProducts())
  }, [dispatch]);

  const handleSeeAll = (e) => {
    e.preventDefault();

  };

  return (
    <div className="font-sans">
      <div className="mx-auto max-w-2xl lg:max-w-screen-2xl">
        <div className="flex justify-between pt-20 pb-10">
          <h2 className="text-xl">Special Offers</h2>
          <button
          value="discount"
            onClick={handleSeeAll}
            className="text-sm hover:text-secondary"
          >
            see all
          </button>
        </div>
        <SwiperComponent array={listOffers} />
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-screen-2xl">
        <div className="flex justify-between pt-20 pb-10">
          <h2 className="text-xl">Popular</h2>
          <button
          value="popular"
            onClick={handleSeeAll}
            className="text-sm hover:text-secondary"
          >
            see all
          </button>
        </div>
        <SwiperComponent array={listPopular} />
      </div>
      <div className="mx-auto max-w-2xl lg:max-w-screen-2xl">
        <div className="flex justify-between pt-20 pb-10">
          <h2 className="text-xl">New Arrivals</h2>
          <button
          value="newest"
            onClick={handleSeeAll}
            className="text-sm hover:text-secondary"
          >
            see all
          </button>
        </div>
        <NewArrivalsGallery newArrivals={listNewArrivals} />
      </div>

      <div className="mx-auto max-w-2xl lg:max-w-screen-2xl">
        <div className="flex justify-between pt-20 pb-10">
          <h2 className="text-xl">Featured Brands</h2>
        </div>
        <Brands />
      </div>
    </div>
  );
};
