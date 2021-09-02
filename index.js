// let dog1 = {
//   name: 'Beef',
//   age: 2,
//   breed: 'Chihuahua'
// }

// let dog2 = {
//   name: 'Bear',
//   age: 5,
//   breed: 'Cockapoo'
// }

// function Dog (name, age, breed) {
//   this.name = name
//   this.age = age
//   this.breed = breed
//   this.bark = function () {
//     console.log(`Woof! My name is ${this.name}`)
//   }
// }

// function Chihuahua (name, age, breed, aggression) {
//   Dog.call(this, name, age, breed)
//   this.aggression = aggression
// }

// const dog1 = new Chihuahua('Beef', 2, 'chihuahua', '15%')
// dog1.aggression = '15%'

// const dog2 = new Dog('Bear', 5, 'cockapoo')

// dog1.bark()
// dog2.bark()

// console.log(dog1, dog2)

// const dog = (name, age, breed) => ({
//   name,
//   age,
//   breed,
//   bark() {
//     console.log(`Woof! My name is ${this.name}`)
//   }
// })

// const chihuahua = (name, age, breed, aggression) => ({ ...dog(name, age, breed), aggression })

// const dog1 = chihuahua('Beef', 2, 'chihuahua', '15%')

// console.log(dog1)
// dog1.bark()

// console.log(dog1)

class Dog {
  constructor (name, age, breed) {
    this.name = name
    this.age = age
    this.breed = breed
    // this.bark = function () {
    //   console.log(`Woof! My name is ${this.name}`)
    // }
  }

  bark () {
    console.log(`Woof! My name is ${this.name}`)
  }
}

class Chihuahua extends Dog {
  constructor (name, age, breed, aggression) {
    super(name, age, breed)
    this.aggression = aggression
  }
}

const dog1 = new Chihuahua('Beef', 2, 'chihuahua', '15%')

dog1.bark()
console.log(dog1)
