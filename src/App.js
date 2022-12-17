import './scss/styles.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home';
import MovieDetail from './pages/MovieDetail/MovieDetail';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <main>
      <Routes>
        <Route path='redux-moviemania' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movie/:movieId' element={<MovieDetail />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
