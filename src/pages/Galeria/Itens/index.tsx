import galeria from 'data/galeria.json'; 
import Item from './Item';
import styles from './Itens.module.scss';
import { useState, useEffect } from 'react';
import { Galeria } from 'types/Carro';

interface Props {
  busca: string,
  filtro: number | null,
  ordenador: string
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(galeria);
  const { busca, filtro, ordenador } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if(filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: Galeria) {
    switch(ordenador) {
    case 'ano': 
      return novaLista.sort((a, b) => a.year > b.year ? 1 : -1);
    case 'portas':
      return novaLista.sort((a,b) => a.doors > b.doors ? 1 : -1);
    case 'preco':
      return novaLista.sort((a,b) => a.price > b.price ? 1 : -1);
    default:
      return novaLista; 
    }
  }

  useEffect(() => {
    const novaLista = galeria.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));
  },[busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map(item => <Item key={item.id} {...item} />)}
    </div>
  );
}