import { ItemsType } from "../Types/ItemType"

export const ItemsData: ItemsType[] =  [
    { date : new Date(2023, 2, 5), category : 'Alimentação', title : 'McDonald', value : 30.50, expense : true },
    { date: new Date(2023, 2, 7), category: 'Fixos', title: 'Alugel', value: 1000.00 , expense : true},
    { date: new Date(2023, 2, 10), category: 'Renda', title: 'Salário', value: 1500.00, expense : false },
    { date: new Date(2023, 2, 18), category: 'Roupas', title: 'Camisa', value: 80.00, expense : true },
    { date: new Date(2023, 1, 18), category: 'Eletrônicos', title: 'Celular', value: 1500.00, expense: true },
]