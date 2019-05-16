$(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#search').keyup(function(){
     $('#result').html('');
     $('#state').val('');
     var searchField = $('#search').val();
     var expression = new RegExp(searchField, "i");
     $.getJSON('data.json', function(data) {
      $.each(data, function(key, value){
       if (value.word.search(expression) != -1 )
       {
        $('#result').append('<li class="list-group-item link-class">'+value.word+' | '+value.synonym+' | '+value.example+' | '+value.video+' | </li>').sort();
       }
      });   
     });
    });
         $('#result').on('click', 'li', function() {
     var res = $(this).data('word');
     
     var text=$(this).text();
       var answer=text.split('|');
       localStorage['detail']=JSON.stringify(answer);
       window.location.replace('details.html');
     /*
     $('#search').val($.trim(click_text[0]));
     $("#result").html('');*/
    });
   
   });

   $(document).ready(function(){
    var ans=JSON.parse(localStorage['detail']);
    console.log(ans);
    $('h2').append(ans[0]);
    $('h3').append("Synonym:"+ans[1]);
    $('h4').append("Example:"+ans[2]);
    $('#video').append(ans[3]).attr('href', ans[3]);


});