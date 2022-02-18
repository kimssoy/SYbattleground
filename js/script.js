$(function(){
    $(".nav>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    });
    $(".nav>li").mouseout(function(){
        $(this).find(".sub").stop().slideUp();
    });

    $(".toggle").click(function(){
        $(".nav").slideToggle()
        $(".change").css("display","block");
        $(".one").css("display","none");
    });

    $(".change").click(function(){
        $(".one").css("display","block");
        $(".change").css("display","none");
    });

    $(window).resize(function(){
        let winW = window.innerWidth;
        if(winW > 980){
            $(".nav").css("display","flex");
        }else{
            $(".nav").css("display","none");
            $(".nav>.gnb>a").click(function(e){
                e.preventDefault();
            });
        }
    });
    $(window).trigger("resize");
});