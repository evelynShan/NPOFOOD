
$(document).ready(function(){

    var modelcount=1;
    /*
        $("#Banner1").mouseenter(function(){
            var width = $(this).width();
            $("#Banner1").animate({width:width*1.1},500,function(){
                $("#Banner1").css("color","#FF8600");
                $("#Banner1").css("font-family","#FF8600");
            });
        }).mouseleave(function (){
                var width = $(this).width();
                $("#Banner1").animate({width:width*0.91},500,function(){
                    $("#Banner1").css("color","#111111");
                });
            }
        );
    */
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


        //产品页，切换产品，切换介绍
        $("#lastModel").click(function (){
                modelcount--;
                console.log(modelcount);
                //加载模型2的介绍
            if(modelcount==2){
                $("#Title1").text('NEW ARRIVAL-002');
                $("#Title2").text('Love to Work');
                $("#Content1").text('Judge your working hours, your mood and your hunger level and complete your self-service medication collection. Different doses of capsules to keep your brain clear, your mood happy and your energy levels high. Helps you to finish your meal quickly without long-time distractions and get straight into a focused state.');
                $("#Content2").text('· Self-service pill machines');
                $("#Content3").text('· Three different kinds of pills for different purposes');
                $("#Content4").text('· Refill pills');
                $("#Content5").text('');
                $("#Content6").text('We have made every effort to ensure that the information on this page was accurate at the time of final editing. As we are constantly reviewing and developing our products to meet the needs of consumers,especially for those who need to concentrate on work and study for long periods of time.');

            }
            //加载模型3的介绍
            else if(modelcount==3){
                $("#Title1").text('NEW ARRIVAL-003');
                $("#Title2").text('Never Go Hungry');
                $("#Content1").text("Helps you stay full so you don't stop eating just because you are hungry.Let you maintain the chewing state,simulate the most realistic food texture and taste, and no longer need to feel guilty for eating.");
                $("#Content2").text('· Pills to maintain a feeling of satiety');
                $("#Content3").text('· chewable gum used to maintain a chewing state');
                $("#Content4").text('· Pills to maintain a feeling of satiety');
                $("#Content5").text('· Customised chewable gum in different flavours');
                $("#Content6").text('We have made every effort to ensure that the information on this page was accurate at the time of final editing. As we are constantly reviewing and developing our products to meet the needs of consumers,especially for those who want to diet but cannot stop eating because they cannot control their hunger..');

            }
            //加载模型4的介绍
            else if(modelcount==4){
                    $("#Title1").text('NEW ARRIVAL-004');
                    $("#Title2").text('Stay Focus');
                    $("#Content1").text("Unlike traditional foods, the new generation of the new 'sugar concoction' will no longer make you worry about carbohydrates and calories.By means of extracorporeal exposure, it directly helps the production of dopamine in your brain, keeping you happy at all times, working in pleasure and learning in pleasure.");
                    $("#Content2").text('· Magnetic electrode storage case');
                    $("#Content3").text('· Skin-friendly electrode patches for continuous use');
                    $("#Content4").text('· Edible fruit acid patch');
                    $("#Content5").text('');
                    $("#Content6").text('We have made every effort to ensure that the information on this page was accurate at the time of final editing. As we are constantly reviewing and developing our products to meet the needs of consumers,especially for those who have to resort to high sugar and calorie foods to relieve stress or improve concentration due to work pressure.');
            }
            //加载模型1的介绍
            else if(modelcount==0){
                $("#Title1").text('NEW ARRIVAL-004');
                $("#Title2").text('Stay Focus');
                $("#Content1").text("Unlike traditional foods, the new generation of the new 'sugar concoction' will no longer make you worry about carbohydrates and calories.By means of extracorporeal exposure, it directly helps the production of dopamine in your brain, keeping you happy at all times, working in pleasure and learning in pleasure.");
                $("#Content2").text('· Magnetic electrode storage case');
                $("#Content3").text('· Skin-friendly electrode patches for continuous use');
                $("#Content4").text('· Edible fruit acid patch');
                $("#Content5").text('');
                $("#Content6").text('We have made every effort to ensure that the information on this page was accurate at the time of final editing. As we are constantly reviewing and developing our products to meet the needs of consumers,especially for those who have to resort to high sugar and calorie foods to relieve stress or improve concentration due to work pressure.');

                modelcount=4;

            }
            else if(modelcount==1){
                $("#Title1").text('NEW ARRIVAL-001');
                $("#Title2").text('Slim Fast');
                $("#Content1").text("Meal replacements help to reduce your energy intake and sparkling water helps to make you feel fuller, allowing you to reduce your food intake.Order our 'Slim Fast' products to shorten your slimming program cycle, get happy, and slim down to your perfect figure.");
                $("#Content2").text('· DIY Meal Replacement Cup');
                $("#Content3").text('· Storage box');
                $("#Content4").text('· Customized Meal Replacement Cards');
                $("#Content5").text('· Customized Inflatable Tins');
                $("#Content6").text("We have made every effort to ensure that the information on this page was accurate at the time of final editing. As we are constantly reviewing and developing our products to meet the needs of consumers,especially those who need to lose weight fast and don't have time to work out.");
            }
        }
    )

    //当点击下一个模型的按钮时
    $("#nextModel").click(function (){
        modelcount++;
        //加载模型2的介绍
        if(modelcount==2){
            $("#Title1").text('NEW ARRIVAL-002');
            $("#Title2").text('Love to Work');
            $("#Content1").text('Judge your working hours, your mood and your hunger level and complete your self-service medication collection. Different doses of capsules to keep your brain clear, your mood happy and your energy levels high. Helps you to finish your meal quickly without long-time distractions and get straight into a focused state.');
            $("#Content2").text('· Self-service pill machines');
            $("#Content3").text('· Three different kinds of pills for different purposes');
            $("#Content4").text('· Refill pills');
            $("#Content5").text('');
            $("#Content6").text('We have made every effort to ensure that the information on this page was accurate at the time of final editing. As we are constantly reviewing and developing our products to meet the needs of consumers,especially for those who need to concentrate on work and study for long periods of time.');
        }
        //加载模型3的介绍
        else if(modelcount==3){
            $("#Title1").text('NEW ARRIVAL-003');
            $("#Title2").text('Never Go Hungry');
            $("#Content1").text("Helps you stay full so you don't stop eating just because you are hungry.Let you maintain the chewing state,simulate the most realistic food texture and taste, and no longer need to feel guilty for eating.");
            $("#Content2").text('· Pills to maintain a feeling of satiety');
            $("#Content3").text('· chewable gum used to maintain a chewing state');
            $("#Content4").text('· Pills to maintain a feeling of satiety');
            $("#Content5").text('· Customised chewable gum in different flavours');
            $("#Content6").text('We have made every effort to ensure that the information on this page was accurate at the time of final editing. As we are constantly reviewing and developing our products to meet the needs of consumers,especially for those who want to diet but cannot stop eating because they cannot control their hunger.');

        }
        //加载模型4的介绍
        else if(modelcount==4){
            $("#Title1").text('NEW ARRIVAL-004');
            $("#Title2").text('Stay Focus');
            $("#Content1").text("Unlike traditional foods, the new generation of the new 'sugar concoction' will no longer make you worry about carbohydrates and calories.By means of extracorporeal exposure, it directly helps the production of dopamine in your brain, keeping you happy at all times, working in pleasure and learning in pleasure.");
            $("#Content2").text('· Magnetic electrode storage case');
            $("#Content3").text('· Skin-friendly electrode patches for continuous use');
            $("#Content4").text('· Edible fruit acid patch');
            $("#Content5").text('');
            $("#Content6").text('We have made every effort to ensure that the information on this page was accurate at the time of final editing. As we are constantly reviewing and developing our products to meet the needs of consumers,especially for those who have to resort to high sugar and calorie foods to relieve stress or improve concentration due to work pressure.');
        }
        //加载模型1的介绍
        else if(modelcount==5){
        modelcount=1;
            $("#Title1").text('NEW ARRIVAL-001');
            $("#Title2").text('Slim Fast');
            $("#Content1").text("Meal replacements help to reduce your energy intake and sparkling water helps to make you feel fuller, allowing you to reduce your food intake.Order our 'Slim Fast' products to shorten your slimming program cycle, get happy, and slim down to your perfect figure.");
            $("#Content2").text('· DIY Meal Replacement Cup');
            $("#Content3").text('· Storage box');
            $("#Content4").text('· Customized Meal Replacement Cards');
            $("#Content5").text('· Customized Inflatable Tins');
            $("#Content6").text("We have made every effort to ensure that the information on this page was accurate at the time of final editing. As we are constantly reviewing and developing our products to meet the needs of consumers,especially those who need to lose weight fast and don't have time to work out.");
        }
        }
    )


    $('#Banner4').click(function (){

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




})
