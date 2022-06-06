let age = 18;

let student:Array<StudentType>=[
    {name:'Danko',age:15},
    {name:'Albina',age:25},
    {name:'Serega',age:18},
]

type StudentType={
    name:string,
    age:number
}

type UserType={
    name:string
}
type StateType={
    age:number,
    user:UserType
}

let state:StateType = {
    age: 26,
    user: {
        name: 'Alex'
    }
}

type StateType2={
    age:number,
    users:Array<UserType>
}

let state2:StateType2 = {
    age: 26,
    users: [
        {
            name: 'Alex'
        }
    ]
}
console.log(state2.users[0].name)
console.log(state)
function sum(a:StudentType,b:StudentType) {
    return a.age+b.age
}
console.log(sum(student[0],student[1]))

type ShowNameType={
    name:string
}
function ShowTeamName(props:ShowNameType) {
    console.log('Team Name: '+props.name)
}
// console.log(ShowTeamName({name:'SelfMade'}))

type ShowNameMembers={
    members:Array<string>
}

function ShowTeamMembers(props:ShowNameMembers) {
    console.log('Team Members: '+props.members)
}

// console.log(ShowTeamMembers({members:['Hello','Amigo']}))

type ShowTeamType={
    name:string,
    members:Array<string>
}

function ShowTeam(props:ShowTeamType) {
    ShowTeamName({name:props.name});
    ShowTeamMembers({members:props.members})
}

ShowTeam({name:'Dima',members:['serega','Talant','Danil']})

export default age;
