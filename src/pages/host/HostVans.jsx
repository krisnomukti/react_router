import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const request = async () => {
      const response = await fetch('/api/vans');
      const data = await response.json();

      setVans(data.vans);
    };

    request();
  }, []);

  const hostElements = vans.map(({ id, name, price, type, imageUrl }) => {
    return (
      <Link key={id} to={`/host/vans/${id}`} className='host-van-link-wrapper'>
        <div className='host-van-single'>
          <img src={imageUrl} alt='Gambar' />

          <div className='host-van-info'>
            <h3>{name}</h3>

            <p>
              {price}
              <span>/Day</span>
            </p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section>
      <h1 className='host-vans-title'>You listed vans</h1>
      <div className='host-vans-list'>
        {vans.length > 0 ? (
          <section>{hostElements}</section>
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    </section>
  );
}
