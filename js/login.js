  //    获取按钮
  $(document).mouseenter(function () { 
    $('.login').css('display','block');
    $('.bigbox').css('background','rgba(0, 0, 0, .1)')
})
//  获取×，实现点击，隐藏
$('.close a').click(function(){
    $('.login').css('display','none');
    $('.bigbox').css('background','none')
})


// 获取鼠标进入事件
$('.erweima').mouseenter(function(){
   
    $('.erweima img').stop().animate({left:-100},600)
    
    setTimeout(() => {
        $('.phone').css('display','block')
    }, 600);
    // $('.phone').stop().animate({opacity: 1}, 600);
    
    
})

 $('.erweima').mouseleave(function(){
    $('.erweima img').stop().animate({left:-10},600)
    $('.phone').css('display','none')
    
 })
