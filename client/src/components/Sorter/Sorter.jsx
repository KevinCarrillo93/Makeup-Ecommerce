import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortProducts, filterBrands } from '../../redux/actions';

export const Sorter = ({pagination}) => {
    const dispatch = useDispatch();

    //! get brands array

    const [sorter, setSorter] = useState('')
  

    const handleSort = (e) => {
        dispatch(sortProducts(e.target.value));
        setSorter(e.target.value)
        pagination(1) 
    }
return(
    <div className='filter-sorter'>

{/* sort */}
         <div className='drop-down'>
               <div>
                <select onChange={handleSort}>
                    <option disabled="disabled" value="sort" selected="true">Sort</option>
                    {/* <option value="popular">Sort – Best Selling</option>
                    <option value="newest">Sort – Newest</option> */}
                    <option value="A-Z">Sort – A-Z</option>
                    <option value="Z-A">Sort – Z-A</option>
                    <option value="priceAsc">Sort – Price (low to high)</option>
                    <option value="priceDesc">Sort – Price (high to low)</option>
                    
                </select>           
            </div>
        </div>

        <div className='drop-down'>
    
        </div>
    </div>
)
}
