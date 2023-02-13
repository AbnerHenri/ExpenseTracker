import { useState, useEffect } from 'react';
import './App.css';

import { CategoryType } from './Types/CategoryType';
import { ItemsType } from './Types/ItemType';

import { CategoryData } from './Data/CategoryData';
import { ItemsData } from './Data/ItemsData';

import { getCurrentMonth } from './Helpers/DateFilter';


function App() {

  const [list, setList] = useState(ItemsData)
  const [filtredList, setFiltredList] = useState<ItemsType[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(()=>{

  }, [list, filtredList])

  return (
    <>
      <div className='Header'>
        <h2>Sistema de Finanças Pessoais</h2>
      </div>

      <div className='Body'>
        <h2>...</h2>

          {/* Área de informação  */}

          {/* Área de inserção */}

          {/* Área de Itens */}
          
      </div>
    </>
  );
}

export default App;
