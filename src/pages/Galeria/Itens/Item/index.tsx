import styles from './Item.module.scss';
import { Carro } from 'types/Carro';
import TagsCarro from 'components/TagsCarro';
import { useNavigate } from 'react-router-dom';
import { memo } from 'react';

function Item(props: Carro) {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.item} onClick={() => navigate(`/carro/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
        <TagsCarro {...props} />
      </div>
    </div>
  );
}

export default memo(Item);