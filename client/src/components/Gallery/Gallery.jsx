import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setSort, sortProducts } from "../../redux/actions";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Link } from "react-router-dom";


export const Gallery = ({currentProducts}) => {
  return (
    <div className="bg-white">
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {currentProducts?.map((p) => {
        return (
            <Link to={`/details/${p.id}`} key={p.id}>
              <ProductCard
                {... p}          
              />
            </Link>
        );
      })}
      </div>
      </div>
    </div>
  );
};