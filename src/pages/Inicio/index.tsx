import galeria from 'data/galeria.json';
import styles from './Inicio.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';
import { Carro } from 'types/Carro';

export default function Inicio() {
  let carrosRecomendados = [...galeria];
  carrosRecomendados = carrosRecomendados.sort(() => 0.5 - Math.random()).splice(0,3);
  const navigate = useNavigate();

  function redirecionarParaDetalhes(carro: Carro) {
    navigate(`/carro/${carro.id}`, { state: { carro }, replace: true });
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Os melhores do dia
      </h3>
      <div className={styles.recomendados}>
        {carrosRecomendados.map(item => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
              <h3 className={styles.titulo}>{item.title}</h3>
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionarParaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}