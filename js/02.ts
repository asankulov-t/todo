export type CityType={
    title:string,
    countryTitle:string
}
type AddressType={
    street:string,
    city:CityType
}

type TechnologiesType={
    id:number,
    title:string
}

export type StudentType={
    id:number,
    name:string,
    age:number,
    isActive:boolean,
    address:AddressType,
    technologies:Array<TechnologiesType>
}

const student:StudentType={
    id:1,
    name:'Dima',
    age:32,
    isActive:false,
    address:{
        street:'Gatchina 45',
        city:{
            title:'Bishkek',
            countryTitle:'Kyrgyzstan'
        }
    },
    technologies:[
        {id:1, title:'HTML'},
        {id:2, title:'CSS'},
        {id:3, title:'React'},
    ]
}

console.log(student.technologies[2].title)