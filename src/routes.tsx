import Footer from 'components/Footer';
import Menu from 'components/Menu';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Galeria = lazy(() => import('pages/Galeria'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));
const Inicio = lazy(() => import('pages/Inicio'));
const NotFound = lazy(() => import('pages/NotFound'));
const Carro = lazy(() => import('pages/Carro'));
const Sobre = lazy(() => import('pages/Sobre'));

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <Suspense fallback={<p> Carregando... </p>}>
          <Routes>
            <Route path='/' element={<PaginaPadrao />}>
              <Route index element={<Inicio />} />
              <Route path='galeria' element={<Galeria />} />
              <Route path='sobre' element={<Sobre />} />
            </Route>
            <Route path='carro/:id' element={<Carro />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}