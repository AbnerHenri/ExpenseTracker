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