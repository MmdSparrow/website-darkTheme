// scroll bar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// $(".resume-article").scroll(function(){
//     $('ul#menu li').each(function(){
//         var stop = $(window).scrollTop() + $(window).height()/1.2;
//         var litop = $(this).offset().top;
//         if (stop > litop){
//             console.log("add............................");
//             console.log("litop:"+ litop);
//             var element = document.getElementsByClassName("active")
//             element[0].classList.remove("active")
//             $(this).addClass('active');
//         } else{
//             $(this).removeClass('active');
//             console.log("remove............................");
//             console.log("litop:"+ litop)
//
//         }
//     });
// });

// $(function(){
//     $(document).scroll(function(){
//         $('ul#menu li').each(function(){
//             if($(this).scrollTop() >= $('#content').offset().top - 50) {
//                 $("#content").css("background","red");
//             } else {
//                 $("#content").css("background","orange");
//             }
//         });
//     });
// });

//
// $(function(){
//     $(".resume-article").scroll(function(){
//         if($(this).scrollTop() >= $(window).scrollTop() + $(window).height()/5 ) {
//
//             $("a[href=\"#service\"]")[0].classList.add("active");
//
//         } else {
//             $("a[href=\"#service\"]")[0].classList.remove("active");
//         }
//     });
// });


// last one
// $(function(){
//     $(".resume-article").scroll(function(){
//         if($(this).scrollTop() >= $(window).height()/1.2) {
//             console.log("this"+ $(this).scrollTop());
//             console.log("window"+$(window).height()/5);
//             $("a[href=\"#service\"]")[0].classList.add("active");
//
//         } else {
//             console.log("this: "+ $(this).scrollTop());
//             console.log("window: "+$(window).scrollTop());
//             $("a[href=\"#service\"]")[0].classList.remove("active");
//         }
//     });
// });


// percentages
const list=document.getElementsByClassName("percentage")
function count(i){
    let from=0;
    let to=parseInt(list[i].getAttribute("percentage"));
    let interval=20;

    let counter= setInterval(function () {
        from += 1;
        list[i].textContent=from+"%";
        if (from===to){
            clearInterval(counter)
        }
    },interval)
}

// pre loader
setTimeout(function(){
    for (let i=0; i<list.length; i++) {
    count(i)
        }
}, 3000);

function setActive(element){
    var deActive = document.getElementsByClassName("active");
    deActive[0].classList.remove("active");
    element.classList.add("active");
}

