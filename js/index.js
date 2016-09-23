~(function (deviceW) {
    var desW = 320,
        winW = document.documentElement.clientWidth,
        oMain = document.querySelector('.main_wrap');
    if (winW > 640) {
        oMain.style.width = 640 + 'px';
        oMain.style.margin = '0 auto';
        document.documentElement.style.fontSize = '200px';
        return;
    }
    document.documentElement.style.fontSize = winW / desW * 100 + 'px';
})(640);

var mySwiper = new Swiper(".swiper-container",{
    direction : "vertical",
    loop:true,
    onSlideChangeEnd :function(swiper){
        var slideAry = swiper.slides;
        var trueSlideNum = slideAry.length-2;
        var lastNum =  trueSlideNum+1;
        var curIndex = swiper.activeIndex;
        [].forEach.call(slideAry,function(item,index){
            item.id = null;
            if(curIndex == index){
                switch(curIndex){
                    case 0 :
                        item.id = "page"+trueSlideNum;
                        break;
                    case lastNum :
                        item.id  = "page1";
                        break;
                    default :
                        item.id = "page"+curIndex;
                }
            }
        })
    }
});

//背景音乐添加
/*~(function(){
 var music = document.querySelector(".music");
 var control = document.querySelector('.control');
 var audioMusic = document.querySelector("#audioMusic");
 music.addEventListener("click",function(){
 if(audioMusic.paused){/!*判断是否是停止*!/
 audioMusic.play();
 music.className = "music musicMove";
 control.style.opacity = 1;
 return;
 }
 audioMusic.pause();
 music.className = "music";
 music.style.opacity  = 1;
 control.style.opacity = 0;
 });
 window.setTimeout(function(){
 audioMusic.play();/!*播放*!/
 /!*边播放边缓存，触发事件canplay*!/
 audioMusic.addEventListener("canplay",function(){
 music.className = "music musicMove";
 })
 },1000)

 })()*/
~function () {
    var musicMenu = document.getElementById('musicMenu'),
        musicAudio = document.getElementById('audioMusic'),
        control = document.getElementById('control');
    musicMenu.addEventListener('click', function () {
        if (musicAudio.paused) {
            musicAudio.play();
            control.style.opacity = 1;
            musicMenu.className = 'music musicMove';
            return;
        }
        musicAudio.pause();
        musicMenu.className = 'music';
        musicMenu.style.opacity  = 1;
        control.style.opacity = 0;

    }, false);

    function controlMusic() {
        musicAudio.volume = 0.5;
        musicAudio.play();
        musicAudio.addEventListener('canplay', function () {
            musicMenu.style.display = 'block';
            musicMenu.className = 'music musicMove';
        }, false);
    }

    window.setTimeout(controlMusic, 1000);
}();
