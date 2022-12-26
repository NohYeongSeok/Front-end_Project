$(document).ready(function(){
    // 메뉴토글
    $('.menu_toggle_btn').click(function(){
        $('.gnb').stop().slideToggle();
    });
    
    // 슬라이드갤러리
    $('.slide_gallery').bxSlider({
        auto:true,
        pager:true,
        touchEnabled : (navigator.maxTouchPoints > 0)
    });

    // 배달지역 검색
    $('#search').keyup(function(){
        $('.deliveryArea').children().css('display','none');
        var search_text = $(this).val();
        $('.deliveryArea li:contains('+search_text+')').show();
        console.log(search_text);
    });
});