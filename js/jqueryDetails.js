$(document).ready(function(){
    $("#Banner1").mouseenter(function(){
        $("#Banner1").css("color","#FF8600");
    }).mouseleave(function (){
            $("#Banner1").css("color","#111111");
        }
    );
    $("#Banner2").mouseenter(function(){
        $("#Banner2").css("color","#FF8600");
    }).mouseleave(function (){
            $("#Banner2").css("color","#111111");
        }
    );

    $("#Banner3").mouseenter(function(){
        $("#Banner3").css("color","#FF8600");
    }).mouseleave(function (){
            $("#Banner3").css("color","#111111");
        }
    );
    $("#Banner4").mouseenter(function(){
        $("#Banner4").css("color","#FF8600");
    }).mouseleave(function (){
            $("#Banner4").css("color","#111111");
        }
    );

    //缓缓打开About界面
    $('#Banner4').click(function (){

            //打开About界面
            $('.About').css("display",'flex');
            //缓缓打开About界面的动画
            $('.AboutPage').animate({opacity:1});
            $('.aboutClose').animate({opacity:1});
        }
    )
    $('.giveUpGeneration').click(function (){
        console.log('niha');
            //打开About界面
            $('.About').css("display",'flex');
            //缓缓打开About界面的动画
            $('.AboutPage').animate({opacity:1});
            $('.aboutClose').animate({opacity:1});
        }
    )
    $('.aboutClose').click(function (){
        $('.AboutPage').animate({opacity:0},function (){  $('.About').css("display",'none');});
        $('.aboutClose').animate({opacity:0},function (){$('.About').css("display",'none');});

    })






    /*
    var renderModel=true;*/
    /*
    *
    *
    *
    * */

   /* $('.productDetail').click(function (){
        if(renderModel){
            /!*
            $('#canvasRenderRow').css('display','none');
            $('.detailContent').css('display','flex');
            $('body').css('overflow-y','auto');
            $('.cover').css('z-index',6);
            $('.Banner').css('position','fixed');
            *!/
            window.location.href='Product1Details.html';

            renderModel=false;
        }
        else if(!renderModel){
            /!* $('#canvasRenderRow').css('display','flex');
            $('.detailContent').css('display','none');
            $('body').css('overflow-y','hidden');
            $('.cover').css('z-index',0);
            $('.Banner').css('position','flex');
            $('body').css('height','100%');
            *!/
            window.location.href='Details.html';
            renderModel=true;
        }
    })*/





})