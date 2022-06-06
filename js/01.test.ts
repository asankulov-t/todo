import {mult, splitWord, sum} from "./01";


test('sum should be correct',()=>{
    let a=1;
    let b=2;
    let c=3;

    const result=sum(a,b)
    expect(result).toBe(3)
})

test('mult should be correct',()=>{
    let a=1;
    let b=2;
    let c=3;

    const result=mult(b,c);
    expect(result).toBe(6)
})

test('split function be correct',()=>{
    const sentense='Hello my Samurai';
    let res=splitWord(sentense);
    expect(res[0]).toBe('hello')

})