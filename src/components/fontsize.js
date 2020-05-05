var resizeFont = function(d) {
    var el = $('html');
    $(el).css('font-size', parseInt($(el).css('font-size')) + d);  
}

$('.plus').click(function() {
  resizeFont(1);
});


$('.minus').click(function() {
  resizeFont(-1);
}); 

