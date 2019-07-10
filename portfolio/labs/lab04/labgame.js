$(function()   {
    var card=['ace-of-hearts.svg','ace-of-spades.svg','ace-of-club.svg','ace-of-diamonds.svg','joker-card.svg'];
      var a=0,b=0,c=0,d=0;
      for(var i =0;i<16;i++){
     var r=Math.floor((Math.random()*4));
     
       
     
     switch (r) {
       case 0:if (a>=4) {i-1;
        
       }else 
         { a++ ; 
         }
       case 1:if (b>=4) {i-1;
         
       }else {b++ ;}
        case 2:if (c>=4) {i-1;
          
        } else {c++; }
         case 3:if (d>=4) {i-1;
           
         } else {d++;  }
           }
       
      $('#d2').append('<img class="issue" src="./'+card[r]+'">');
      }
$('#b1').on('click',function(){
    $('.issue').hide();
    $('#d2').html('');

    for(var i =0;i<16;i++){

        $('#d2').append('<img src="./joker-card.svg">');
    }
});

   
});

