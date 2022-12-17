import { Link } from 'react-router-dom';

const ghostImage = 'https://picsum.photos/seed/picsum/300/444';

const MovieCard = () => {
  return (
    <div className='movie-card'>
      <figure>
        <img src={ghostImage} alt='' />
      </figure>
      <div className='movie-card__info'>
        <h4>Title</h4>
        <h5>Year</h5>
        <Link to={`/`} className='link-btn'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
