import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getProductByName, getProducts } from "../../redux/actions";

export const NavBar = () => {

  const dispatch = useDispatch();
  const [name,setName] = useState("");
  const error = useSelector(state => state.error);

function buscar (name) {
  if (name==="") {
    dispatch (getProducts())
    dispatch(getProductByName(""))
  } else {
    dispatch (getProductByName(name))
  }
}

function handleSubmit (e) {
  e.preventDefault();
  buscar(name)
  setName("");
};
  

  return (
    <nav >
      <div >
        <div >
          <Link to="./">MAKE UP</Link>
        </div>
        <div >
          <Link to="./home">Home</Link>
          <Link to="./listproducts/1">Catalogue</Link>
          <Link to="./createproduct">Create Product</Link>
          <Link to="./about">About</Link>
        </div>
      </div>
    
      <form onSubmit={handleSubmit}>

      <input 
          type="text"
          placeholder="Buscar..."
          value={name}
          onChange={e=> setName(e.target.value)}
        />
        <input type="submit" value="Search" />
        {error && typeof error==="string"? <p>{error}</p>:null}

      </form>
    
    {/* BOTONES CON LOS ÍCONOS PARA CARRITO, CORAZONES Y LOGIN */}
      <div >
          <button>
            {/* <img src={} alt="icon" /> */}
          </button>
          <button>
            {/* <img src={} alt="icon" /> */}
          </button>
          <button>
            {/* <img src={} alt="icon" /> */}
          </button>
      </div>
    </nav>
  );  
}