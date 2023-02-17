import { useState, useEffect } from 'react';
import './App.css';

// import { CategoryType } from './Types/CategoryType';
import { ItemsType } from './Types/ItemType';

// import { CategoryData } from './Data/CategoryData';
import { ItemsData } from './Data/ItemsData';

import { getCurrentMonth, filterListByMonth } from './Helpers/DateFilter';

import Table from './Components/Item/Table';


function App() {

  const [list, setList] = useState(ItemsData)
  const [filtredList, setFiltredList] = useState<ItemsType[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(()=>{
    setFiltredList( filterListByMonth(list, currentMonth) )
  }, [list, currentMonth])

  console.log(filtredList)

  return (
    <>
      <div className='Header'>
        <h2>Sistema de Finanças Pessoais</h2>
      </div>

      <div className='Body'>

          {/* Área de informação  */}

          {/* Área de inserção */}

          {/* Área de Itens */}
        
          <Table list={filtredList}/>

      </div>
    </>
  );
}

export default App;
