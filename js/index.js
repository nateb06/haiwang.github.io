window.onload = function (){ 
 //保存当前显示的索引
  let index = 0;
  //保存读取隐藏文字的定时器标识
  let textTimeId
  let textTimeId2
  //获取头部
  let header = document.getElementById("header");
  //获取头部文字导航
  let active = document.querySelectorAll("#header .nav li");
  //2 获取内容区视口的大小
  let content = document.querySelector("#content");
  //获取内容区的整个ul
  let ul = document.querySelector("#content .list ");
  //获取内容区ul下的每一个li，一个li代表一屏
  let contentLis = document.querySelectorAll("#content .list>li");
  //获取轮播图按钮
  let dot = document.querySelectorAll("#content .dot>li");


  //0 控制音乐的播放
  let music = document.querySelector(".music");
  let audio = document.querySelector(".music #audio");
  music.onclick = function () {
    if (audio.paused) {
      audio.play();
      music.style.background = "url(\'./images/musicon.gif\')";
    } else {
      audio.pause();
      music.style.background = "url(\'./images/musicoff.gif\')";
    }
  }


  //1 控制鼠标滚动切换屏入场动画
  let arrAn = [
    {
      inAn: function () {
        let one1 = document.querySelector("#content .list .one .nav");
        let one2 = document.querySelector("#content .list .one .one2");
        let one3 = document.querySelector("#content .list .one .one3");
        one1.style.transform = "translateY(0px)";
        one2.style.transform = "translateX(0px)";
        one3.style.opacity = "1";
        one3.style.transform = "scale(1)";
   
      },
      outAn: function () {
        let one1 = document.querySelector("#content .list .one .nav");
        let one2 = document.querySelector("#content .list .one .one2");
        let one3 = document.querySelector("#content .list .one .one3");

        one1.style.transform = "translateY(1000px)";
        one2.style.transform = "translateX(1000px)";
        one3.style.opacity = "0";
        one3.style.transform = "scale(0.1)";

      }
    },
    {
      inAn: function () {
        let two1_list1 = document.querySelector(".two .two1 .two1_list .two1_list1");
        let two1_list2 = document.querySelector(".two .two1 .two1_list .two1_list2");
        let two1_list3 = document.querySelector(".two .two1 .two1_list .two1_list3");
        let two2 = document.querySelector(".two .two2  ");
        let twoId = document.getElementById("two2")
        two1_list1.style.transform = "translateY(0px)"
        two1_list2.style.transform = "translateY(0px)"
        two1_list3.style.transform = "translateY(0px)"
        two2.style.transform = "translateY(0px)"
      },
      outAn: function () {
        let two1_list1 = document.querySelector(".two .two1 .two1_list .two1_list1");
        let two1_list2 = document.querySelector(".two .two1 .two1_list .two1_list2");
        let two1_list3 = document.querySelector(".two .two1 .two1_list .two1_list3");
        let two2 = document.querySelector(".two .two2  ");
        let twoId = document.getElementById("two2")

        two1_list1.style.transform = "translateY(1000px)"
        two1_list2.style.transform = "translateY(1200px)"
        two1_list3.style.transform = "translateY(1400px)"
        two2.style.transform = "translateY(-500px)"
      }
    },
    {
      inAn: function () {
        let three1_list1 = document.querySelector(".three1_list .three1_list1");
        let three1_list2 = document.querySelector(".three1_list .three1_list2");
        let three2 = document.querySelector(".three .three2");

        three1_list1.style.transform = "translateX(0px)"
        three1_list2.style.transform = "translateX(0px)"
        three2.style.transform = "translateX(0px)"
      },
      outAn: function () {
        let three1_list1 = document.querySelector(".three1_list .three1_list1");
        let three1_list2 = document.querySelector(".three1_list .three1_list2");
        let three2 = document.querySelector(".three .three2");

        three1_list1.style.transform = "translateX(558px)"
        three1_list2.style.transform = "translateX(279px)"
        three2.style.transform = "translateX(-1000px)"
      }
    },
    {
      inAn: function () {
        let four1_list1 = document.querySelector(".four1_list .four1_list1");
        let four1_list2 = document.querySelector(".four1_list .four1_list2");
        let four1_list3 = document.querySelector(".four1_list .four1_list3");
        let four2 = document.querySelector(".four .four2");
        setTimeout(function () {
          four1_list2.style.transform = "translate(0,0)"
        }, 500);
        setTimeout(function () {
          four1_list1.style.transform = "translate(0,0)"
          four1_list3.style.transform = "translate(0,0)"
        }, 700)
        setTimeout(function () {
          four2.style.opacity = "1"
        }, 1000)
      },
      outAn: function () {
        let four1_list1 = document.querySelector(".four1_list .four1_list1");
        let four1_list2 = document.querySelector(".four1_list .four1_list2");
        let four1_list3 = document.querySelector(".four1_list .four1_list3");
        let four2 = document.querySelector(".four .four2");

        four1_list1.style.transform = "translate(279px,-1000px)"
        four1_list3.style.transform = "translate(-279px,-1000px)"
        four1_list2.style.transform = "translate( 0,-1000px)"
        four2.style.opacity = "0"
      }
    },
    {
      inAn: function () {
        let five1_list1 = document.querySelector(".five1_list .five1_list1");
        let five1_list2 = document.querySelector(".five1_list .five1_list2");
        let five1_list3 = document.querySelector(".five1_list .five1_list3");
        let five2 = document.querySelector(".five .five2");

        setTimeout(function () {
          five1_list1.style.transform = "translate(0,0)"
        }, 500)
        setTimeout(function () {
          five1_list2.style.transform = "translate(0,0)"
        }, 1000)
        setTimeout(function () {
          five1_list3.style.transform = "translate(0,0)"
        }, 1200)
        setTimeout(function () {
          five2.style.transform = "translate(0,0)"
        }, 1500)
      },
      outAn: function () {
        let five1_list1 = document.querySelector(".five1_list .five1_list1");
        let five1_list2 = document.querySelector(".five1_list .five1_list2");
        let five1_list3 = document.querySelector(".five1_list .five1_list3");
        let five2 = document.querySelector(".five .five2");

        five1_list1.style.transform = "translate(1000px,-1000px)"
        five1_list2.style.transform = "translate(1000px,-1000px)"
        five1_list3.style.transform = "translate( 1000px,-1000px)"
        five2.style.transform = "translate( -1000px,-1000px)"

      }
    },
    {
      inAn: function () {
        let six1_list1 = document.querySelector(".six1_list .six1_list1");
        let six1_list2 = document.querySelector(".six1_list .six1_list2");
        let six1_list3 = document.querySelector(".six1_list .six1_list3");
        let six2 = document.querySelector(".six .six2");

        setTimeout(function () {
          six1_list2.style.transform = "translateX(0px)"
        }, 500)
        setTimeout(function () {
          six1_list1.style.transform = "translateY(0px)"
          six1_list3.style.transform = "translateY(0px)"
          six2.style.transform = "translate( 0,0px)"
        }, 1000)
      },
      outAn: function () {
        let six1_list1 = document.querySelector(".six1_list .six1_list1");
        let six1_list2 = document.querySelector(".six1_list .six1_list2");
        let six1_list3 = document.querySelector(".six1_list .six1_list3");
        let six2 = document.querySelector(".six .six2");

        six1_list1.style.transform = "translateY(-1000px)"
        six1_list2.style.transform = "translateX(-1000px)"
        six1_list3.style.transform = "translateY( 1000px)"
        six2.style.transform = "translate( 0,1000px)"

      }
    },
    {//先执行out 再执行in
      inAn: function () {
        //获取用于隐藏/显示的源文字
        let hideText = document.getElementById('hideText');
        let showText = document.getElementById('showText');

        //控制文字一个个码上去效果
        let word = hideText.innerText; //总厂148
        
        let count = 0
        function showTextFn() {
          if (showText.innerText.length >= 151) {
            console.log('----')
            // 显示的文字达到最大,清除定时器
            clearInterval(textTimeId)
            return
          }
          //逐步从隐藏的文字中读取赋值
          showText.innerText = word.substring(0, count++);
        }
        textTimeId = setInterval(showTextFn, 100);

      },

      outAn: function () {
        //获取用于隐藏/显示的源文字
        let hideText = document.getElementById('hideText');
        let showText = document.getElementById('showText');

        if ( !textTimeId){
          showText.innerText = ' '
          //定时器存在且显示文字大于空白字符串,清除定时器
          if ( textTimeId  && (showText.innerText.length > 2) ){
              clearInterval(textTimeId)
          }
        }else{
          showText.innerText = ' '    
          clearInterval(textTimeId)
        }

      }
    },
    {
      inAn: function (){
        //获取用于隐藏/显示的源文字
        let hideText = document.getElementById('hideText_2');
        let showText = document.getElementById('showText_2');
        
        //控制文字一个个码上去效果
        let word = hideText.innerText; //总厂148
        
        let count = 0
        function showTextFn() {
          console.log('函数')
          if (showText.innerText.length >= 85) {
            console.log('----')
            // 显示的文字达到最大,清除定时器
            clearInterval(textTimeId2)
            return
          }
          //逐步从隐藏的文字中读取赋值
          showText.innerText = word.substring(0, count++);
        }
        textTimeId2 = setInterval(showTextFn, 100);

      },
      outAn: function (){
        //获取用于隐藏/显示的源文字
        let hideText = document.getElementById('hideText_2');
        let showText = document.getElementById('showText_2');

        if ( !textTimeId2){
          showText.innerText = ' '
          //定时器存在且显示文字大于空白字符串,清除定时器
          if ( textTimeId2  && (showText.innerText.length > 2) ){
              clearInterval(textTimeId2)
          }
        }else{
          showText.innerText = ' '    
          clearInterval(textTimeId2)
        }

      }
    }
  ]

  //1控制头部导航的背景类
  headerBind();
  function headerBind() {
    for (let i = 0; i < active.length; i++) {
      active[i].onclick = function () {
        for (let i = 0; i < active.length; i++) {
          active[i].classList.remove("active");
        }
        active[i].classList.add("active");
        index = i;
        move(index)
      }
    }

    //控制右侧导航点
    for (let i = 0; i < dot.length; i++) {
      dot[i].onclick = function () {
        for (let j = 0; j < dot.length; j++) {
          dot[j].classList.remove("active");
        }
        dot[i].classList.add("active");
        index = i;
        move(index)
      }
    }
  }

  Bind();
  //2控制内容区每一屏的高度
  function Bind() {
    content.style.height = document.documentElement.clientHeight - header.clientHeight + "px";
    for (let i = 0; i < contentLis.length; i++) {
      contentLis[i].style.height = document.documentElement.clientHeight - header.offsetHeight + "px";
    }
  }

  //3鼠标滚轮事件
  let timer;
  roll();
  function roll() {
    //2.2鼠标滚轮事件，兼容性
    if (content.addEventListener) {
      //火狐的滚动事件
      content.addEventListener("DOMMouseScroll", function (ev) {
        ev = ev || event;
        //防抖
        clearTimeout(timer);
        timer = setTimeout(function () {
          //调用兼容鼠标滚轮事件的函数
          fn(ev);
        }, 200)
      })
    }
    //其他浏览器滚动事件
    content.onmousewheel = function (ev) {
      ev = ev || event;
      //防抖
      clearTimeout(timer);
      timer = setTimeout(function () {
        //调用兼容鼠标滚轮事件的函数
        fn(ev);
      }, 200)
    };

    //兼容性
    function fn(ev) {
      ev = ev || event;
      let dir = "";
      if (ev.wheelDelta) {
        dir = ev.wheelDelta > 0 ? "up" : "down";
      } else if (ev.detail) {
        dir = ev.detail < 0 ? "up" : "down";
      }
      switch (dir) {
        case "up":
          //当index小于0，鼠标滚轮继续上滑也没有切换屏
          if (index > 0) {
            index--;
            move(index);
          }
          break;
        case "down":
          //当index大于内容区屏幕数，鼠标滚轮继续下滑也没有切换屏
          if (index < contentLis.length - 1) {
            index++;
            move(index);
          }
          break;
      }
    }
  }

  //4控制导航文字跟同步每一屏
  move();
  /**
   * index:第一次调用不需要传递,top为0，刚好顶在header下面,后续滚动时会传递index
   */
  function move() {
    //调用图片懒加载函数
    lazy(index)
    //同步鼠标滚动到的屏
    ul.style.top = -index * (document.documentElement.clientHeight - header.offsetHeight) + "px";
    //同步文字导航
    for (let i = 0; i < active.length; i++) {
      active[i].className = "";
    }
    active[index].className = "active";
    //同步右侧导航点
    for (let i = 0; i < dot.length; i++) {
      dot[i].className = "";
    }
    dot[index].className = "active";
    //切换屏动画
    arrAn[index].outAn();
    setTimeout(function () {
      arrAn[index].inAn();
    }, 500)
  }

  let homeNode = document.querySelector("#content .list .one .one3");

  home3D();
  function home3D() {
    //保存上一次的索引
    let oldIndex = 0;
    //自动轮播的索引
    //自动轮播定时器
    let timer;
    //自动轮播索引
    let autoIndex = 0;
    let home1LiNodes = document.querySelectorAll("#content .list .one .one3>img");
    let home2LiNodes = document.querySelectorAll("#content .list .one .nav>li")
    //手动轮播
    for (let i = 0; i < home1LiNodes.length; i++) {
      home2LiNodes[i].onclick = function () {
        //当手动点时，关闭自动轮播定时器
        clearInterval(timer);
        for (let j = 0; j < home2LiNodes.length; j++) {
          //清除所有白色小圆点类
          home2LiNodes[j].classList.remove("active");
        }
        //为当前点击的添加黑色小圆点类
        home2LiNodes[i].classList.add("active");

        //判断轮播图是  从左往右  根据当前索引大于上一次旧的索引
        if (i > oldIndex) {
          home1LiNodes[i].classList.remove("leftShow");
          home1LiNodes[i].classList.remove("leftHide");
          home1LiNodes[i].classList.remove("rightHide");
          //让当前的图从右边出来显示
          home1LiNodes[i].classList.add("rightShow");

          home1LiNodes[oldIndex].classList.remove("leftShow");
          home1LiNodes[oldIndex].classList.remove("rightShow");
          home1LiNodes[oldIndex].classList.remove("rightHide");
          //让当前的图从左边进去隐藏
          home1LiNodes[oldIndex].classList.add("leftHide");
        }
        //判断轮播图还是 从右往左  根据当前索引小于上一次旧的索引对比
        if (i < oldIndex) {
          home1LiNodes[i].classList.remove("rightHide");
          home1LiNodes[i].classList.remove("leftHide");
          home1LiNodes[i].classList.remove("rightShow");
          //让当前的图从左边出来显示
          home1LiNodes[i].classList.add("leftShow");

          home1LiNodes[oldIndex].classList.remove("leftShow");
          home1LiNodes[oldIndex].classList.remove("rightShow");
          home1LiNodes[oldIndex].classList.remove("leftHide");
          //让当前的图从右边进去隐藏
          home1LiNodes[oldIndex].classList.add("rightHide");
        }
        //让旧的索引等于当前点击的索引
        oldIndex = i;
        /*如果点击完，需要重新开启定时器，则需要以下代码
        1告诉导航点，当前是显示那一个屏的， 手动轮播 去同步 自动轮播
        autoIndex = i;
        2重新调用
        ziDong3D();
         */
        autoIndex = i;
        ziDong3D();
      }
    }

    ziDong3D();

    //自动轮播
    function ziDong3D() {
      clearInterval(timer);
      //自动轮播图，从左外右
      timer = setInterval(function () {
        autoIndex++;
        //1无痕轮播
        if (autoIndex === home1LiNodes.length) {
          autoIndex = 0;
        }
        //2同步导航点
        for (let i = 0; i < home2LiNodes.length; i++) {
          home2LiNodes[i].classList.remove("active");
        }
        home2LiNodes[autoIndex].classList.add("active");
        //3同步轮播切换图
        home1LiNodes[autoIndex].classList.remove("leftShow");
        home1LiNodes[autoIndex].classList.remove("leftHide");
        home1LiNodes[autoIndex].classList.remove("rightHide");
        //让当前的图从右边出来显示
        home1LiNodes[autoIndex].classList.add("rightShow");

        home1LiNodes[oldIndex].classList.remove("leftShow");
        home1LiNodes[oldIndex].classList.remove("rightShow");
        home1LiNodes[oldIndex].classList.remove("rightHide");
        //让当前的图从左边进去隐藏
        home1LiNodes[oldIndex].classList.add("leftHide");

        //4让自动轮播 同步 手动轮播的 索引
        oldIndex = autoIndex;
      }, 3000)

    }

    //控制移入事件mouseenter，用于清除轮播
    homeNode.onmouseover = function () {
      clearInterval(timer)
    }
    //控制移出事件mouseleave
    homeNode.onmouseleave = function () {
      ziDong3D()
    }

  }

  //图片懒加载
  lazy(index)
  function lazy(index){
    const arr = ['one','two','three','four','five','six','seven','eight']
    switch (index) {
      case index:
        //获取指定li下的所有img标签
        let imgArr = document.querySelectorAll(`.${arr[index]} img`)
        for (var i = 0; i < imgArr.length; i++) {
          imgArr[i].src = imgArr[i].getAttribute('data-src');
        }
        break;
    
      default:
        break;
    }
  }

  //调整浏览器分辨率时执行
  window.onresize = function () {
    // 跳转浏览器分辨率：
    //       1没有点击时屏幕只能出现一屏
    //       2放大点击时视口也只能出现一屏幕，需要重新调整每一屏li的高
    Bind();
    ul.style.top = -index * (document.documentElement.clientHeight - header.offsetHeight) + "px";
  }
}