$(function(){
    $(".nav>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".nav>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp();
    });

    $(".toggle").click(function(){
        $(".nav").slideToggle()
        $(".toggle").css("display","none");
        $(".xBtn").css("display","block");
    });

    $(".xBtn").click(function(){
        $(".xBtn").css("display","none");
        $(".toggle").css("display","block");
        $(".nav").slideToggle()
    });


    $(window).resize(function(){
        let winW = window.innerWidth;
        if(winW > 980){
            $(".toggle").css("display","none");
            $(".xBtn").css("display","none");
            $(".nav").css("display","flex");
        }else{
            $(".toggle").css("display","block");
            $(".nav").css("display","none");
            $(".nav>.gnb>a").click(function(e){
                e.preventDefault();
            });
        }
    });
    $(window).trigger("resize");
});