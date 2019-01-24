
$(function () {
  // 给右按钮绑定点击事件
  var index = 0;
  $(".rightbox").click(function(){
    index++;
    // 判断是否到最后一个
    if(index == 11){
      index = 0;
    }
    // 当期为第一页  改变背景色
    if (index == 0) {
      $('#Thead_top').removeClass();
    }
    // 当是贾正秋的时候调用jzqfun函数
    if ( index == 1) {
      jzqfun();
    }
    // 当是张猛的时候调用
    if (index == 2) {
      zmfun();
    }
    // 当是李庆华的时候调用
    if (index == 3) {
      lqhfun();
    }
    // 潘婷
    if (index == 4) {
      ptfun('.ptleftdiv', '.ptrightdiv', '.ptleftdiv > img', '.ptrightdiv > div');
    }
    // 尹秀娟
    if (index == 5) {
      yxjfun();
    }
    // 宋雪洁
    if (index == 6) {
      sxjfun();
    }
    // 张志锋
    if (index == 7) {
      zzffun();
    }
    // 马佳瑞
    if (index == 8) {
      mjrfun();
    }
    //王博文
    if (index == 9) {
      wbwfun();
    }
    // 赵呵呵
    if (index == 10) {
      zhhfun();
    }
    $($('.about_us ul li')[index]).addClass('active').siblings().removeClass('active');
  });
  
  $('.leftbox').click(function () {
    index--;

    if(index == -1){
      index = 10;
    }
    // 当期为第一页  改变背景色
    if (index == 0) {
      $('#Thead_top').removeClass();
    }
    // 当是贾正秋的时候调用
    if (index == 1) {
      jzqfun();
    }
    // 当是张猛的时候调用
    if (index == 2) {
      zmfun();
    }
    // 当是李庆华的时候调用
    if (index == 3) {
      lqhfun();
    }
    // 潘婷
    if (index == 4) {
      ptfun('.ptleftdiv', '.ptrightdiv', '.ptleftdiv > img', '.ptrightdiv > div');
    }
    // 尹秀娟
    if (index == 5) {
      yxjfun();
    }
    // 宋雪洁
    if (index == 6) {
      sxjfun();
    }
    // 张志锋
    if (index == 7) {
      zzffun();
    }
    // 马佳瑞
    if (index == 8) {
      mjrfun();
    }
    // 王博文
    if (index == 9) {
      wbwfun();
    }
    // 赵呵呵
    if (index ==10) {
      zhhfun();
    }
    $($('.about_us ul li')[index]).addClass('active').siblings().removeClass('active');
  });


  // 左右轮播按钮
  $('#bgclb a').hover(function () {
    $(this).stop().animate({
      opacity: 1,
      },
      500);
  }, function () {
    $(this).stop().animate({
      opacity: 0.1,
      },
      500);
  });

  // 立方体下面盒子进入动画
  $('.lifangti_bg > p').stop().animate({
    bottom: 0,
    },
    1000,function () {
      $('.lifangti_bg > p > span:last-child').fadeIn(1000);
    });

  // 立方体进入动画
  $('.lifangti > div').fadeIn(2500);

  // 动态添加文字第一栏
  function serIdivone () {
    $('.body_box_fam > .body_box_fam_one').css('border-left', '2px solid #ff8000');
    // 右侧打字显示
    // 声明定时器
    var serInt;
    var str = '';
    var index = 0;
    // 声明数组
    var divarr = ['陈','宁','宁'];
    // 定时器
    serInt = setInterval(function () {
      // 判断下一个字符是不是undefined  如果是则结束
      if(divarr[index] == undefined){
        // 清除定时器
        clearInterval(serInt);
        // 结束之后调用下一个
        setIdivtow();
        // 清除左边框
        $('.body_box_fam > .body_box_fam_one').css('border-left', '2px solid rgba(255,255,255,0)');
        // 结束代码
        return ;
      }
      // 凭借字符串
      str += divarr[index];
      // 把每次拼接的字符串赋值给span
      $('.body_box_fam_one > div').text(str);
      index++;
    },150);
  }
  serIdivone();
  // 动态添加文字第二栏
  function setIdivtow () {
    $('.body_box_fam > .body_box_fam_two').css('border-left', '2px solid #ff8000');
    var serInt;
    var str = '';
    var index = 0;
    // 声明数组
    var divarr = ['许', '世', '丛', '、', '马', '明', '星', '、', '孙', '小', '敏', '、', '赵', '欣', '欣', '、', '蒋', '妙', '秀', '、', '冯', '贺', '齐', '、', '孙', '丽', '娟', '、', '孟', '祥', '远', '、', '李', '占', '磊','、','田','立','豪','、','周','琴'];
    // 定时器
    serInt = setInterval(function () {
      // 判断下一个字符是不是undefined  如果是则结束
      if(divarr[index] == undefined){
        // 清除定时器
        clearInterval(serInt);
        // 调用下一个
        setIdivthree();
        $('.body_box_fam > .body_box_fam_two').css('border-left', '2px solid rgba(255,255,255,0)');
        // 结束代码
        return ;
      }
      // 凭借字符串
      str += divarr[index];
      // 把每次拼接的字符串赋值给span
      $('.body_box_fam_two > div').text(str);
      index++;
    },150);
  }
  // 动态添加文字第三栏
  function setIdivthree () {
    $('.body_box_fam > .body_box_fam_three').css('border-left', '2px solid #ff8000');
    var serInt;
    var str = '';
    var index = 0;
    // 声明数组
    var divarr = ['2', '0', '1', '9', '/', '0', '1', '/', '2', '1'];
    // 定时器
    serInt = setInterval(function () {
      // 判断下一个字符是不是undefined  如果是则结束
      if(divarr[index] == undefined){
        // 清除定时器
        clearInterval(serInt);
        // 调用下一个
        setIdivfour();
        $('.body_box_fam > .body_box_fam_three').css('border-left', '2px solid rgba(255,255,255,0)');
        // 结束代码
        return ;
      }
      // 凭借字符串
      str += divarr[index];
      // 把每次拼接的字符串赋值给span
      $('.body_box_fam_three > div').text(str);
      index++;
    },150);
  }
  // 动态添加文字第四栏
  function setIdivfour () {
    $('.body_box_fam > .body_box_fam_four').css('border-left', '2px solid #ff8000');
    var serInt;
    var str = '';
    var index = 0;
    // 声明数组
    var divarr = ['北', '京', '市', '顺', '义', '区' , '黑', '马', '程', '序', '员'];
    // 定时器
    serInt = setInterval(function () {
      // 判断下一个字符是不是undefined  如果是则结束
      if(divarr[index] == undefined){
        // 清除定时器
        clearInterval(serInt);
        $('.body_box_fam > .body_box_fam_four').css('border-left', '2px solid rgba(255,255,255,0)');
        // 结束代码
        return ;
      }
      // 凭借字符串
      str += divarr[index];
      // 把每次拼接的字符串赋值给span
      $('.body_box_fam_four > div').text(str);
      index++;
    },150);
  }
  // 关于我们-显示
  $('.body_box_fam > div').hover(function () {
    $(this).css('border-left', '2px solid #ff8000');
  }, function () {
    $(this).css('border-left', '2px solid rgba(255,255,255,0)');
  });

  // 贾正秋
  function jzqfun () {
    $('.zzqleftdiv').animate({
      marginLeft: '125px',},
      1000, function() {
        $('.zzqleftdiv > img').fadeIn(1000);
    });
    $('.zzqrightdiv').animate({
      marginRight: '125px',},
      1000, function() {
        $('.zzqrightdiv > div').fadeIn(1000);
    });
    $('#Thead_top').removeClass().addClass('jzqclass');
  }
  // 贾正秋鼠标进入抖动
  $(".zzqrightdiv > div p").each(function(k,p){
          new JumpObj(p,5);
          //第一个参数代表元素对象
          //第二个参数代表抖动幅度
  });

// demo
function demodiv () {
  $('.demoleftdiv').animate({
    marginLeft: '125px',},
    1000, function() {
      $('.demoleftdiv > img').fadeIn(1000);
  });
  $('.demorightdiv').animate({
    marginRight: '125px',},
    1000, function() {
      $('.demorightdiv > div').fadeIn(1000);
  });
  $('#Thead_top').removeClass().addClass('democlass');
}
// 贾正秋鼠标进入抖动
$(".demorightdiv > div p").each(function(k,p){
        new JumpObj(p,5);
        //第一个参数代表元素对象
        //第二个参数代表抖动幅度
});

  // 张猛
  function zmfun () {
    $('.zmleftdiv').stop().animate({
      marginTop: '25px',
      },
      500, function() {
        $(this).stop().animate({
          marginLeft: '125px',},
          500, function() {
            $('.zmleftdiv > img').show(1000);
        });
    });
    $('.zmrightdiv').stop().animate({
      marginTop: '25px',},
      500, function() {
        $(this).stop().animate({
          marginRight: '125px',},
          500, function() {
            $('.zmrightdiv > div').show(1000);
        });
    });
    $('#Thead_top').removeClass().addClass('zmclass');
  }
  // 张猛鼠标进入抖动
  $(".zmrightdiv > div p").each(function(k,p){
          new JumpObj(p,5);
          //第一个参数代表元素对象
          //第二个参数代表抖动幅度
  });

  // 李庆华
  function lqhfun () {
    $('.lqhleftdiv').stop().animate({
      marginTop: '25px',
      },
      500, function() {
        $(this).stop().animate({
          marginLeft: '125px',},
          500, function() {
            $('.lqhleftdiv > img').fadeIn(1000);
        });
    });
    $('.lqhrightdiv').stop().animate({
      marginTop: '25px',},
      500, function() {
        $(this).stop().animate({
          marginRight: '125px',},
          500, function() {
            $('.lqhrightdiv > div').fadeIn(1000);
        });
    });
    $('#Thead_top').removeClass().addClass('lqhclass');
  }
  // 李庆华鼠标进入抖动
  $(".lqhrightdiv > div p").each(function(k,p){
          new JumpObj(p,5);
          //第一个参数代表元素对象
          //第二个参数代表抖动幅度
  });
  // 潘婷
  function ptfun (elemleft, elemright, elemimg, elemdiv) {
    $(elemleft).stop().animate({
      marginTop: '25px',
      },
      500, function() {
        $(elemleft).stop().animate({
          marginLeft: '125px',},
          500, function() {
            $(elemimg).show(1000);
        });
    });
    $(elemright).stop().animate({
      marginTop: '25px',},
      500, function() {
        $(elemright).stop().animate({
          marginRight: '125px',},
          500, function() {
            $(elemdiv).show(1000, function () {
              $('.ptrightdiv > div > img').stop().animate({
                marginTop: 0},
                300, function() {
                  $(this).animate({
                    marginTop: '-150px',},
                    400, function() {
                      $(this).animate({
                        marginTop: 0},
                        450, function() {
                          $(this).animate({
                            marginTop: '-60px',},
                            500, function() {
                              $(this).animate({
                                marginTop: 0},
                                550, function() {
                                /* stuff to do after animation is complete */
                              });
                          });
                      });
                  });
              });
            });
        });
    });
    $('#Thead_top').removeClass().addClass('ptclass');
  }
  // 潘婷鼠标进入抖动
  $(".ptrightdiv > div p").each(function(k,p){
          new JumpObj(p,5);
          //第一个参数代表元素对象
          //第二个参数代表抖动幅度
  });
  // 尹秀娟
  function yxjfun () {
    $('.yxjleftdiv').stop().animate({
      marginTop: '25px',
      },
      500, function() {
        $(this).stop().animate({
          marginLeft: '125px',},
          500, function() {
            $('.yxjleftdiv > img').fadeIn(1000);
        });
    });
    $('.yxjrightdiv').stop().animate({
      marginTop: '25px',},
      500, function() {
        $(this).stop().animate({
          marginRight: '125px',},
          500, function() {
            $('.yxjrightdiv > div').fadeIn(1000);
        });
    });
    $('#Thead_top').removeClass().addClass('yxjclass');
  }
  // 尹秀娟鼠标进入抖动
  $(".yxjrightdiv > div p").each(function(k,p){
          new JumpObj(p,5);
          //第一个参数代表元素对象
          //第二个参数代表抖动幅度
  });

  // 宋雪洁鼠标进入
  function sxjfun () {
    $('.sxjleftdiv').stop().animate({
      marginLeft: '0px',
      },
      500, function() {
        $(this).stop().animate({
          marginTop: '25px',},
          500, function() {
            $('.sxjleftdiv > img').fadeIn(500);
            $(this).animate({
              marginLeft: '125px',},
              500, function() {

            });
        });
    });
    $('.sxjrightdiv').stop().animate({
      marginRight: '0px',},
      500, function() {
        $(this).stop().animate({
          marginTop: '25px',},
          500, function() {
            $('.sxjrightdiv > div').fadeIn(500);
            $(this).animate({
              marginRight: '125px',},
              500, function() {

            });
        });
    });
    $('#Thead_top').removeClass().addClass('sxjclass');
  }
  // 宋雪洁鼠标进入抖动
  $(".sxjrightdiv > div p").each(function(k,p){
          new JumpObj(p,5);
          //第一个参数代表元素对象
          //第二个参数代表抖动幅度
  });

  // 张志锋鼠标进入
  function zzffun () {
    $('.zzfleftdiv').stop().animate({
      marginLeft: '0px',
      },
      500, function() {
        $(this).stop().animate({
          marginTop: '25px',},
          500, function() {
            $('.zzfleftdiv > img').fadeIn(500);
            $(this).animate({
              marginLeft: '125px',},
              500);
        });
    });
    $('.zzfrightdiv').stop().animate({
      marginRight: '0px',},
      500, function() {
        $(this).stop().animate({
          marginTop: '25px',},
          500, function() {
            $('.zzfrightdiv > div').fadeIn(500);
            $(this).animate({
              marginRight: '125px',},
              500);
        });
    });
    $('#Thead_top').removeClass().addClass('zzfclass');
  }
  // 张志锋鼠标进入抖动
  $(".zzfrightdiv > div p").each(function(k,p){
          new JumpObj(p,5);
          //第一个参数代表元素对象
          //第二个参数代表抖动幅度
  });


  // 马佳瑞鼠标进入
  function mjrfun () {
    $('.mjrleftdiv').stop().animate({
      marginTop: '-40px',
      },
      500, function() {
        $(this).stop().animate({
          marginTop: '25px',},
          500, function() {
            $('.mjrleftdiv > img').fadeIn(500);
            $(this).animate({
              marginLeft: '125px',},
              500);
        });
    });
    $('.mjrrightdiv').stop().animate({
      marginTop: '-40px',},
      500, function() {
        $(this).stop().animate({
          marginTop: '25px',},
          500, function() {
            $('.mjrrightdiv > div').fadeIn(500);
            $(this).animate({
              marginRight: '125px',},
              500);
        });
    });
    $('#Thead_top').removeClass().addClass('mjrclass');
  }
  // 马佳瑞鼠标进入抖动
  $(".mjrrightdiv > div p").each(function(k,p){
          new JumpObj(p,5);
          //第一个参数代表元素对象
          //第二个参数代表抖动幅度
  });

  // 王博文鼠标进入
  function wbwfun () {
    $('.wbwleftdiv').stop().animate({
      marginTop: '90px',
      },
      500, function() {
        $(this).stop().animate({
          marginTop: '25px',},
          500, function() {
            $('.wbwleftdiv > img').fadeIn(500);
            $(this).animate({
              marginLeft: '125px',},
              500);
        });
    });
    $('.wbwrightdiv').stop().animate({
      marginTop: '90px',},
      500, function() {
        $(this).stop().animate({
          marginTop: '25px',},
          500, function() {
            $('.wbwrightdiv > div').fadeIn(500);
            $(this).animate({
              marginRight: '125px',},
              500);
        });
    });
    $('#Thead_top').removeClass().addClass('wbwclass');
  }
  // 王博文鼠标进入抖动
  $(".wbwrightdiv > div p").each(function(k,p){
          new JumpObj(p,5);
          //第一个参数代表元素对象
          //第二个参数代表抖动幅度
  });

  // 赵呵呵鼠标进入
  function zhhfun () {
    $('.zhhleftdiv > img').fadeIn(500);
    $('.zhhrightdiv > div').fadeIn(500);
    $('#Thead_top').removeClass().addClass('zhhclass');
  }
  // 赵呵呵鼠标进入抖动
  $(".zhhrightdiv > div p").each(function(k,p){
          new JumpObj(p,5);
          //第一个参数代表元素对象
          //第二个参数代表抖动幅度
  });

  // 鼠标进入抖动特效
  function JumpObj(elem, range, startFunc, endFunc) {
    var curMax = range = range || 6;
      startFunc = startFunc || function(){};
    endFunc = endFunc || function(){};
    var drct = 0;
    var step = 1;

    init();

    function init() { elem.style.position = 'relative';active() }
    function active() { elem.onmouseover = function(e) {if(!drct)jump()} }
    function deactive() { elem.onmouseover = null }

    function jump() {
       var t = parseInt(elem.style.top);
      if (!drct) motionStart();
      else {
        var nextTop = t - step * drct;
        if (nextTop >= -curMax && nextTop <= 0) elem.style.top = nextTop + 'px';
        else if(nextTop < -curMax) drct = -1;
         else {
          var nextMax = curMax / 2;
          if (nextMax < 1) {motionOver();return;}
          curMax = nextMax;
          drct = 1;
        }
      }
      setTimeout(function(){jump()}, 100 / (curMax+3) + drct * 3);
     }
    function motionStart() {
      startFunc.apply(this);
      elem.style.top='0';
      drct = 1;
    }
      function motionOver() {
      endFunc.apply(this);
      curMax = range;
      drct = 0;
      elem.style.top = '0';
    }

    this.jump = jump;
    this.active = active;
    this.deactive = deactive;
  }




  // 上面的每个人动画如果一样的话 可以封装
  // function ptfun (elemleft, elemright, elemimg, elemdiv) {
  //   $(elemleft).stop().animate({
  //     marginTop: '25px',
  //     },
  //     500, function() {
  //       $(elemleft).stop().animate({
  //         marginLeft: '125px',},
  //         500, function() {
  //           $(elemimg).show(1000);
  //       });
  //   });
  //   $(elemright).stop().animate({
  //     marginTop: '25px',},
  //     500, function() {
  //       $(elemright).stop().animate({
  //         marginRight: '125px',},
  //         500, function() {
  //           $(elemdiv).show(1000);
  //       });
  //   });
  // }
});
// 给出现的按钮绑定点击关闭事件
$('.particles-button').click(function () {
 $('#tanchudivs.grid__item').fadeOut(2000);
});
// 给a 绑定点击事件   点击过后禁用
$('.liana_me').click(function () {
  // 禁用a标签
  $(this).attr("disabled",true);
  $(this).css("pointer-events","none");
  // 点击出现
  $('#tanchudivs.grid__item').fadeIn(1000);
});


// 引入按钮
document.documentElement.className="js";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");
