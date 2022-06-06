let ages=[18,20,15,22,66,55,17,26];

export const predicate=(age:number)=>{
    return age>18;
}

export type CourseType={
    title:string,
    price:number
}

const courses=[
    {title:'CSS', price:100},
    {title:'JS', price:200},
    {title:'React', price:120},
]
export  function chipPredicate(course:CourseType) {
    return course.price<130

}