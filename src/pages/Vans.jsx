import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await fetch('/api/vans');
      const data = await response.json();

      setVans(data.vans);
    };

    request();
  }, []);

  const vanElements = vans.map(({ id, name, price, type, imageUrl }) => {
    return (
      <div className='van-tile' key={id}>
        <Link to={`/vans/${id}`}>
          <img src={imageUrl} alt='Gambar' />

          <div className='van-info'>
            <h1>{name}</h1>

            <p>
              {price}
              <span>/Day</span>
            </p>
          </div>

          <i className={`van-type ${type} selected`}>{type}</i>
        </Link>
      </div>
    );
  });

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>

      <div className='van-list'>{vanElements}</div>
    </div>
  );
}
