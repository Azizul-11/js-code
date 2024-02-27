1.  higher order function

function abcd(val)
{

}

abcd(function(){})

or

function abcd(val) {
    return function(){}

}

abcd()

var a = [1, 2, 3, 4, 5];

a.forEach(function (val) {
  console.log(val + 2);
});

2. constructor Function

function biscuit() {
  this.width = 12;
  this.height = 22;
  this.color = "Brown";
  this.test = "sugar";
}

var bis1 = new biscuit();

console.log(bis1);

or

function button(color) {
  this.radius = 2;
  this.color = color;
  this.icon = false;
  this.pressable = true;
}

var redbtn = new button("red");
var greenbtn = new button("green");

console.log(redbtn);
console.log(greenbtn);

3. first Class function

function abcd(){

}

abcd(function(){})

4. New

function abcd() {
  this.age = 12;
}

new abcd();
{
  age: 12;
}

5. IIFE

var ans = (function () {
  var privatevalue = 12;
  return {
    getter: function () {
      console.log(privatevalue);
    },
    setter: function (val) {
      privatevalue = val;
    },
  };
})();
ans.setter(24);
console.log(ans.getter());

6. prototype

var obj = {
  name: "Ramiz",
};

console.log(obj.name);

6. prototypal inheritance

var human = {
  canFlay: false,
  cantalk: true,
  canWalk: true,
  haveEmotions: true,
  hasFourLegs: false,
};

var student = {
  canMakeAmazigWebsite: true,
  canMakeAwsomeAnimations: true,
};

student.__proto__ = human;

7. this keyword

in global scope
console.log(this);---> give window

in function scope
function abcd() {
  console.log(this);
}
abcd();  ---> give window

in method scope

var obj = {
  baatkaro: function () {
    console.log(this);
  },
};

obj.baatkaro();

7. call apply bind

function abcd() {
  console.log(this);
}
var obj = { age: 24 };
abcd.call(obj);

apply

function abcd(val, val2, val3) {
  console.log(this, val, val2, val3);
}
var obj = { age: 24 };

abcd.apply(obj, [1, 2, 3]);

bind

function abcd() {
  console.log(this);
}

var obj = { age: 24 };

var bindfnc = abcd.bind(obj);
bindfnc();

8. pure & impure function

function abcd(val) {
  return val + 2;
}

var ans1 = abcd(2);
console.log(ans1);
