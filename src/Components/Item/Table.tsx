import './Table.css'
import { ItemsType } from '../../Types/ItemType';

type Props = {
  list : ItemsType[]
}

function Table({ list }: Props) {
  return(
    <table className='Table'>
      <thead>
        <tr className='TableHead'>
          <h3>Data</h3>
          <h3>Categoria</h3>
          <h3>Título</h3>
          <h3 className='Value'>Valor</h3>
        </tr>
      </thead>

      <tbody>
        {list.map((e, index)=>
          <tr key={index}>
            <td></td>
            <td></td>
            <td>{e.title}</td>
            <td></td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;