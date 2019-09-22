var $bannerUl=$('#imagecontent ul'),$bannerLi=$('#imagecontent ul li');
//动态获取ul的宽度
$bannerUl.css('width',$bannerLi.width()*$bannerLi.length);
setInterval(function(){
    $bannerUl.animate({
        'marginLeft':-$bannerLi.width()
    },500,function(){
        $(this).animate(
            {'marginLeft':0},0)
            .find('li').eq(0).appendTo($(this));
        //把每次移动后的第一个li放到ul的最后面
        /*
        * 由于把第一个li放到ul的最后面，就会把第二个li挤到第一个li的位置，但是我们又需要显示第二个li，
        * 所以需要移动回原点，但是这个移动过程不能被看到，所以执行时间是0
        */
    });
},3000);

var $bannerOne=$('#imageleft ul'),$bannerOne_1=$('#imageleft ul li');
//动态获取ul的宽度
$bannerOne.css('width',$bannerOne_1.width()*$bannerOne_1.length);
setInterval(function(){
    $bannerOne.animate({
        'marginLeft':-$bannerOne_1.width()
    },500,function(){
        $(this).animate({'marginLeft':0},0)
            .find('li').eq(0).appendTo($(this));
    });
},3000);

var $bannerTwo=$('#imageright ul'),$bannerTwo_1=$('#imageright ul li');
//动态获取ul的宽度
$bannerTwo.css('width',$bannerTwo_1.width()*$bannerTwo_1.length);
setInterval(function(){
    $bannerTwo.animate({
        'marginLeft':-$bannerTwo_1.width()
    },500,function(){
        $(this).animate({'marginLeft':0},0)
            .find('li').eq(0).appendTo($(this));

    });
},3000);


/*人气榜部分*/
$(".hovers").hide();
$(".popularlist").children().first().children(".hovers").show();
$(".list-tit").click(function () {
    $(this).next().slideToggle();
    $(this).parent().siblings().children(".hovers").slideUp();
})