import './InfoArea.css'

import { formatCurrentMonth } from '../../Helpers/DateFilter'

type Month = {
    currentMonth : String,
    onMonthChange : (newMonth : String) => void
}

function InfoArea({currentMonth, onMonthChange }: Month){

    function handlePrevMonth() {
        const [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month), 1)
        currentDate.setMonth( currentDate.getMonth() - 1 );
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth()}`)
    }

    function handleNextMonth() {
        const [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month), 1)
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()} - ${currentDate.getMonth()}`)
    }

  return(
    <div className="InfoArea">
       <div className='MonthArea'>
            <div className='Arrow' onClick={()=> handlePrevMonth()}>⬅</div>
            <div className='MonthTitle'>{formatCurrentMonth(currentMonth)}</div>
            <div className='Arrow' onClick={()=> handleNextMonth()}>➡</div>
       </div>

       <div className='ResumeArea'>
            
       </div>
    </div>
  );
}

export default InfoArea;