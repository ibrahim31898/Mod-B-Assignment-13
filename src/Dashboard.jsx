import React from 'react';
import { productdata } from './data';
import MediaCard from './card';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {productdata[0].map(product => (
          <div key={product.id} style={{ margin: '10px' }}>
            <MediaCard 
              title={product.title}
              desc={product.description}
              image={product.image}
              id={product.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
