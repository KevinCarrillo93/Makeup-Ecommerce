import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getProductByName, getProducts } from "../../redux/actions";

export const NavBar = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const error = useSelector(state => state.error);

// function buscar (name) {
//   if (name==="") {
//     dispatch(getProductByName(""))
//   } else {
//     dispatch(getProductByName(name))
//   }
// }

function handleSubmit (e) {
  e.preventDefault();
  if(e.key === 'Enter'){
    dispatch(getProductByName(name))
    setName("");
} else if (!e.key){
  dispatch(getProductByName(name))
  setName("");
}
  
};
  

  return (
    <nav >
      <div >
        <div >
          <Link to="./">MAKE UP</Link>
        </div>
        <div >
          <Link to="./home">Home</Link>
          <Link to="./catalogue">Catalogue</Link>
          <Link to="./createproduct">Create Product</Link>
          <Link to="./about">About</Link>
        </div>
      </div>
    

      <input 
          type="text"
          placeholder="Search..."
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyUp={handleSubmit}
        />
        <button type="submit" onClick={handleSubmit}>Search</button>
        {error && typeof error==="string"? <p>{error}</p>:null}

    
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