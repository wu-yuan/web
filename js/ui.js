//ui-search 定义
$.fn.UiSearch=function(){
	var ui=$(this);
	$('.ui-search-selected',ui).on('click',function(){
		$('.ui-search-select-list').show();//点击ui-search-selected之后list内容显示出来
		return false;
	});
	$('.ui-search-select-list a',ui).on('click',function(){
		//点击ui-search-select-list之后内容在ui-search-selected显示出来
		$('.ui-search-selected').text($(this).text());
		$('.ui-search-select-list').hide();
		//列表内容隐藏
		return false;
	});

	$('body').on('click',function(){
		$('.ui-search-select-list').hide();
	});//点击Body其他部分列表内容隐藏

}
//ui-slidder
//1.能控制翻页
//2.翻页的时候，进度点 联动进行focus
//3.翻到第三页的时候，下一页回到第一页
//4.进度点，在点击的时候，需要切换到对应的页面
//5.没有（点击 翻页）的时候，自动滚动，
// //6.滚动的时候屏蔽掉其他操作(自动滚动 左右翻页 进度点击)

 //页面的脚本逻辑
 $(function(){
 	$('.ui-search').UiSearch();
 	
 })
