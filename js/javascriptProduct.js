
//获取动画

window.onload=function (){

    //底部文字滚动
    let loader = document.querySelector(".spinner");
        // 加载完成，隐藏动画，显示内容
    loader.style.display = "none";

    //滚动字幕条
    var str='N PO FOOD NOTHING TO GIVE UP N PO FOOD NOTHING TO GIVE UP N PO FOOD NOTHING TO GIVE UP N PO FOOD NOTHING TO GIVE UP N PO FOOD NOTHING TO GIVE UP N PO FOOD NOTHING TO GIVE UP N PO FOOD NOTHING TO GIVE UP';
    var scrollBox=document.getElementById('scrollLeftBox');
    function scrollLeft(){
        scrollBox.value=str;
        str = str.substring(1, str.length) +　str.substring(0, 1);
    }
    setInterval(scrollLeft, 80);






}