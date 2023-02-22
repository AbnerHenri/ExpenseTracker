import './InfoArea.css'

import { formatCurrentMonth } from '../../Helpers/DateFilter'
import ResumeItem from '../ResumeItem/ResumeItem'
import { useEffect } from 'react'

type Props = {
    currentMonth : String,
    onMonthChange : (newMonth : String) => void,
    income : number,
    expense : number,
}

function InfoArea({currentMonth, onMonthChange, income, expense }: Props){

    function handlePrevMonth() {
        const [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth( currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
    }

    function handleNextMonth() {
        const [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`)
    }

  return(
    <div className="InfoArea">
       <div className='MonthArea'>
            <div className='Arrow' onClick={()=> handlePrevMonth()}>⬅</div>
            <div className='MonthTitle'>{formatCurrentMonth(currentMonth)}</div>
            <div className='Arrow' onClick={()=> handleNextMonth()}>➡</div>
       </div>

       <div className='ResumeArea'>
          <ResumeItem title={'Renda'} value={income} textColor={'#00FA9A'}/>
          <ResumeItem title={'Despesas'} value={expense} textColor={'#FF6347'}/> 
          <ResumeItem title={'Balanço'} value={income - expense} textColor={'#836FFF'}/>
       </div>
    </div>
  );
}

export default InfoArea;