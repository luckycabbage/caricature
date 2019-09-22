
//更新界面的tab切换
$(".dailyList a").on("click",function () {
    $(this).css("color","orange");
    $(this).parent().siblings().children("a").css("color","black");
    var index=$(this).parent().index();
    $(".updateList .update-content").eq(index).show().siblings().hide();
})

//分类界面的tab切换
$(".categoriesTitle ul li").on("click",function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var index=$(this).index();
    $(".categoriesList .switchBox").eq(index).show().siblings().hide();
})
//排行榜的tab切换
$(".rankTitle ul li").on("click",function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
    var index=$(this).index();
    $(".rankListTop .rankList").eq(index).show().siblings().hide();
})
