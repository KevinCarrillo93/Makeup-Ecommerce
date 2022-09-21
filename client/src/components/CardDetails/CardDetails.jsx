import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById, getProductType } from "../../router/redux/actions";
import { useSelector, useParams } from "react-redux";
import { useEffect } from "react";

export const CardDetails = () => {
  // traer selector
  const { productDetail, productType } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  // !
  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(getProductType());
  }, [dispatch, id]);

  return (
    <div>
      <img src={productDetail.image} alt="imagen_producto" />
      <h3>{productDetail.name}</h3>
      <p>{productDetail.rating}</p>
      <p>$ {productDetail.price}</p>
      {/* pinches colores*/}
      {/* <AddCart /> */}
      <p>{productDetail.description}</p>

      <h1> You May Also Like</h1>
      {/* <YouMayAlsoLike type={productDetail.product_type} /> */}
    </div>
  );
};
