import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home-container'>
      <h1>You got the travel plans. We got the travel vans</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        facilis esse officiis accusantium earum eum sequi aut doloribus
        voluptatem quos.
      </p>

      <Link to='/vans'>Find your van</Link>
    </div>
  );
}
