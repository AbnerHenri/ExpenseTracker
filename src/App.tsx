import { useState, useEffect } from 'react';
import './App.css';

import { ItemsType } from './Types/ItemType';
import { ItemsData } from './Data/ItemsData';

import { getCurrentMonth, filterListByMonth } from './Helpers/DateFilter';

import Table from './Components/Item/Table';
import InfoArea from './Components/InfoArea/InfoArea';
import AddItem from './Components/AddItem/AddItem';


function App() {

  const [list, setList] = useState(ItemsData)
  const [filtredList, setFiltredList] = useState<ItemsType[]>([])
  const [currentMonth, setCurrentMonth] = useState<String>(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(()=>{
    setFiltredList( filterListByMonth(list, currentMonth) )
  }, [list, currentMonth])

  useEffect(()=> {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filtredList) {
      if(filtredList[i].expense) {
        expenseCount += filtredList[i].value
      }else{
        incomeCount += filtredList[i].value
      }
    }

    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filtredList])

  function handleDate(newMonth : String): void {
    setCurrentMonth(newMonth)
  }

  function onAddItem(item: ItemsType) : void {
    const newList = [...list]
    newList.push(item)
    setList(newList)
  }

  return (
    <>
      <div className='Header'>
        <h3>Sistema de Finanças Pessoais</h3>
      </div>

      <div className='Body'>

          {/* Área de informação  */}

          <InfoArea 
            onMonthChange={handleDate} 
            currentMonth={currentMonth} 
            income={income}
            expense={expense}
          />

          {/* Área de inserção */}

          <AddItem onAddItem={onAddItem}/>

          {/* Área de Itens */}
        
          <Table list={filtredList}/>

      </div>
    </>
  );
}

export default App;
