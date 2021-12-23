$('ul#time-line li').each(function(){
    var stop = $(window).scrollTop() + $(window).height()/1.2;
    var litop = $(this).offset().top;
    if (stop > litop){
        $(this).addClass('visibility');
    }
});
$(".resume-article").scroll(function(){
    $('ul#time-line li').each(function(){
        var stop = $(window).scrollTop() + $(window).height()/1.2;
        // var stop2 =$(window).scrollTop() + $(window).height()*1.2;
        var litop = $(this).offset().top;
        if (stop > litop){
            $(this).addClass('visibility');
        } else{
            $(this).removeClass('visibility');
        }
    });
});