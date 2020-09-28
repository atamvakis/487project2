$(document).ready(function(){
  //jQuery linked correctly
  console.log("ready");
});


//Slider JS
$(function() {

  var Page = (function() {

    var $navArrows = $( '#nav-arrows' ),
      $nav = $( '#nav-dots > span' ),
      slitslider = $( '#slider' ).slitslider( {
        onBeforeChange : function( slide, pos ) {

          $nav.removeClass( 'nav-dot-current' );
          $nav.eq( pos ).addClass( 'nav-dot-current' );

        }
      } ),

      init = function() {

        initEvents();

      },
      initEvents = function() {

        // add navigation events
        $navArrows.children( ':last' ).on( 'click', function() {

          slitslider.next();
          return false;

        } );

        $navArrows.children( ':first' ).on( 'click', function() {

          slitslider.previous();
          return false;

        } );

        $nav.each( function( i ) {

          $( this ).on( 'click', function( event ) {

            var $dot = $( this );

            if( !slitslider.isActive() ) {

              $nav.removeClass( 'nav-dot-current' );
              $dot.addClass( 'nav-dot-current' );

            }

            slitslider.jump( i + 1 );
            return false;

          } );

        } );

      };

      return { init : init };

  })();

  Page.init();

  /**
   * Notes:
   *
   * example how to add items:
   */

  /*

  var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');

  // call the plugin's add method
  ss.add($items);

  */

});

//Message Bubble JS
var messages = ['Reduce Stress', 'Improve Mood', 'Enhance Cognitive Health', 'Lower Blood Pressure']




//Quiz JS
const myQuiz = [
    {
      'q': 'Which of these benefits can houseplant gardening provide?',
      'options': [
        'Increased stress',
        'Improved mood',
        'Lower risk of chronic illness',
        'Decreased cognitive ability'
      ],
      'correctIndex': 1,
      'correctResponse': 'Great Job!',
      'incorrectResponse': 'Sorry, the correct answer was improved mood.'
    },
    {
      'q': 'Which of these houseplants is best for a room with low light?',
      'options': [
        'Snake Plant',
        'Fern'
      ],
      'correctIndex': 0,
      'correctResponse': 'Great Job!',
      'incorrectResponse': 'Sorry, the correct answer was Snake Plant.'
    },
    {
      'q': 'Which of these houseplants requires precise care?',
      'options': [
        'Cactus',
        'Snake Plant',
        'Succulent',
        'Orchid'
      ],
      'correctIndex': 3,
      'correctResponse': 'Great!',
      'incorrectResponse': 'Sorry, the correct answer was Orchid'
    },
    {
      'q': 'How many U.S. households participated in houseplant gardening in 2019?',
      'options': [
        '20 million',
        '18 million',
        '33 million',
        '50 million'
      ],
      'correctIndex': 2,
      'correctResponse': 'Great Job!',
      'incorrectResponse': 'Sorry, the correct answer was 33 million.'
    },
]

//Generate Quiz on Page
$('#quiz').quiz({
  questions: myQuiz
});


//Chart JS
let data = [
    ['2010', 34],
    ['2011', 34],
    ['2012', 35],
    ['2013', 33],
    ['2014', 31],
    ['2015', 36],
    ['2016', 38],
    ['2017', 37],
    ['2018', 34.4],
    ['2019', 33.1]
];

const options = {
  width: 550,
  height: 300,
  title: 'U.S. Houseplant Gardening (by Millions of Households)',
  titleFontSize: 20,
  valColors: ['#FFF8E7'],
  barColors: ['#134611', '#729b79', '#bacdb0', '#729b79', '#134611',  '#729b79', '#bacdb0', '#729b79', '#134611', '#729b79'],
  labelPos: 'center',
  axisColor: '#33202a',
  barSpacing: 0.6,
  ticks: 5
};

// createBarChart(data, element, options);
const chart = document.getElementById('chart');
