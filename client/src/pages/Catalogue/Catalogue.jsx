import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions";

import { Gallery } from "../../components/Gallery/Gallery";
import { Sorter } from "../../components/Sorter/Sorter";
import { Pagination } from "../../components/Pagination/Pagination";


export const Catalogue = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const { products } = useSelector(state => state);

    /* Configuración de pagination */
    const [currentPage, setCurrentPage] = useState(1);
    const pageLength = 16; // productos por página
    const indexOfLast = currentPage * pageLength; // 1 * 9
    const indexOfFirst = indexOfLast - pageLength; // 9 - 9

    // Seteo las recetas que se muestran en cada página (9 por página)
    const currentProducts = products.slice(indexOfFirst, indexOfLast); // entre 0 y 9 (no inclusive)
    
    // Función para setear la página que se muestra
    const pagination = pageNum => setCurrentPage(pageNum);
  return (
    <div>
      <Sorter pagination={pagination}/>
      <Gallery currentProducts={currentProducts}/>
      <Pagination currentPage={currentPage} pageLength={pageLength} products={products.length} pagination={pagination}/>

    </div>
  );
};
