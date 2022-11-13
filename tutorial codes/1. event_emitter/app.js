const events = require('events');
const util = require('util');

var Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var orji = new Person('orji')
var james = new Person('james')
var mary = new Person('mary')

var people = [orji, mary, james];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name + ' said: ' + mssg);
  })
});

james.emit('speak', 'hey dudes')
orji.emit('speak', 'good place')
mary.emit('speak', 'jerusalem')

// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function(mssg){
//   console.log(mssg);
// })
//
// myEmitter.emit('someEvent', 'The event was emiited successfully')
