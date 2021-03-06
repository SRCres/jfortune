jfortune
========

A jquery plugin to make wheel of fortunes (roulettes)

Working examples: 
- http://codepen.io/tehsis/pen/AFCwz
- http://codepen.io/tehsis/pen/zilBg


Description
-----------

Provides an UI component to make roulettes effects and provides methods to handle the
prices on which the roulette stops.

Usage
-----

```javascript
// You can initialize the roulette by specifying the number of elements
$(selector).roulette(numberOfElements);

// Or by passing an array of elements like [{description: "1000 u$s"}, {description: "200 u$s} ...].
$(selector).roulette(arrayOfElements);

// After initialization you can spin the wheel and it will turn to a random
// position.
$(selector).spin();

// Or you can specify a predefined position
$(selector).spin(4);

// The spin methods returns a promise, which its first arguments is the object that
// is at that position (only if you have used the second form of initilization)
$(selector).spin().then(function(price) {
  console.log(price.description);
});

// or

$(selector).spin(0).spin().then(function(price) {
  console.log(price.description);
});
```

Usage notes
-----------

The plugin must be initiated using and array of elements or a number. Both, the array length
or the number's value, must be conscistent with the number of positions your roulette's image
has, this is not magic. (yet).

At this moment, the css' styles for the roulette animation are hard-coded inside the plugin. This has been done on porpouse to not requiring external files.
