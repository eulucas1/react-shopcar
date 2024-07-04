import styles from './Carro.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import galeria from 'data/galeria.json';
import { lazy } from 'react';

const TagsCarro = lazy(() => import('components/TagsCarro'));
const NotFound = lazy(() => import('pages/NotFound'));
const PaginaPadrao = lazy(() => import('components/PaginaPadrao'));

export default function Carro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const carro = galeria.find(item => item.id === Number(id));
  if (!carro) {
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
          <>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
              {'< Voltar'}
            </button>
            <section className={styles.container}>
              <h1 className={styles.titulo}>
                {carro.title}
              </h1>
              <div className={styles.imagem}>
                <img src={carro.photo} alt={carro.title} />
              </div>
              <div className={styles.conteudo}>
                <p className={styles.conteudo__descricao}>
                  {carro.description}
                </p>
                <TagsCarro {...carro} />
              </div>
            </section>
          </>
        } />
      </Route>
    </Routes>
  );
}