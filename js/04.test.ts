import {chipPredicate, CourseType, predicate} from "./04";

let ages:Array<number>;
let courses:Array<CourseType>;
beforeEach(()=>{
    ages=[18,20,15,22,66,55,17,26];
    courses=[
        {title:'CSS', price:100},
        {title:'JS', price:200},
        {title:'React', price:120},
    ]
})

test('take oldest men',()=>{
    const oldest=ages.filter(ol=>ol>18)
    expect(oldest.length).toBe(5);
    expect(oldest[0]).toBe(20)
})

test('Take the cheap courses',()=>{
    const cheap=courses.filter(ch=>ch.price<130)
    expect(cheap.length).toBe(2);
    expect(cheap[1].title).toBe('React')
})

test('Done tasks',()=>{
    let tasks2=[
        {id:1,title:'Redux',isDone:true},
        {id:2,title:'Flux',isDone:false},
        {id:3,title:'JS',isDone:true},
    ]

    let done=tasks2.filter(d=>d.isDone);
    expect(done.length).toBe(2)
    expect(done[0].title).toBe('Redux')

})