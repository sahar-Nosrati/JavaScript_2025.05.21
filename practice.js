const person = {
  _name: "John",

  get name() {
    return this._name;
  },

  set name(value) {
    this._name = value;
  },
};

console.log(person.name);
person.name = "Leila";

console.log(person.name);

const employeeInformation = {
  _name: "Maryam",
  _age: "25",
  _department: "chemistry",

  get name() {
    this._name;
  },

  set department(department) {
    return (this._department = department);
  },
};

console.log(employeeInformation._name);

employeeInformation._department = "Genetics";
console.log(employeeInformation._department);

const roseFlower = {
  name: "Rose",
  color: "Red",
  location: "Austria",
};

console.log(
  Object.defineProperty(roseFlower, "name", {
    enumerable: false,
    configurable: false,
    writable: false,
  })
);

console.log(Object.getOwnPropertyDescriptor(roseFlower, "name"));

Object.preventExtensions(roseFlower);
roseFlower.season = "Spring";
console.log(Object.isExtensible(roseFlower));

const tulipFlowerDetail = {
  name: "Tulip",
  color: "Red",
  location: "Netherland",

  fullDetail() {
    const flowerDetail = `The ${this.name} has ${this.color} color and it can grow in ${this.location}`;
    return flowerDetail;
  },
};


const flowerInformation = tulipFlowerDetail.fullDetail.bind(roseFlower);
console.log(flowerInformation()); 
console.log(tulipFlowerDetail.fullDetail()); 
