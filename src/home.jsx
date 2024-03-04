function Home() {
  const primeNumbers = [2, 3, 5];
  console.log(primeNumbers[0]);

  // TRUTHY VALUE
  // FALSY VALUE --> null, undefined, NaN, '', false
  // Truthy value will get executed.

  //   const firstName = "sonam";
  //   const lastName = "lama";
  //   if (firstName) {
  //     const fullName = ` ${firstName} ${lastName}`;
  //   }
  //console.log(fullName);

  // FUNCTION DECLARATION
  // HOISTING - Access value before creation. Function declaration is hoisted.
  //   console.log(add(1, 2));
  //   function add(firstNumber, secondNumber) {
  //     return firstNumber + secondNumber;
  //   }

  // FUNCTION EXPRESSION
  // Is not HOISTED.
  //console.log(getRectArea(3, 4));
  //   const addFnExp = (firstNumber, secondNumber) => firstNumber + secondNumber;
  //   let getRectArea = function (width, height) {
  //     return width * height;
  //   };
  //   console.log(getRectArea(3, 4));

  //   for (var i = 0; i < 10; i++) {}
  //   console.log("value of i: " + i);

  //ARRAY MAP
  //   const arr = ["apple", "orange", "banana"];
  //   arr.push("cherry");
  //   const result = arr.map((item, index) => "This is " + item + index);
  //   console.log(result);

  //ARRAY FILTER
  const arr1 = [10, 11, 12, 13, 14];
  let sum;
  const newArr1 = arr1.filter((value) => {
    value % 2 === 0;
    return sum + value;
  });
  console.log("sum" + sum);

  //   let arr4 = [2, 3, 4, 5, 6, 7, 8];
  //   const newArr = arr4.filter((item) => {
  //     return item % 2 == 0 ? item : null;
  //   });
  //   console.log(newArr);

  // SPREAD OPERATOR - should be iterable
  const z = [{ f: "f", g: "g" }];
  const t = [...z];
  console.log("spread..", t);

  const array1 = [1, 2, 3];
  const array2 = [5, 6, 7];
  console.log(...array1, ...array2); // removes []

  // REST OPERATOR
  const obj1 = {
    name: "sam",
    age: 25,
  };
  const obj2 = { ...obj1 };
  obj2.name = "pam";
  console.log(obj1.name);
  console.log(obj2.name);

  //OPTIONAL CHAINING (?.)
  let vehicle = {
    name: "ford",
    car: { name: "BMW" },
    bike: { name: "pulsar" },
    anotherVehicle(name) {
      return name;
    },
  };
  console.log(vehicle?.name);
  console.log(vehicle.car?.name);
  console.log(vehicle.bus?.name); // undefined

  vehicle.anotherVehicle?.("tesla");
  console.log(vehicle.anotherVehicle("tesla")); //tesla
  //   vehicle.car.name;
  //   vehicle.car?.();

  // OBJECT DESTRUCTURING  -->(extract values) create variables using using properties of existing object
  let object_1 = { a: 1, b: 2, c: 3 };
  let { a, b } = object_1;
  console.log(a); // 1
  console.log(b); // 2

  // object destructuring {}
  const object1 = {
    name: "Sam",
    age: 20,
    school: "queens college",
    number: 1234,
  };
  console.log(object1);

  // delete age and number from above object and create new object using spread operator.
  const { age, number, ...newObject1 } = object1;
  console.log(newObject1);

  const arr1 = [
    { name: "ram", age: 20 },
    { name: "shyam", age: 22 },
  ];
  const arr2 = [{ id: 123 }, { id: 344 }];
  arr1.push(...arr2);
  console.log(arr1);

  // ARRAY DESTRUCTURING []
  let a1 = 1;
  let b1 = 2;
  [a1, b1] = [b1, a1]; // swap values
  console.log(a1, b1);

  // REST parameter holds all the remaining values inside an array
  const fruits = ["apple", "banana", "cherry"];
  const [first, second, ...rest] = fruits;
  console.log(first);
  console.log(second);
  console.log(rest);

  return <div>Home</div>;
}

export default Home;
