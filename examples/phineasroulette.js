var prices = [
  {
    name: 'Candance'
  },
  {
      name: 'Pherb'
    },
  {
      name: 'Perry'
    },
  {
      name: 'Isabella'
    },
  {
      name: 'Tree'
    },
  {
      name: 'Mom'
    },
  {
      name: 'Dad'
    },
  {
      name: 'Friends'
    }
];

var $r = $('.roulette').roulette(prices);

var clickHandler = function() {
  $('.spinner').off('click');
  $('.spinner span').hide();
  //var price = Math.floor((Math.random() * 8));
  $r.spin().done(function(price) {
      $('.price').text('You have: ' + price.name);
      $('.spinner').on('click', clickHandler);
      $('.spinner span').show();
    });
};

$('.spinner').on('click', clickHandler);
