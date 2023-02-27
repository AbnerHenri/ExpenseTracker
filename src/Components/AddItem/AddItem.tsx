import { useEffect, useState } from 'react';
import './AddItem.css'

import { ItemsType } from '../../Types/ItemType';
import AddImage from '../../Assets/Plus.png'

type Props = {
    onAddItem : (item: ItemsType) => void,
    List : ItemsType[],
}

function AddItem({onAddItem, List}: Props) {

    const [date, setDate] = useState('')
    const [formatDate, setFormatDate] = useState('')
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [expense, setExpense] = useState<Boolean>(true)
    const [myValue, setMyValue] = useState('')

    useEffect(()=>{
      function setExpenseType(option: string) {
        switch (option) {
          case 'Gasto Fixo' || 'Gasto Variável':
            setExpense(true)
            break;

          case 'Renda Fixa' || 'Renda Vairável':
            setExpense(false)
            break;

          default:
            break;
        }
      }

      setExpenseType(category)
      
    }, [category])

    useEffect(()=>{
      function formatDateType(Date: string) {
        let [date, month, year] = Date.split('-')

        setFormatDate(`${date}/${Number(month) + 1}/${year}`)
      }

      formatDateType(date)
    }, [date])


  return(
    <div className='AddArea'>

      <div className='InputArea'>
        <label>Data :</label>
        <input type='date' name='date' value={date} onChange={(e) => setDate(e.target.value)} className='Input' />
      </div>

      <div className='InputArea'>
        <label>Tipo :</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)} className='Input'>
          <option></option>
          <option>Gasto Fixo</option>
          <option>Gasto Variável</option>
          <option>Renda Fixa</option>
          <option>Renda Variável</option>
        </select>
      </div>

        <div className='InputArea'>
          <label>Título :</label>
          <input className='Input' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className='InputArea'>
          <label>Valor :</label>
          <input className='Input' type='text' value={myValue} onChange={(e) => setMyValue(e.target.value)} />
        </div>
        

      <img className='AddButton' src={AddImage} onClick={() => onAddItem({
        date: new Date(formatDate),
        category: category,
        title: title,
        value: Number(myValue),
        expense: expense
      })} />
    </div>
  );
}

export default AddItem;