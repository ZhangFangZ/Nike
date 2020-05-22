$(function(){
	// 搜索框效果
	$(".sea-con input").focus(function(){
		$(this).parent().addClass("sec-width")
	})
	$(".sea-con input").blur(function(){
		$(this).parent().removeClass("sec-width")
	})
	
	// 移动端导航
	$(".nav-show").click(function(){
		$(".nav-div").addClass("dshow").children(".nav-ul").animate({"right":0},300)
	})
	$(".nav-div").click(function(){
		$(this).removeClass("dshow").children(".nav-ul").animate({"right":-300},300)
	})
	$(".nav-ul").click(function(e){
		e.stopPropagation();
	})
	
	// 底部点击
	$(".litwo>p").click(function(){
		$(this).toggleClass("pshow").siblings("ul").toggleClass("ulshow").parent().siblings(".litwo").children("p").removeClass("pshow").siblings("ul").removeClass("ulshow");
	})
})