import classNames from 'classnames';
import { Carro } from 'types/Carro';
import styles from './TagsCarro.module.scss';

export default function TagsCarro({
  category,
  year,
  doors,
  price
}: Carro) {
  return (
    <div className={styles.tags}>
      <div className={classNames({
        [styles.tags__tipo]: true,
        [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true
      })}>{category.label}</div>
      <div className={styles.tags__ano}>{year}</div>;
      <div className={styles.tags__portas}>{doors} porta{doors === 1 ? '' : 's'}</div>
      <div className={styles.tags__valor}>R$ {price.toFixed(3)}</div>
    </div>
  );
}