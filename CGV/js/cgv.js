$(document).ready(function(){
    // 특별관 이미지 변경
    $('.specialList li').eq(0).mouseover(function(){
        $('.specialPic img').attr({'src':'./images/special01.png', 'alt':'특별관'});
    });
    $('.specialList li').eq(1).mouseover(function(){
        $('.specialPic img').attr({'src':'./images/special02.png', 'alt':'특별관'});
    });
    $('.specialList li').eq(2).mouseover(function(){
        $('.specialPic img').attr({'src':'./images/special03.png', 'alt':'특별관'});
    });
    $('.specialList li').eq(3).mouseover(function(){
        $('.specialPic img').attr({'src':'./images/special04.png', 'alt':'특별관'});
    });

    // SNB메뉴 감추고 보이기
    $('.snb_wrap').hide();
    $('.gnb>ul>li').on({'mouseenter':function(){
        $('.snb_wrap').slideDown();
    }});
    $('.snb_wrap').mouseleave(function(){
        $('.snb_wrap').slideUp();
    });

    // a태그 비활성화
    $(function(){
        $('a').on("click",function(e){
            e.preventDefault();
        });
    });

    $('.slide_gallery').bxSlider({
        auto:true,
        pager:false,
    });

    // 무비차트, 상영예정작 변환
    $('.chart_list').on("click",function(){
        $('.tobe_list').removeClass('select_chart_menu');
        $('.tobe_list').addClass('nonSelect_chart_menu');
        $('.chart_list').removeClass('nonSelect_chart_menu');
        $('.chart_list').addClass('select_chart_menu');
        $('.tobe_wrap').hide();
        $('.chart_wrap').show();
    });
    $('.tobe_list').on("click",function(){
        $('.chart_list').removeClass('select_chart_menu');
        $('.chart_list').addClass('nonSelect_chart_menu');
        $('.tobe_list').removeClass('nonSelect_chart_menu');
        $('.tobe_list').addClass('select_chart_menu');
        $('.chart_wrap').hide();
        $('.tobe_wrap').show();
    });
});