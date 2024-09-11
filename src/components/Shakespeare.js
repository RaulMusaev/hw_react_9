import React from 'react';
import { Link } from 'react-router-dom';

const Shakespeare = () => {
  return (
    <div>
      <h1>Раздел Шекспира</h1>
      <ul>
        <li>
          <Link to="/shakespeare-info">Информация о поэте</Link>
        </li>
        <li>
          <Link to="/famous-works">Самые известные произведения</Link>
        </li>
        <li>
          <Link to="/globe-theatre">Театр «Глобус»</Link>
        </li>
      </ul>
    </div>
  );
};

export default Shakespeare;