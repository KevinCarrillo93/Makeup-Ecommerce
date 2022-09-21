import React, { useEffect } from "react";
import { SwiperComponent } from "../../components/SwiperComponent/SwiperComponent";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, sortProducts } from "../../redux/actions";
import { Brands } from "../../components/Brands/Brands" 
import { NewArrivalsGallery } from "../../components/NewArrivalsGallery/NewArrivalsGallery"


export const Home = () => { 
  const dispatch = useDispatch();

  const { products, listNewArrivals, listPopular, listOffers } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleSeeAll = (e) => {
    e.preventDefault();
    dispatch(sortProducts());
  };

  return (
    <div className="font-sans">
      <div className="mx-auto max-w-2xl lg:max-w-screen-2xl">
        <div className="flex justify-between pt-20 pb-10">
          <h2 className="text-xl">Special Offers</h2>
          <button
            onClick={() => handleSeeAll("discount")}
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
            onClick={() => handleSeeAll("popular")}
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
            onClick={() => handleSeeAll("newest")}
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
