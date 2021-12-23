// scroll bar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


$(function(){
    $(".resume-article").scroll(function() {
        // scroll to bot
        if(document.getElementsByClassName("resume-article")[0].scrollWidth>300 && document.getElementsByClassName("resume-article")[0].scrollWidth<400){
            if(document.getElementsByClassName("resume-article")[0].scrollTop>=2728){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#contact\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=2419){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#course\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=1797){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#education\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=1375){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#experience\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=839){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#skill\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=279){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#service\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=14){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#about\"]")[0].classList.add("active");
            }
        }
        else if(document.getElementsByClassName("resume-article")[0].scrollWidth>400 && document.getElementsByClassName("resume-article")[0].scrollWidth<500){
            if(document.getElementsByClassName("resume-article")[0].scrollTop>=2536){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#contact\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=2222){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#course\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=1721){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#education\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=1297){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#experience\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=761){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#skill\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=220){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#service\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=14){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#about\"]")[0].classList.add("active");
            }
        }
        else if(document.getElementsByClassName("resume-article")[0].scrollWidth>600 && document.getElementsByClassName("resume-article")[0].scrollWidth<700){
            console.log(document.getElementsByClassName("resume-article")[0].scrollTop)
            if(document.getElementsByClassName("resume-article")[0].scrollTop>=1953){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#contact\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=1876){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#course\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=1414){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#education\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=1142){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#experience\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=550){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#skill\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=206){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#service\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=14){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#about\"]")[0].classList.add("active");
            }
        }
        else if(document.getElementsByClassName("resume-article")[0].scrollWidth>700 && document.getElementsByClassName("resume-article")[0].scrollWidth<850){
            console.log(document.getElementsByClassName("resume-article")[0].scrollTop)
            if(document.getElementsByClassName("resume-article")[0].scrollTop>=1779){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#course\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=1397){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#education\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=1124){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#experience\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=588){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#skill\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=187){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#service\"]")[0].classList.add("active");
            }
            else if(document.getElementsByClassName("resume-article")[0].scrollTop>=14){
                document.getElementsByClassName("active")[0].classList.remove("active")
                $("a[href=\"#about\"]")[0].classList.add("active");
            }
        }

        //
        // // scroll to top
        // if(document.getElementsByClassName("resume-article")[0].scrollWidth>300 && document.getElementsByClassName("resume-article")[0].scrollWidth<400){
        //
        // }
        // else if(document.getElementsByClassName("resume-article")[0].scrollWidth>400 && document.getElementsByClassName("resume-article")[0].scrollWidth<500){
        //
        // }
        // else if(document.getElementsByClassName("resume-article")[0].scrollWidth>600 && document.getElementsByClassName("resume-article")[0].scrollWidth<700){
        //
        // }
        // else {
        //     console.log("...........................................................................")
        // }
    })
})

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

