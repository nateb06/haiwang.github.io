//该文件主要是用于控制特效的
let textTimeId
let textTimeId2
let textTimeId3
let textTimeId4
let textTimeId5
let arrAn = [
    { //首页
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
    { //路飞
      inAn: function () {
        let two1_list1 = document.querySelector(".two .two1 .two1_list .two1_list1");
        let two1_list2 = document.querySelector(".two .two1 .two1_list .two1_list2");
        let two1_list3 = document.querySelector(".two .two1 .two1_list .two1_list3");
        let two2 = document.querySelector(".two .two2  ");
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

        two1_list1.style.transform = "translateY(1000px)"
        two1_list2.style.transform = "translateY(1200px)"
        two1_list3.style.transform = "translateY(1400px)"
        two2.style.transform = "translateY(-500px)"
      }
    },
    { //索隆
      inAn: function () {
        let three1_list1 = document.querySelector(".three1_list .three1_list1");
        let three1_list2 = document.querySelector(".three1_list .three1_list2");
        let three2 = document.querySelector(".three .three2");

        three1_list1.style.transform = "translateX(0px)"
        three1_list2.style.transform = "translateX(0px)"
        three2.style.transform = "translateX(0px)"

         //控制文字一个个码上去效果
         let hideText = document.getElementById('hideText_5');
         let showText = document.getElementById('showText_5');
         let word = hideText.innerText; //总厂151
         let count = 0
         function showTextFn() {
           console.log('计时')
           if (showText.innerText.length >= word.length) {
             console.log('----清除')
             // 显示的文字达到最大,清除定时器
             clearInterval(textTimeId5)
             return
           }
           //逐步从隐藏的文字中读取赋值
           showText.innerText = word.substring(0, count++);
         }
         textTimeId5 = setInterval(showTextFn, 100);

      },
      outAn: function () {
        let three1_list1 = document.querySelector(".three1_list .three1_list1");
        let three1_list2 = document.querySelector(".three1_list .three1_list2");
        let three2 = document.querySelector(".three .three2");

        three1_list1.style.transform = "translateX(558px)"
        three1_list2.style.transform = "translateX(279px)"
        three2.style.transform = "translateX(-1000px)"

        let showText = document.getElementById('showText_5');
        if (!textTimeId5) {
          showText.innerText = ' '
          //定时器存在且显示文字大于空白字符串,清除定时器
          if (textTimeId5 && (showText.innerText.length > 2)) {
            clearInterval(textTimeId5)
          }
        } else {
          showText.innerText = ' '
          clearInterval(textTimeId4)
        }

      }
    },
    { //娜美
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

        //控制文字一个个码上去效果
        let hideText = document.getElementById('hideText_4');
        let showText = document.getElementById('showText_4');
        let word = hideText.innerText; //总厂151
        let count = 0
        function showTextFn() {
          console.log('计时')
          if (showText.innerText.length >= word.length) {
            console.log('----清除')
            // 显示的文字达到最大,清除定时器
            clearInterval(textTimeId4)
            return
          }
          //逐步从隐藏的文字中读取赋值
          showText.innerText = word.substring(0, count++);
        }
        textTimeId4 = setInterval(showTextFn, 100);
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

        let showText = document.getElementById('showText_4');
        if (!textTimeId4) {
          showText.innerText = ' '
          //定时器存在且显示文字大于空白字符串,清除定时器
          if (textTimeId4 && (showText.innerText.length > 2)) {
            clearInterval(textTimeId4)
          }
        } else {
          showText.innerText = ' '
          clearInterval(textTimeId4)
        }

      }
    },
    { //山治
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

         //控制文字一个个码上去效果
         let hideText = document.getElementById('hideText_7');
         let showText = document.getElementById('showText_7');
         let word = hideText.innerText; //总厂151
         let count = 0
         function showTextFn() {
           console.log('计时')
           if (showText.innerText.length >= word.length) {
             console.log('----清除')
             // 显示的文字达到最大,清除定时器
             clearInterval(textTimeId5)
             return
           }
           //逐步从隐藏的文字中读取赋值
           showText.innerText = word.substring(0, count++);
         }
         textTimeId5 = setInterval(showTextFn, 100);
        
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

        let showText = document.getElementById('showText_7');
        if (!textTimeId5) {
          showText.innerText = ' '
          //定时器存在且显示文字大于空白字符串,清除定时器
          if (textTimeId5 && (showText.innerText.length > 2)) {
            clearInterval(textTimeId5)
          }
        } else {
          showText.innerText = ' '
          clearInterval(textTimeId4)
        }
      }
    },
    { //乔巴
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

        //控制文字一个个码上去效果
        let hideText = document.getElementById('hideText_6');
        let showText = document.getElementById('showText_6');
        let word = hideText.innerText; //总厂151
        let count = 0
        function showTextFn() {
          console.log('计时')
          if (showText.innerText.length >= word.length) {
            console.log('----清除')
            // 显示的文字达到最大,清除定时器
            clearInterval(textTimeId5)
            return
          }
          //逐步从隐藏的文字中读取赋值
          showText.innerText = word.substring(0, count++);
        }
        textTimeId5 = setInterval(showTextFn, 100);


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

        let showText = document.getElementById('showText_6');
        if (!textTimeId5) {
          showText.innerText = ' '
          //定时器存在且显示文字大于空白字符串,清除定时器
          if (textTimeId5 && (showText.innerText.length > 2)) {
            clearInterval(textTimeId5)
          }
        } else {
          showText.innerText = ' '
          clearInterval(textTimeId4)
        }

      }
    },
    {//罗宾先执行out 再执行in
      inAn: function () {
        //获取用于隐藏/显示的源文字
        let hideText = document.getElementById('hideText');
        let showText = document.getElementById('showText_1');

        //控制文字一个个码上去效果
        let word = hideText.innerText; //总厂151

        let count = 0
        function showTextFn() {
          console.log('计时')
          if (showText.innerText.length >= 151) {
            console.log('----清除')
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
        let showText = document.getElementById('showText_1');

        if (!textTimeId) {
          showText.innerText = ' '
          //定时器存在且显示文字大于空白字符串,清除定时器
          if (textTimeId && (showText.innerText.length > 2)) {
            clearInterval(textTimeId)
          }
        } else {
          showText.innerText = ' '
          clearInterval(textTimeId)
        }

      }
    },
    { //赏金
      inAn: function () {
        //获取用于隐藏/显示的源文字
        let hideText = document.getElementById('hideText_2');
        let showText = document.getElementById('showText_2');

        //控制文字一个个码上去效果
        let word = hideText.innerText; //85
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
      outAn: function () {
        //获取用于隐藏/显示的源文字
        let showText = document.getElementById('showText_2');

        if (!textTimeId2) {
          showText.innerText = ' '
          //定时器存在且显示文字大于空白字符串,清除定时器
          if (textTimeId2 && (showText.innerText.length > 2)) {
            clearInterval(textTimeId2)
          }
        } else {
          showText.innerText = ' '
          clearInterval(textTimeId2)
        }
      }
    },
    { //三D立体图
      inAn: function () {
        let hideText = document.getElementById('hideText_3');
        let showText = document.getElementById('showText_3');

        //控制文字一个个码上去效果
        let word = hideText.innerText; //总长89
        console.log(word.length)
        let count = 0
        function showTextFn() {
          console.log('------第')
          if (showText.innerText.length >= 89) {
            console.log('清除')
            // 显示的文字达到最大,清除定时器
            clearInterval(textTimeId3)
            return
          }
          //逐步从隐藏的文字中读取赋值
          showText.innerText = word.substring(0, count++);
        }
        textTimeId3 = setInterval(showTextFn, 100);
      },

      outAn: function () {
        let showText = document.getElementById('showText_3');

        if (!textTimeId3) {
          showText.innerText = ' '
          //定时器存在且显示文字大于空白字符串,清除定时器
          if (textTimeId3 && (showText.innerText.length > 2)) {
            clearInterval(textTimeId3)
          }
        } else {
          showText.innerText = ' '
          clearInterval(textTimeId3)
        }
      }

    }
]
