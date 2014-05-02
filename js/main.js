$(document).ready(function(){

  //grab the width and calculate left value
  var item_width = $('#window li').outerWidth(); 
        
    //move the last item before first item, just in case user click prev button
  $('#window li:first').before($('#window li:last'));
  
  //set the default item to the correct position 
  $('#window ul').css({'left' : 0});

    //if user clicked on prev button
  $('#previous').click(function() {

    //get the right position            
    var left_indent = parseInt($('#window ul').css('left')) + item_width;

    //slide the item            
    $('#window ul:not(:animated)').animate({'left' : left_indent}, 200,function(){    

            //move the last item and put it as first item             
      $('#window li:first').before($('#window li:last'));           

      //set the default item to correct position
      $('#window ul').css({'left' : 0});
    
    });

    //cancel the link behavior            
    return false;
            
  });

 
    //if user clicked on next button
  $('#next').click(function() {
    
    //get the right position
    var left_indent = parseInt($('#window ul').css('left')) - item_width;
    
    //slide the item
    $('#window ul:not(:animated)').animate({'left' : left_indent}, 200, function () {
            
      //move the first item and put it as last item
      $('#window li:last').after($('#window li:first'));                  
      
      //set the default item to correct position
      $('#window ul').css({'left' : 0});
    
    });
             
    //cancel the link behavior
    return false;
    
  });        
  
        
});

