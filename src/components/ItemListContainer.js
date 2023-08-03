import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={containerStyles}>
      <p style={textStyles}>{greeting}</p>
    </div>
  );
};

const containerStyles = {
  backgroundColor: '#f3e5f5',
  padding: '50px',
  borderRadius: '15px',
  textAlign: 'center',
};

const textStyles = {
  color: '#8e24aa',
  fontSize: '1.5rem',
  fontWeight: 'bold',
};

export default ItemListContainer;
