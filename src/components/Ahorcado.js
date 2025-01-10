
import React from 'react';

// define un componente llamado Ahorcado que recibe mistakes como una propiedad
const Ahorcado = ({ mistakes }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <p style={{ fontSize: '1.5em' }}>Errores: {mistakes}</p>
    </div>
  );
};

export default Ahorcado;
