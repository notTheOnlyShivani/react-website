import React from 'react';
import { productList } from '../helper/productList';
import ProductItem from '../Components/ProductItem';
import "../styles/Product.css"; 

function Products() {
  return (
    <div className="products">
        <h1 className="productTitle">OUR PRODUCTS</h1>
        <div className='productList'>
         {productList.map((productItem, key) => {
            return <ProductItem key={key} image={productItem.image} name={productItem.name}/>
         })}
        </div>
    </div>
  )
}

export default Products;