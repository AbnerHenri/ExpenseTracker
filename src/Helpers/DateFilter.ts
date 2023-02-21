import { ItemsType } from "../Types/ItemType"


export const getCurrentMonth = () => {
    let Now = new Date()
    return `${Now.getFullYear()} - ${Now.getMonth() + 1}`
}

export const filterListByMonth = (list : ItemsType[], date : String) : ItemsType[] => {
    let newList : ItemsType[] = []
    let [year, month] = date.split('-')


    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            list[i].date.getMonth() === parseInt(month)
        ){
            newList.push(list[i])
        }
    }

    return newList
}

export const formatDate = (date : Date) : String => {
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    let Str = `0${day}/0${month}/${year}`

    if(month > 9){
        Str = `0${day}/${month}/${year}`
    }else if (day > 9) {
        Str =  `${day}/0${month}/${year}`
    }

    return Str
}

export const formatCurrentMonth = (currentMonth : String) => {
    const [year, month] = currentMonth.split('-')

    const Months = [
        'Janeiro',
        'Feveireiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
    ]

    return `${Months[parseInt(month) - 1]} de ${year}`
}