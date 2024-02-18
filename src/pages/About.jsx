import { Link } from 'react-router-dom';

import BackgroundImage from '../assets/images/about-hero.png';

export default function About() {
  return (
    <div className='about-page-container'>
      <img src={BackgroundImage} alt='Gambar' className='about-hero-image' />
      <div className='about-page-content'>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          totam nisi blanditiis tempora fuga impedit?
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae culpa
          ducimus deserunt consequuntur harum atque nobis perferendis dolore.
          Odio nostrum similique ducimus repellat velit doloremque dolor ab
          tempore. Aliquid, quidem magni. Blanditiis eveniet cupiditate
          distinctio atque voluptatibus tenetur molestias sint maiores ullam.
          Nemo eum est quo error dicta quas molestias.
        </p>
      </div>

      <div className='about-page-cta'>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, non
          aliquid doloribus quasi laudantium cum.
        </h2>

        <Link to='/vans' className='link-button'>
          Explore our vans
        </Link>
      </div>
    </div>
  );
}
