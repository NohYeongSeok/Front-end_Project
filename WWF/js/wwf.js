$(document).ready(function(){
    /* Slider */
    $('.slide_gallery').bxSlider({
        auto: 'true',
        speed: 500,
        pause: 5000,
        mode: 'horizontal',
        pager: 'true',
        slideWidth: 3000,
        // autoControls: true
    });

    /* News Contents */
    // if($('#news_title_check_fst').is(":checked")==true){
    //     $('.news_content').stop().hide();
    //     $('#news_content_fst').show();
    //     console.log("1 체크");
    // }else if($('#news_title_check_snd').is(":checked")==true){
    //     $('.news_content').stop().hide();
    //     $('#news_content_snd').show();
    //     console.log("2 체크");
    // }else if($('#news_title_check_trd').is(":checked")==true){
    //     $('.news_content').stop().hide();
    //     $('#news_content_trd').show();
    //     console.log("3 체크");
    // }
    
    $('.news_content').hide();
    $('#news_content_fst').stop().show();

    $('#news_title_check_fst').on('click', function(){
        $('.news_content').hide();
        $('#news_content_fst').stop().show();
    })
    $('#news_title_check_snd').on('click', function(){
        $('.news_content').hide();
        $('#news_content_snd').stop().show();
    })
    $('#news_title_check_trd').on('click', function(){
        $('.news_content').hide();
        $('#news_content_trd').stop().show();
    })
    
    const sa = 100;
    $(window).scroll(function(){
    const num = $(window).scrollTop();
    if(num>sa){
        $('.top_button').stop().fadeIn();
    }else{
        $('.top_button').stop().fadeOut();
    }
});
});

/* News */
function checkOnlyOne(element) {
    const checkboxes = document.getElementsByName("news_title_check");
    checkboxes.forEach((cb) => {
        cb.checked = false;
    })
    element.checked = true;
}

