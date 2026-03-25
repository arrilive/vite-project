import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { MOVIES, CAROUSEL_MOVIE_IDS } from '../data/movies'

const CAROUSEL_MOVIES = MOVIES.filter(m => CAROUSEL_MOVIE_IDS.includes(m.id))

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
        {CAROUSEL_MOVIES.map((pelicula) => (
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
