$(document).ready(function(){


    /*Banner宽度*/
    //设置Banner的宽度
    let BannerWidth=window.innerWidth;
    $(".Banner").css("width",BannerWidth)
    //当Windows窗口大小发声变化，Banner的宽度重新赋值
    $(window).resize(function (){
        let BannerWidth=window.innerWidth;
        $(".Banner").css("width",BannerWidth)
    })

    let aboutWidth=window.innerWidth;
    let aboutHeight=window.innerHeight;
    $(".About").css("width", aboutWidth)
    $(".About").css("height", aboutHeight)
    $(window).resize(function (){
        let aboutWidth=window.innerWidth;
        let aboutHeight=window.innerHeight;
        $(".About").css("width", aboutWidth)
        $(".About").css("height", aboutHeight)
    })

    /*嘴唇动画*/
    //获取当前scroll位置
    $('#openPopUp').bind('click',function (){
        var popWindows=document.getElementsByClassName('productsPop');
        console.log(popWindows.length);
        for(i=0;i<popWindows.length;i++){
            $(".productsPop").animate({width:'20%'});
            $(".productsPop").animate({opacity:'1'});
        }
    });



//显示当前滚动高度，根部不同滚动高度显示不同的图片（嘴唇动画
$(document).scroll(function (){

    var scroH = $(document).scrollTop();  //滚动高度

    var nowScroll=parseInt(scroH%20);
    //显示当前的滚动高度
    if(true){
        console.log("nihao")
        $('#nowScrollNum').text(scroH);
    }

    if(nowScroll==0){

        $("#lipsElements1").css('opacity','0');
        $("#lipsElements2").css('opacity','1');
        $("#lipsElements3").css('opacity','0');
        $("#lipsElements4").css('opacity','0');
    }
    else if(nowScroll==1) {

        $("#lipsElements1").css('opacity','0');
        $("#lipsElements2").css('opacity','0');
        $("#lipsElements3").css('opacity','1');
        $("#lipsElements4").css('opacity','0');
    }   else if(nowScroll==2) {

        $("#lipsElements1").css('opacity','0');
        $("#lipsElements2").css('opacity','0');
        $("#lipsElements3").css('opacity','0');
        $("#lipsElements4").css('opacity','1');
    }   else if(nowScroll==3) {

        $("#lipsElements1").css('opacity','1');
        $("#lipsElements2").css('opacity','0');
        $("#lipsElements3").css('opacity','0');
        $("#lipsElements4").css('opacity','0');
    }

})

    //过渡层
    //关闭弹出框
    $('#closePopWin1').bind('click',function (){
        closePopWindow1();
    });
    $('#closePopWin2').bind('click',function (){
        closePopWindow2();
    });
    $('#closePopWin3').bind('click',function (){
        closePopWindow3();
    });
    $('#closePopWin4').bind('click',function (){
        closePopWindow4();
    });
    function closePopWindow1(){
        //获取到所有类名为productsPop的元素
        $('#popWin1').css('opacity',0);
        $('#popWin1').css('width','0.1%');
    }
    function closePopWindow2(){
        //获取到所有类名为productsPop的元素
        $('#popWin2').css('opacity',0);
        $('#popWin2').css('width','0.1%');
    }
    function closePopWindow3(){
        //获取到所有类名为productsPop的元素
        $('#popWin3').css('opacity',0);
        $('#popWin3').css('width','0.1%');
    }
    function closePopWindow4(){
        //获取到所有类名为productsPop的元素
        $('#popWin4').css('opacity',0);
        $('#popWin4').css('width','0.1%');
    }

})