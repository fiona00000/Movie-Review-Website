import './App.css';
import api from './api/axiosConfig'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/home/Home'
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import WatchList from './components/watchList/WatchList'
import Login from './components/login/Login'
import Register from './components/register/Register'
import About from './components/about/About'
import NotFound from './components/notFound/NotFound'

function App() {
  const [movies, setMovies] = useState([])
  const [movie, setMovie] = useState()
  const [reviews, setReviews] = useState([])

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies")

      setMovies(response.data)

    } catch (err) {
      console.log(err)
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`)

      const singleMovie = response.data

      setMovie(singleMovie)

      setReviews(singleMovie.reviews || [])
    }
    catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movies} />}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer />}></Route>
          <Route path='/Reviews/:movieId'
            element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews} />}></Route>
          <Route path='/WatchList/' element={<WatchList />} />
          <Route path='/About/' element={<About />} />
          <Route path='/Login/' element={<Login />} />
          <Route path='/Register/' element={<Register />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div >
  );
}

export default App;
