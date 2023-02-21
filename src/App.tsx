import { useState, useEffect } from 'react';
import './App.css';

import { ItemsType } from './Types/ItemType';
import { ItemsData } from './Data/ItemsData';

import { getCurrentMonth, filterListByMonth } from './Helpers/DateFilter';

import Table from './Components/Item/Table';
import InfoArea from './Components/InfoArea/InfoArea';


function App() {

  const [list, setList] = useState(ItemsData)
  const [filtredList, setFiltredList] = useState<ItemsType[]>([])
  const [currentMonth, setCurrentMonth] = useState<String>(getCurrentMonth())

  useEffect(()=>{
    setFiltredList( filterListByMonth(list, currentMonth) )
  }, [list, currentMonth])

  function handleDate(newMonth : String): void {
    setCurrentMonth(newMonth)
  }

  return (
    <>
      <div className='Header'>
        <h3>Sistema de Finanças Pessoais</h3>
      </div>

      <div className='Body'>

          {/* Área de informação  */}

         <InfoArea onMonthChange={handleDate} currentMonth={currentMonth} />

          {/* Área de inserção */}

          {/* Área de Itens */}
        
          <Table list={filtredList}/>

      </div>
    </>
  );
}

export default App;
