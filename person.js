//module wrapper function
// (function(exports,require,module,_filename,_dirname){

// });

console.log(__dirname,__filename);




class person {
   constructor(name,age) {
       this.name= name;
       this.age= age;

   }
   greeting(){
       console.log(`my name is ${this.name} and i am ${this.age} years old...`);

   }


}

module.exports = person;
