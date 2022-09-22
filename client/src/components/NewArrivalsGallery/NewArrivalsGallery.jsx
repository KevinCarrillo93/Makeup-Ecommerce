import React from "react";
import { Link } from 'react-router-dom';
import {NewArrivalsCard} from "../NewArrivalsCard/NewArrivalsCard"

export const NewArrivalsGallery = ({ newArrivals }) => {
    return(
        <div className='flex flex-wrap pt-4'>
      <div className="flex justify-center items-center">
      <div className='grid grid-cols-1 gap-y-10 gap-x-24 sm:grid-cols-2 lg:grid-cols-3'>
      {newArrivals?.map((p, index) => {
        return (
          <div className="flex flex-col items-start" key={index}>
            <Link to={`/details/${p.id}`}>
              <NewArrivalsCard
                {... p}
              />
            </Link>
            </div>
        );
      })}
    </div>
    </div>
    </div>
    )
}
