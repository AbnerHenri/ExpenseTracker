import './Table.css'
import { ItemsType } from '../../Types/ItemType';

type Props = {
  list : ItemsType[]
}

function Table({ list }: Props) {
  return(
    <table className='Table'>
      <thead>
        <tr>
          <th className='HeadColumn' style={{ width : 100 }}>Data</th>
          <th className='HeadColumn' style={{ width: 130 }}>Categoria</th>
          <th className='HeadColumn'>Título</th>
          <th className='HeadColumn' style={{ width: 130 }}>Valor</th>
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