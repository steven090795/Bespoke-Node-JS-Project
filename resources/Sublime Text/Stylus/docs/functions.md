---
layout: default
permalink: docs/functions.html
---

# Functions

 Stylus features powerful in-language function definitions. Function definitions appear identical to mixins; however, functions may return a value.

## Return Values

 Let's try a trivial example: creating a function that adds two numbers.

    add(a, b)
      a + b

 We can then use this function in conditions, in property values, etc.
 
     body 
       padding add(10px, 5)

 Rendering:
     
     body {
       padding: 15px;
     }

## Argument Defaults

 Optional arguments may default to a given expression. With Stylus we may even default arguments to earlier arguments! 
 
 For example:
 
 
     add(a, b = a)
       a + b

     add(10, 5)
     // => 15
     
     add(10)
     // => 20

**Note:** Since argument defaults are assignments, we can also use function calls for defaults:

     add(a, b = unit(a, px))
       a + b

## Named Parameters

Functions accept named parameters. This frees you from remembering the order of parameters, or simply improves the readability of your code.

For example:

    subtract(a, b)
      a - b

    subtract(b: 10, a: 25)

## Function Bodies

 We can take our simple `add()` function further. Let's casting all units passed as `px` via the `unit()` built-in. It reassigns each argument, and provides a unit-type string (or identifier), which ignores unit conversion.
 
     add(a, b = a)
       a = unit(a, px)
       b = unit(b, px)
       a + b

     add(15%, 10deg)
     // => 25

## Multiple Return Values

 Stylus functions can return several values—just as you can assign several values to a variable. 
 
 For example, the following is a valid assignment:
 
       sizes = 15px 10px
     
       sizes[0]
       // => 15px 

Similarly, we may return several values:

       sizes()
         15px 10px

       sizes()[0]
       // => 15px

One slight exception is when return values are identifiers. For example, the following looks like a property assignment to Stylus (since no operators are present):

     swap(a, b)
       b a

To disambiguate, we can either wrap with parentheses, or use the `return` keyword:

      swap(a, b)
        (b a)

      swap(a, b)
        return b a

## Conditionals

 Let's say we want to create a function named `stringish()` to determine whether the argument can be transformed to a string. We check if `val` is a string, or an ident (which is string-like). Because undefined identifiers yield themselves as the value, we may compare them to themselves as shown below (where `yes` and `no` are used in place of `true` and `false`):
 
 
     stringish(val)
       if val is a 'string' or val is a 'ident'
         yes
       else
         no

Usage:

     stringish('yay') == yes
     // => true
   
     stringish(yay) == yes
     // => true
   
     stringish(0) == no
     // => true

__note__: `yes` and `no` are not boolean literals. They are simply undefined identifiers in this case.

Another example:

    compare(a, b)
      if a > b
        higher
      else if a < b
        lower
      else
        equal

Usage:

    compare(5, 2)
    // => higher

    compare(1, 5)
    // => lower

    compare(10, 10)
    // => equal

## Aliasing

  To alias a function, simply assign a function's name to a new identifier. For example, our `add()` function could be aliased as `plus()`, like so:
  
      plus = add
      
      plus(1, 2)
      // => 3

## Variable Functions

  In the same way that we can "alias" a function, we can pass a function as well. Here, our `invoke()` function accepts a function, so we can pass it `add()` or `sub()`.

    invoke(a, b, fn)
      fn(a, b)

    add(a, b)
      a + b

    body
      padding invoke(5, 10, add)
      padding invoke(5, 10, sub)

Yielding:

    body {
      padding: 15;
      padding: -5;
    }

## arguments

 The `arguments` local is available to all function bodies, and contains all the arguments passed. 
 
 For example:
 
     sum()
       n = 0
       for num in arguments
         n = n + num

     sum(1,2,3,4,5)
     // => 15

## Hash Example

 Below we define the `get(hash, key)` function, which returns the
 value of `key` (or `null`). We iterate each `pair` in `hash`, returning the pair's second node when the first (the `key`) matches. 

      get(hash, key)
        return pair[1] if pair[0] == key for pair in hash

As demonstrated below, in-language functions—paired with robust Stylus expressions—can provide great flexibility:
      
      hash = (one 1) (two 2) (three 3)
      
      get(hash, two)
      // => 2

      get(hash, three)
      // => 3

      get(hash, something)
      // => null