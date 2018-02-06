
var $window = $(window);
var loading = $('.loading');
var intro = $('.intro');
var containerPage = $('#page');

var images = [
    './images/people.png',
    './images/mountain.png',
    './images/cloud.png',
    './images/background.png',
    './images/pipe.png',
    './images/trees.png',
    './images/project.png'
  ];
  

var Resume = {
    init:function(){
        var self = this;
        $window.scrollTop(0);
        Me.init();
        //加载资源
        resourceHelper.load(images,function(result){
            loading.fadeOut();
            self.bindEvent();
        })
    },
    bindEvent:function(){
        var self = this;
        var curPosition = 0; // 当前位置
        var prePosition = 0; // 之前位置

        //监听滚动事件
        $window.on('scroll',function(e){
            curPosition = $window.scrollTop();
            //计算移动距离
            var distant = curPosition - prePosition;
            Me.setDirection(distant);
            Scense.move(curPosition);
            Me.checkJump(curPosition,prePosition);
            Me.walk();

            prePosition =  curPosition;
        });

        $window.on('click','.js-start-resume',function(){
            intro.hide();
            containerPage.css({
                height:Scense.computeWidth()
            })
        })

        $window.on('resize',function(){
            containerPage.css({
                height:Scense.computeWidth()
            })
        })

    }
}
Resume.init();