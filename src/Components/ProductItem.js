import React from 'react';
import arrow from "../assets/arrow.png";

function ProductItem({image, name}) {
  return (
    <div>
        <div className="productItem">
            <div className="items">
              <img src={image} width="180px" height="240px"/>
              <h1 className="titles">{name}</h1>
            </div>
            {/* <img className="arrow" src={arrow} width="20px"/> */}
            
        </div>
    </div>
  )
}

export default ProductItem;