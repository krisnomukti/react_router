import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const request = async () => {
      const response = await fetch(`/api/vans/${id}`);
      const data = await response.json();

      setCurrentVan(data.vans);
    };

    request();
  }, [id]);

  if (!currentVan) return <h2>Loading...</h2>;

  return (
    <section>
      <div className='host-van-detail-layout-container'>
        <div className='host-van-detail'>
          <img src={currentVan.imageUrl} alt='Gambar' />

          <div className='host-van-detail-info-text'>
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>

            <h3>{currentVan.name}</h3>

            <h4>{currentVan.price}/Day</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
