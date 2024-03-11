import { IPerson, UnknownVariableType } from './type'

// Type annotation
let unknownVariable: UnknownVariableType

unknownVariable = 20
unknownVariable = 40
unknownVariable = 'Hello' //error
// unknownVariable = [1, 2, 3] //error

console.log(unknownVariable)

// Type Inference
let age = 40
age = 50
console.log(age)

// Type an array
let numbers: number[]
numbers = [1, 2, 3, 4, 5]
numbers = [2, 3, 4]
numbers = [1, 2, 3]

console.log(numbers)

let names: string[]
names = ['Bikash', 'Nima', 'Gorakh']
names = ['Bikash1', 'Nima2', 'Gorakh3']

console.log(names)

// Type Object
let person: IPerson

person = {
  name: 'Alex',
  age: 40,
}

person = {
  name: 'Ram',
  age: 20,
  favNum: 7,
}

console.log(person)
