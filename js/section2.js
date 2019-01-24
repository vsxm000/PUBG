// 定义一个索引
var index1_sec2 = 0;
// 【右侧按钮实现轮播下一项】
$('.section2 .arrow-right-next').click(function () {
  // 找到轮播当前项，淡出隐藏
  $('.slide_lun').eq(index1_sec2).fadeOut(300);
  // 找到当前的小点，样式恢复默认
  $('.section2 .bottom .dot li').eq(index1_sec2).find('span').removeClass('current');
  index1_sec2++;
  // 限制索引
  if (index1_sec2 > $('.slide_lun').length - 1) {
    index1_sec2 = 0;
  }
  // 下一个轮播项淡入显示
  $('.slide_lun').eq(index1_sec2).fadeIn(300);
  // 找到当前的小点，样式突出显示
  $('.section2 .bottom .dot li').find('span').removeClass('current');
  $('.section2 .bottom .dot li').eq(index1_sec2).find('span').addClass('current');
});
// 【左侧按钮实现轮播上一项】
$('.section2 .arrow-left-prev').click(function () {
  // 找到轮播当前项，淡出隐藏
  $('.slide_lun').eq(index1_sec2).fadeOut(300);
  // 找到当前的小点，样式恢复默认
  $('.section2 .bottom .dot li').find('span').removeClass('current');
  $('.section2 .bottom .dot li').eq(index1_sec2).find('span').removeClass('current');
  index1_sec2--;
  // 限制索引
  if (index1_sec2 < 0) {
    index1_sec2 = $('.slide_lun').length - 1;
  }

  // 下一个轮播项淡入显示
  $('.slide_lun').eq(index1_sec2).fadeIn(300);
  // 找到当前的小点，样式突出显示
  $('.section2 .bottom .dot li').find('span').removeClass('current');
  $('.section2 .bottom .dot li').eq(index1_sec2).find('span').addClass('current');

});


// 【点击小点切换】
// 给小点注册事件
$('.section2 .bottom .dot li').click(function () {
  // 找到轮播当前项，淡出隐藏
  $('.slide_lun').eq(index1_sec2).fadeOut(300);
  // 找到当前的小点，样式恢复默认
  $('.section2 .bottom .dot li').eq(index1_sec2).find('span').removeClass('current');
  // 获取当前小点的索引，更改index1_sec2
  index1_sec2 = $(this).index();
  // 下一个轮播项淡入显示
  $('.slide_lun').eq(index1_sec2).fadeIn(300);
  // 找到当前的小点，样式突出显示
  $('.section2 .bottom .dot li').eq(index1_sec2).find('span').addClass('current');
});
