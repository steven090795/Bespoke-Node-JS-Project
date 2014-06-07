---
layout: default
permalink: docs/bifs.html
---

# Built-in Functions

## red(color)

Return the red component of the given `color`.

     red(#c00)
     // => 204

## green(color)

Return the green component of the given `color`.

     green(#0c0)
     // => 204

## blue(color)

Return the blue component of the given `color`.

     blue(#00c)
     // => 204

## alpha(color)

Return the alpha component of the given `color`.

      alpha(#fff)
      // => 1

      alpha(rgba(0,0,0,0.3))
      // => 0.3

## dark(color)

Check if `color` is dark:

      dark(black)
      // => true

      dark(#005716)
      // => true

      dark(white)
      // => false


## light(color)

Check if `color` is light:

    light(black)
    // => false

    light(white)
    // => true

    light(#00FF40)
    // => true

## hue(color)

Return the hue of the given `color`.

    hue(hsla(50deg, 100%, 80%))
    // => 50deg

## saturation(color)

Return the saturation of the given `color`.

    saturation(hsla(50deg, 100%, 80%))
    // => 100%

## lightness(color)

Return the lightness of the given `color`.

    lightness(hsla(50deg, 100%, 80%))
    // => 80%

## push(expr, args...)

 Push the given `args` to `expr`.

     nums = 1 2
     push(nums, 3, 4, 5)

     nums
     // => 1 2 3 4 5

 Aliased as `append()`

## unshift(expr, args...)

 Unshift the given `args` to `expr`.

     nums = 4 5
     unshift(nums, 3, 2, 1)

     nums
     // => 1 2 3 4 5

 Aliased as `prepend()`

## keys(pairs)

  Return keys in the given `pairs`:

     pairs = (one 1) (two 2) (three 3)
     keys(pairs)
     // => one two three

## values(pairs)

  Return values in the given `pairs`:

     pairs = (one 1) (two 2) (three 3)
     values(pairs)
     // => 1 2 3

## typeof(node)

Return type of `node` as a string.

      type(12)
      // => 'unit'

      typeof(12)
      // => 'unit'

      typeof(#fff)
      // => 'rgba'

      type-of(#fff)
      // => 'rgba'

Aliased as `type-of` and `type`.

## unit(unit[, type])

Return a string for the type of `unit` or an empty string,
or assign the given `type` without unit conversion.

    unit(10)
    // => ''

    unit(15in)
    // => 'in'

    unit(15%, 'px')
    // => 15px

    unit(15%, px)
    // => 15px

## match(pattern, string)

Test if `string` matches the given `pattern`.

    match('^foo(bar)?', foo)
    match('^foo(bar)?', foobar)
    // => true

    match('^foo(bar)?', 'foo')
    match('^foo(bar)?', 'foobar')
    // => true

    match('^foo(bar)?', 'bar')
    // => false

## abs(unit)

      abs(-5px)
      // => 5px

      abs(5px)
      // => 5px

## ceil(unit)

      ceil(5.5in)
      // => 6in

## floor(unit)

      floor(5.6px)
      // => 5px

## round(unit)

      round(5.5px)
      // => 6px

      round(5.4px)
      // => 5px

**Note:** All rounding functions can accept optional `precision` argument — you can pass the number of digits you want to save after the period:

      ceil(5.52px,1)
      // => 5.6px

      floor(5.57px,1)
      // => 5.5px

      round(5.52px,1)
      // => 5.5px

## sin(angle)

Returns the value of sine for the given `angle`. If the angle is given as a degree unit, like `45deg`, it is treated as a degree, otherwise it is treated as radians.

    sin(30deg)
    // => 0.5

    sin(3*PI/4)
    // => 0.707106781

## cos(angle)

Returns the value of cosine for the given `angle`. If the angle is given as a degree unit, like `45deg`, it is treated as a degree, otherwise it is treated as radians.

    cos(180deg)
    // => -1

## tan(angle)

Returns the value of tangent for the given `angle`. If the angle is given as a degree unit, like `45deg`, it is treated as a degree, otherwise it is treated as radians.

    tan(45deg)
    // => 1

    tan(90deg)
    // => Infinity

## min(a, b)

      min(1, 5)
      // => 1

## max(a, b)

      max(1, 5)
      // => 5

## even(unit)

      even(6px)
      // => true

## odd(unit)

      odd(5mm)
      // => true

## sum(nums)

      sum(1 2 3)
      // => 6

## avg(nums)

     avg(1 2 3)
     // => 2

## base-convert(num, base, width)

Returns a `Literal` `num` converted to the provided `base`, padded to `width` with zeroes (default width is 2)

    base-convert(1, 10, 3)
    // => 001

    base-convert(14, 16, 1)
    // => e

    base-convert(42, 1)
    // => 101010


## join(delim, vals...)

  Join the given `vals` with `delim`.

      join(' ', 1 2 3)
      // => "1 2 3"

      join(',', 1 2 3)
      // => "1,2,3"

      join(', ', foo bar baz)
      // => "foo, bar, baz"

      join(', ', foo, bar, baz)
      // => "foo, bar, baz"

      join(', ', 1 2, 3 4, 5 6)
      // => "1 2, 3 4, 5 6"

## hsla(color | h,s,l,a)

Convert the given `color` to an `HSLA` node,
or h,s,l,a component values.

     hslaa(10deg, 50%, 30%, 0.5)
     // => HSLA

     hslaa(#ffcc00)
     // => HSLA

## hsla(color | h,s,l)

Convert the given `color` to an `HSLA` node,
or h,s,l component values.

     hsla(10, 50, 30)
     // => HSLA

     hsla(#ffcc00)
     // => HSLA

## rgba(color | r,g,b,a)

Return `RGBA` from the r,g,b,a channels or provide a `color` to tweak the alpha.

      rgba(255,0,0,0.5)
      // => rgba(255,0,0,0.5)

      rgba(255,0,0,1)
      // => #ff0000

      rgba(#ffcc00, 0.5)
      // rgba(255,204,0,0.5)

 Alternatively stylus supports the `#rgba` and `#rrggbbaa` notations as well:

    #fc08
    // => rgba(255,204,0,0.5)

    #ffcc00ee
    // => rgba(255,204,0,0.9)

## rgb(color | r,g,b)

Return a `RGBA` from the r,g,b channels or cast to an `RGBA` node.

    rgb(255,204,0)
    // => #ffcc00

    rgb(#fff)
    // => #fff

## lighten(color, amount)

Lighten the given `color` by `amount`. This function is
unit-sensitive, for example supporting percentages as shown
below.

    lighten(#2c2c2c, 30)
    // => #787878

    lighten(#2c2c2c, 30%)
    // => #393939

## darken(color, amount)

Darken the given `color` by `amount`.This function is
unit-sensitive, for example supporting percentages as shown
below.

    darken(#D62828, 30)
    // => #551010

    darken(#D62828, 30%)
    // => #961c1c

## desaturate(color, amount)

Desaturate the given `color` by `amount`.

    desaturate(#f00, 40%)
    // => #c33

## saturate(color, amount)

Saturate the given `color` by `amount`.

    saturate(#c33, 40%)
    // => #f00

## complement(color)

Gives the complementary color. Equals to spinning hue to 180deg.

    complement(#fd0cc7)
    // => #0cfd42

## invert(color)

Inverts the color. The red, green, and blue values are inverted, while the opacity is left alone.

    invert(#d62828)
    // => #29d7d7

## grayscale(color)

Gives the grayscale equivalent of the given color. Equals to desaturate by 100%.

    grayscale(#fd0cc7)
    // => #0cfd42

## tint(color, amount)

Mix the given color with white.

    tint(#fd0cc7,66%)
    // => #feaceb

## shade(color, amount)

Mix the given color with black.

    shade(#fd0cc7,66%)
    // => #560443

## unquote(str | ident)

  Unquote the given `str` and returned as a `Literal` node.

       unquote("sans-serif")
       // => sans-serif

       unquote(sans-serif)
       // => sans-serif

       unquote('1px / 2px')
       // => 1px / 2px

## s(fmt, ...)

 The `s()` function is similar to `unquote()`, in that it returns
 a `Literal` node, however it accepts a format string much like C's `sprintf()`. Currently the only specifier is `%s`.

        s('bar()');
        // => bar()

        s('bar(%s)', 'baz');
        // => bar("baz")

        s('bar(%s)', baz);
        // => bar(baz)

        s('bar(%s)', 15px);
        // => bar(15px)

        s('rgba(%s, %s, %s, 0.5)', 255, 100, 50);
        // => rgba(255, 100, 50, 0.5)

        s('bar(%Z)', 15px);
        // => bar(%Z)

        s('bar(%s, %s)', 15px);
        // => bar(15px, null)

Check out the `%` string operator for equivalent behaviour.

## `called-from` property

`called-from` property contains the list of the functions the current function was called from in the reverse order (the first item is the deepest function).

    foo()
      bar()

    bar()
      baz()

    baz()
      return called-from

    foo()
    // => bar foo

## current-media()

`current-media()` function returns the string of the current block's `@media` rule or `''` if there is no `@media` above the block.

    @media only screen and (min-width: 1024px)
      current-media()
    // => '@media (only screen and (min-width: (1024px)))'


## +cache(keys...)

`+cache` is a really powerful built-in function that allows you to create your own “cachable” mixins.

“Cachable mixin” is the one, that would apply its contents to the given selector on the first call, but would `@extend` the first call's selector at the second call with the same params.

    size($width, $height = $width)
      +cache('w' + $width)
        width: $width
      +cache('h' + $height)
        height: $height

    .a
      size: 10px 20px
    .b
      size: 10px 2em
    .c
      size: 1px 2em

Would yield to

    .a,
    .b {
      width: 10px;
    }
    .a {
      height: 20px;
    }
    .b,
    .c {
      height: 2em;
    }
    .c {
      width: 1px;
    }

See how the selectors are grouped together by the used property.

## +prefix-classes(prefix)

Stylus comes with a block mixin `prefix-classes` that can be used for prefixing the classes inside any given Stylus' block. For example:

    +prefix-classes('foo-')
      .bar
        width: 10px

Yields:

    .foo-bar {
      width: 10px;
    }

## define(name, expr)

Allows to create or overwrite a variable with a given name, passed as a string, onto current scope.

This bif can be useful on those cases in which you'd wish interpolation in variable names:

    prefix = 'border'
    border = { color: #000, length: 1px, style: solid }

    for prop, val in border
      define(prefix + '-' + prop, val)

    body
      border: border-length border-style border-color

yields:

    body {
      border: 1px solid #000;
    }

## operate(op, left, right)

  Perform the given `op` on the `left` and `right` operands:

      op = '+'
      operate(op, 15, 5)
      // => 20

## length([expr])

  Parenthesized expressions may act as tuples, the `length()` function returns the length of such expressions.

    length((1 2 3 4))
    // => 4

    length((1 2))
    // => 2

    length((1))
    // => 1

    length(())
    // => 0

    length(1 2 3)
    // => 3

    length(1)
    // => 1

    length()
    // => 0

## selector()

Returns the compiled current selector or `&` if called at root level.

    .foo
      selector()
    // => '.foo'

    .foo
      &:hover
        selector()
    // '.foo:hover'

## warn(msg)

  Warn with the given error `msg`, does not exit.

      warn("oh noes!")

## error(msg)

  Exits with the given error `msg`.

    add(a, b)
      unless a is a 'unit' and b is a 'unit'
        error('add() expects units')
      a + b

## last(expr)

 Return the _last_ value in the given `expr`:

      nums = 1 2 3
      last(nums)
      last(1 2 3)
      // => 3

      list = (one 1) (two 2) (three 3)
      last(list)
      // => (three 3)

## p(expr)

 Inspect the given `expr`:

     fonts = Arial, sans-serif
     p('test')
     p(123)
     p((1 2 3))
     p(fonts)
     p(#fff)
     p(rgba(0,0,0,0.2))

     add(a, b)
       a + b

     p(add)

stdout:

     inspect: "test"
     inspect: 123
     inspect: 1 2 3
     inspect: Arial, sans-serif
     inspect: #fff
     inspect: rgba(0,0,0,0.2)
     inspect: add(a, b)

## opposite-position(positions)

 Return the opposites of the given `positions`.

     opposite-position(right)
     // => left

     opposite-position(top left)
     // => bottom right

     opposite-position('top' 'left')
     // => bottom right

## image-size(path)

  Returns the `width` and `height` of the image found at `path`. Lookups are performed in the same manner as `@import`, altered by the `paths` setting.

      width(img)
        return image-size(img)[0]

      height(img)
        return image-size(img)[1]

      image-size('tux.png')
      // => 405px 250px

      image-size('tux.png')[0] == width('tux.png')
      // => true

## add-property(name, expr)

  Adds property `name`, with the given `expr` to the closest block.

  For example:

      something()
        add-property('bar', 1 2 3)
        s('bar')

      body
        foo: something()

yields:

      body {
        bar: 1 2 3;
        foo: bar;
      }

  Next the "magic" `current-property` local variable comes into play. This variable is automatically available to function bodies, and contains an expression with the current property's name, and value.

  For example if we were to inspect this local variable using `p()`, we
  get the following:

        p(current-property)
        // => "foo" (foo __CALL__ bar baz)

        p(current-property[0])
        // => "foo"

        p(current-property[1])
        // => foo __CALL__ bar baz

  Using `current-property` we can take our example a bit further, and duplicate the property with new values, and a conditional to ensure the function is only used within a property value.

        something(n)
          if current-property
            add-property(current-property[0], s('-webkit-something(%s)', n))
            add-property(current-property[0], s('-moz-something(%s)', n))
            s('something(%s)', n)
          else
            error('something() must be used within a property')

        body {
          foo: something(15px) bar;
        }

yields:

        body {
          foo: -webkit-something(15px);
          foo: -moz-something(15px);
          foo: something(15px) bar;
        }

  If you noticed in the example above, `bar` is only present for the initial call, since we returned `something(15px)`, it remained in-place within the expression, however the others do not take the rest of the expression into account.

  Our more robust solution below, defines a function named `replace()` which clones the expression to prevent mutation, replaces the string value of an expression with another, and returns the cloned expression. We then move on to replace `__CALL__` within the expressions, which represents the cyclic call to `something()`.

        replace(expr, str, val)
          expr = clone(expr)
          for e, i in expr
            if str == e
              expr[i] = val
          expr

        something(n)
          if current-property
            val = current-property[1]
            webkit = replace(val, '__CALL__', s('-webkit-something(%s)', n))
            moz = replace(val, '__CALL__', s('-moz-something(%s)', n))
            add-property(current-property[0], webkit)
            add-property(current-property[0], moz)
            s('something(%s)', n)
          else
            error('something() must be used within a property')

yields:

          body {
            foo: foo -webkit-something(5px) bar baz;
            foo: foo -moz-something(5px) bar baz;
            foo: foo something(5px) bar baz;
          }

Our implementation is now fully transparent both in regards to the property it is called within, and the position of the call. This powerful concept aids in transparent vendor support for function calls, such as gradients.

## use(path)

You can use any given js-plugin at given `path` with `use()` function right inside your '.styl' files, like this:

    use("plugins/add.js")

    width add(10, 100)
    // => width: 110

And the `add.js` plugin in this case looks this way:

    var plugin = function(){
      return function(style){
        style.define('add', function(a, b) {
          return a.operate('+', b);
        });
      };
    };
    module.exports = plugin;

If you'd like to return any Stylus objects like `RGBA`, `Ident` or `Unit`, you could use the provided Stylus nodes like this:

    var plugin = function(){
      return function(style){
        var nodes = this.nodes;
        style.define('something', function() {
          return new nodes.Ident('foobar');
        });
      };
    };
    module.exports = plugin;

You can pass any options as an optional second argument, using the [hash object](hashes.html):

    use("plugins/add.js", { foo: bar })

## Undefined Functions

  Undefined functions will output as literals, so for example
  we may call `rgba-stop(50%, #fff)` within our css, and it will
  output as you would expect. We can use this within helpers as well.

  In the example below we simply define the function `stop()` which
  returns the literal `rgba-stop()` call.

    stop(pos, rgba)
      rgba-stop(pos, rgba)

    stop(50%, orange)
    // => rgba-stop(50%, #ffa500)
