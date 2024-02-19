import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function VansDetail() {
  const [van, setVan] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      const response = await fetch(`/api/vans/${id}`);
      const data = await response.json();

      setVan(data.vans);
    };

    request();
  }, [id]);

  return (
    <div className='van-detail-container'>
      {van ? (
        <div className='van-detail'>
          <img src={van.imageUrl} alt='Gambar' />

          <i className={`van-type ${van.type} selected`}>{van.type}</i>

          <h2>{van.name}</h2>

          <p>
            {van.price}
            <span>/Day</span>
          </p>

          <p>{van.description}</p>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}
