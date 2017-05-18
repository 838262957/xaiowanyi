$(function(){
	$("#top .top6").mouseenter(function(){
		$(".top6 .top6_1").show();
	})
	$("#top .top6").mouseleave(function(){
		$(".top6 .top6_1").hide();
	})
	$("#top .top7").mouseenter(function(){
		$(".top7 .top7_1").show();
	})
	$("#top .top7").mouseleave(function(){
		$(".top7 .top7_1").hide();
	})
	$("#top .top8").mouseenter(function(){
		$(".top8 .top8_1").show();
	})
	$("#top .top8").mouseleave(function(){
		$(".top8 .top8_1").hide();
	})
	$(".top2").mouseenter(function(){
		$(".top1 .top1_1").show();
		
	})
	
	$(".top1_4_1 h1").click(function(){

		$(".top1_1").hide();
	})
	 $(function () {
            var H = $("#top").height();
            $(window).scroll(function () {
                var docSccrollTop = $(document).scrollTop();
                if(docSccrollTop > H){
                    $(".body1").css({"position":"fixed","top":0,"z-index":1,"left":"50%","left":"350px"});
                    // 此时 nav的位置固定，如果不设置 main部分的margin-top的话，将有一部分内容被挡住 nav的高度+开始设置的20
                    $("#body3").css("margin-top",0);
                }else{
                    $(".body1").css({"position":"static"});  /*静态定位*/
                    $("#body3").css("margin-top",0);
                }
            });
        });

})