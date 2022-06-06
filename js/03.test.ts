import {addSkill, doesStudentLiveIn, isActiveStudent} from "./03";
import {StudentType} from "./02";
let student:StudentType;
beforeEach(()=>{
    student={
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
})

test('add Skil be correct',()=>{
    addSkill(student,'Redux-toolkit');
    expect(student.technologies[3].title).toBe('Redux-toolkit')
})
test('student is active?',()=>{
    isActiveStudent(student);
    expect(student.isActive).toBe(true)
})

test('Student lives in city?',()=>{
    let res=doesStudentLiveIn(student,'Bishkek');
    expect(res).toBe(true)
})