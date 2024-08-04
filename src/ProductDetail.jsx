import React from 'react';
import { useParams } from 'react-router-dom';
import { productdata } from './data';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productdata[0].find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: '300px' }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate} (based on {product.rating.count} reviews)</p>
    </div>
  );
}

export default ProductDetail;
