import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import foto from 'assets/sobre/sobre1.jpeg';

export default function Sobre() {
  return (
    <section>
      <h3 className={stylesTema.titulo}> Sobre </h3>
      <div className={styles.sobreNos}>
        <img src={foto} alt="Imagem de carros" className={styles.imagens} />
        <div className={styles.sobreNos__texto}>
          <p>
            Nós da Shop Car oferecemos a vocês os melhores e mais sofisticados carros de São Paulo!
          </p>
          <p>
            Possuímos ótimos modelos de carros das marcas mais renomadas.
          </p>
          <p>
            A Shop Car preza por segurança, por isso oferecemos 1 ano de garantia em qualquer veículo que você adquirir!
          </p>
          <p>
            Além disso, nossos veículos passam por uma rigorosa inspeção de qualidade antes de serem colocados à venda, garantindo que você receba um carro em perfeito estado.
          </p>
          <p>
            Venha nos visitar e descubra o carro dos seus sonhos com o melhor atendimento e condições exclusivas na Shop Car!
          </p>

        </div>
      </div>
    </section>
  );
}