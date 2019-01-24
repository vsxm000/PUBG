
window.onload = function () {
 
    // 顶部左侧图片大图和小图的显示和隐藏
        //获取页面元素
        var activity_small = document.querySelector(".activity_small");
        var activity_small_pic =document.querySelector(".activity_small_pic");
        var activity_big = document.querySelector(".activity_big");
        var activity_big_pic = document.querySelector(".activity_big_pic");
    
        activity_small.onmouseover = function () {

            activity_small_pic.style.display = "none";
           activity_big.style.display = "block";
}

       activity_small.onmouseout = function () {

            activity_small_pic.style.display = "block";
            activity_big.style.display = "none";
    }
}