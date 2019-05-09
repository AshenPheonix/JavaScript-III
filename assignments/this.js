/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. Global/window binding is this returning the global scope/window
* 2. Implicit Binding is when you place a this statement in an context via a dot (.). 
* 3. New Binding is when you use this as part of a constructor, when it refers to the object being created.
* 4. Explicit Binding is when this is changed by forcefully binding it to an object, forcefully moving a function, or using an object to call a function belonging to someone else.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function globalBind(){
    return this
}
console.log(globalBind());

// Principle 2

// code example for Implicit Binding
const myObj={
    greeting:'hello',
    sayHello:function(){
        return `${this.greeting} there`
    }
}
console.log(myObj.sayHello());

// Principle 3

// code example for New Binding
const psudoClass=function(){
    this.name='Brandon'
    this.greeting='Hello'
    this.greet=function(){
        return `${this.name} says ${this.greeting}`
    }
}

const me=new psudoClass
console.log(me.greet());

// Principle 4

// code example for Explicit Binding

const random=function(){
    return Math.floor((Math.random()*this.max)+this.min)
}

me.min=0
me.max=100
console.log(random.call(me));