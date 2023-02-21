import './Table.css'
import { ItemsType } from '../../Types/ItemType';
import { formatDate } from '../../Helpers/DateFilter';

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
            <td style={{ fontSize : 14 }}>{formatDate(e.date)}</td>
            <td>{e.category}</td>
            <td>{e.title}</td>
            <td>R$ {Number(e.value)}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Table;