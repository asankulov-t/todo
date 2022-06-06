import {StudentType} from "./02";


export const addSkill=(student:StudentType,skill:string)=>{
    student.technologies.push({id:new Date().getDate(), title:skill})
}
export const isActiveStudent=(st:StudentType)=>{
    st.isActive=true
}

export const doesStudentLiveIn=(st:StudentType,city:string)=>{
    return st.address.city.title===city
}