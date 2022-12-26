$(document).ready(function(){
    $('.p_link').hover(function(){
        $(this).css({backgroundColor : '#000', color : '#fff'});
    }, function(){
        $(this).css({backgroundColor : '#fff', color : '#000'});
    });

    // 메뉴 토글
    $('.bars').click(function(){
        $('.gnb').stop().slideToggle(200);
    });
});



/* TOP 버튼 */
/* CSS 변경 */
const sa = 200;
const changeCSS = 1200;
const returnCSS = 4000;


$(window).scroll(function(){
    const num = $(window).scrollTop();
    if(num>sa){
        $('.top_btn').stop().fadeIn();
    }else{
        $('.top_btn').stop().fadeOut();
    }

    if(changeCSS<num && num<returnCSS){
        $('#wrap').css({backgroundColor : 'black'});
        $('.projects').css({color : '#fff'});
        $('.p_link').css({backgroundColor : '#fff'});
        $('.p_link_half').css({backgroundColor : '#fff'});
        $('.line_b').css({backgroundColor : '#fff'});
        $('.line_g').css({backgroundColor : '#BDBDBD'});
    }else {
        $('#wrap').css({backgroundColor : 'transparent'});
        $('.projects').css({color : '#222'});
        $('.p_link').css({backgroundColor : 'transparent'});
        $('.p_link_half').css({backgroundColor : 'transparent'});
        $('.line_b').css({backgroundColor : '#222'});
        $('.line_g').css({backgroundColor : '#ddd'});
    }
});

$(window).on('scroll', function(){
    var scrT = $(this).scrollTop();
    console.log('스크롤 탑 값 : ' + scrT);
});



var width = $(window).width();
console.log('위드값 : ' + width);
const tbchangeCSS = 800;
const tbreturnCSS = 5400;

/* 태블릿 미디어쿼리 */
if(width<=1024){
    $(window).scroll(function(){
        const t_num = $(window).scrollTop();
        if(tbchangeCSS<t_num && t_num<tbreturnCSS){
            $('#wrap').css({backgroundColor : 'black'});
            $('.projects').css({color : '#fff'});
            $('.p_link').css({backgroundColor : '#fff'});
            $('.p_link_half').css({backgroundColor : '#fff'});
            $('.line_b').css({backgroundColor : '#fff'});
            $('.line_g').css({backgroundColor : '#BDBDBD'});
        }else {
            $('#wrap').css({backgroundColor : 'transparent'});
            $('.projects').css({color : '#222'});
            $('.p_link').css({backgroundColor : 'transparent'});
            $('.p_link_half').css({backgroundColor : 'transparent'});
            $('.line_b').css({backgroundColor : '#222'});
            $('.line_g').css({backgroundColor : '#ddd'});
        }
    });
};

const mChangeCSS = 900;
const mReturnCSS = 4700;
/* 모바일 미디어쿼리 */
if(width<768){
    $(window).scroll(function(){
        const m_num = $(window).scrollTop();
        if(mChangeCSS<m_num && m_num<mReturnCSS){
            $('#wrap').css({backgroundColor : 'black'});
            $('.projects').css({color : '#fff'});
            $('.p_link').css({backgroundColor : '#fff'});
            $('.p_link_half').css({backgroundColor : '#fff'});
            $('.line_b').css({backgroundColor : '#fff'});
            $('.line_g').css({backgroundColor : '#BDBDBD'});
        }else {
            $('#wrap').css({backgroundColor : 'transparent'});
            $('.projects').css({color : '#222'});
            $('.p_link').css({backgroundColor : 'transparent'});
            $('.p_link_half').css({backgroundColor : 'transparent'});
            $('.line_b').css({backgroundColor : '#222'});
            $('.line_g').css({backgroundColor : '#ddd'});
        }
    });
};


