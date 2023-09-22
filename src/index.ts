let id:number = 7;
let company:string = "employees"
let age:number = 23
let x:any 
let isTrue:boolean = true
let ids:number[]=[15,3]
let people:string | boolean[]

ids.push(7);
console.log("ids:",ids)

//tuple
const product:[number,string,boolean,any]= [1,'rtgc',true,3]

//union
let h:number | boolean
h=true 

//Enumerator
enum direction {
  up,
  down,
  left,
  right
}

console.log(direction.up)

type User = {
    id:number,
    name:string
}

const user:User={
    id:1,
    name:'peter'
}

//tuple
const shoes:[number,string,boolean] = [1,'jordans',true]

