// CONSTRUCTOR FUNCTION which is similar to a Ruby Class!
// Note: the 'new' keyword turns the whole thing into an Object Literal
// MODEL

// ABLE TO STORE ATTRIBUTES, similar to Ruby instace variables

function Fish(name, color, fins, type) {
  this.name = name
  this.color = color;
  this.fins = fins;
  this.type = type;
  // this.swim = function() {
  //   console.log(this.name + ' swims');
  // };
}

//THIS:

Fish.prototype = {
  eat : function() {
    console.log("im eating");
  },
  swim : function(){
    console.log("im swimming");
  }
}

// IS SAME AS:

Fish.prototype.eat = function () {
  console.log("im eating");
}

Fish.prototype.swim = function (){
  console.log("im swimming");
}

// Object Literal

// { color : }

var Fish = function(color, fins, type) {
  this.color = color;
  this.fins = fins;
  this.type = type;
}
