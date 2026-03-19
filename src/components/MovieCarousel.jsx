import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const PELICULAS = [
  {
    id: 1,
    titulo: 'Dune: Parte Dos',
    imagen: 'https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
    rating: 'PG-13',
    genero: 'Sci-Fi',
    score: '8.6',
  },
  {
    id: 3,
    titulo: 'Godzilla x Kong',
    imagen: 'https://image.tmdb.org/t/p/original/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg',
    rating: '13+',
    genero: 'Acción',
    score: '7.8',
  },
  {
    id: 4,
    titulo: 'The Batman',
    imagen: 'https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    rating: '17+',
    genero: 'Acción',
    score: '7.9',
  },
  {
    id: 5,
    titulo: 'Oppenheimer',
    imagen: 'https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    rating: '17+',
    genero: 'Drama',
    score: '8.9',
  },
  {
    id: 6,
    titulo: 'Spider-Man: No Way Home',
    imagen: 'https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    rating: 'PG-13',
    genero: 'Superhéroes',
    score: '8.3',
  },
  {
    id: 7,
    titulo: 'Avatar: El Camino del Agua',
    imagen: 'https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    rating: 'PG-13',
    genero: 'Aventura',
    score: '7.6',
  },
]

const MovieCarousel = () => {
  return (
    <div className="movie-carousel">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation={true}
        pagination={{ clickable: true }}
        className="movie-carousel__swiper"
      >
        {PELICULAS.map((pelicula) => (
          <SwiperSlide key={pelicula.id}>
            <Link to={`/pelicula/${pelicula.id}`} className="carousel-slide">
              <div
                className="carousel-slide__bg"
                style={{ backgroundImage: `url(${pelicula.imagen})` }}
              />
              <div className="carousel-slide__overlay" />
              <div className="carousel-slide__content">
                <span className="carousel-slide__genre">{pelicula.genero}</span>
                <h2 className="carousel-slide__title">{pelicula.titulo}</h2>
                <div className="carousel-slide__meta">
                  <span className="carousel-slide__rating-age">{pelicula.rating}</span>
                  <span className="carousel-slide__score">⭐ {pelicula.score}</span>
                </div>
                <span className="carousel-slide__cta">Ver detalles →</span>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MovieCarousel
