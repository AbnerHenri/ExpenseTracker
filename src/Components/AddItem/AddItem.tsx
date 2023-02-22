

import './AddItem.css'
import { ItemsType } from '../../Types/ItemType';


type Props = {
    onAddItem : (item: ItemsType) => void
}

function AddItem({onAddItem}: Props) {

    // function Change(ev : any) {
    //     const { value } = ev.target
    // } 

  return(
    <div className='AddArea'>
        <input type='date' name='date'/>
        <button>Adicionar</button>
    </div>
  );
}

export default AddItem;