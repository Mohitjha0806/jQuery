$(document).ready(function () {
  console.log("Hello World!");
  $('selector').action()
  $('h1').click();

  //This is Example of Element Selector

  // //This is ID selector

  // This is class selector

  // Other Selector

  // Event is jQuery

  // Mouse Event -- click, dblClick, Mouseleave

    $("#body1").click(function () {
      console.log("You Double Click on me", this);
      console.log("hide with on Double Click", this);
      $("#body1").hide();
    });

    $("#body2").dblclick(function () {
      console.log("CLick and hide with on Double Body2", this);
      $("#body2").hide();
    });

    $("#body3").mouseenter(function () {
      console.log("Your Mouse Entered on Body3", this);
    });

    $("#body4").hover(function () {
      console.log("You Hovered on Body4");
    });

  // onclick

  $("#body5").on({
    click: function () {
      console.log("Thanks for clikcing", this);
    },
    mouseleave: function () {
      console.log("This Is mouse Leave.");
    },
  });

    $("#hide").click(function () {
      if ($("#hide").text() == "Hide") {
        $("#para1").hide(10000);
        $("#hide").html("Show");
      }

      else if ($("#hide").text() == "Show") {
        $("#para1").show(10000);
        $("#hide").html("Hide");
      }
    });

  $("#SlideToggle").click(function () {
    $("#para1").slideToggle(1000);
  });

  $("#SlideUp").click(function () {
    $("#para1").slideUp(1000);
  });

  $("#SlideDown").click(function () {
    $("#para1").slideDown(1000);
  });

  $("#ColorChange").click(function () {
    ($("#para1").css('background-color', 'red')) || ($("#para1").css('background-color', 'white'))
    
  });
  

  $('#para1').animate({
    opacity:0.3,
    height: '150px',
    width: '350px'
    }, "fast")
    $('#para1').animate({ opacity: 0.3 }, 4000);
    $('#para1').animate({ opacity: 0.9 }, 4000);
    $('#para1').animate({ width: '350px' }, 12000);
    $('#ta').val('setting it to harry');
    $('#ta').html('setting it to harry3');
        $('#inp').val('setting it to harry3');
        $('#inp').html('setting it to harry3');
        $('#inp').empty();
    $('#wiki').empty();
    $('#wiki').text('you are good');
    $('#wiki').remove();
});


    
  //This is Example of Element Selector

  $('h1').click(function () {
      console.log('Why You Click on Me');
  });

  // //This is ID selector

  console.log('Why You Click on Me');
  $('#body1').dblclick(function () {
      console.log('Why You Click on body 1 You Double Click on Body 1');
      $('#body1').hide();

  });

  // KeyboardEvent -- keypress, keydown
  // form event Submit, chnage, focus , blur
  // document/window event = load, resize, scroll, unload

  // there are three mmain type select in JQuery
  // ID, Class, Elemment

