import React from 'react';
import { Link } from 'react-router-dom';

const Baku = () => {
  return (
    <div>
      <h1>Раздел Баку</h1>
      <ul>
        <li>
          <Link to="/baku-info">Информация о Баку</Link>
        </li>
        <li>
          <Link to="/famous-landmark">Самая известная достопримечательность</Link>
        </li>
        <li>
          <Link to="/other-landmarks">Другие достопримечательности</Link>
        </li>
      </ul>
    </div>
  );
};

export default Baku;