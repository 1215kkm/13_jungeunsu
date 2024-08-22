$(window).scroll(function(){
    let scrT = $(this).scrollTop();
    console.log(scrT)
    $('.wave1').css({backgroundPositionX:-scrT})
    $('.wave2').css({backgroundPositionX:scrT})
});


$('.float_menu a').click(function(){
    let contentPosi = $(this).attr('href');
    let contTop = $(contentPosi).offset().top;
    $('html,body').stop().animate({scrollTop:contTop}, 2000)

})

$('.web').mouseover(function(){
    let imgH = $(this).find('img.web_pc').height();
    let scrH = $(this).height();

    $(this).find('img.web_pc').css({top:- imgH + scrH})
}).mouseout(function(){
    $(this).find('img.web_pc').css({top:0})
});


$('.btn .text').click(function(){
    $('.modal').show().css({display:'flex'}).scrollTop(0);

    let imgSrc = $(this).attr('data-imgSrc');
    $('.realview').prepend('<img src="'+imgSrc+'" alt="">')
    console.log(imgSrc);
    $('body').css({height:'100%', overflow:'hidden'})
    scrollTopPos = $(window).scrollTop();

    $('.btn_close2').click(function(){
        $('.modal').hide();
        $('body').css({height:'', overflow:''});
        $(window).scrollTop(scrollTopPos)
        $('.realview *').remove();
        return false
    })
    return false
})

$('.btn_close').click(function(){
    $('.modal').hide();
    $('body').css({height:'', overflow:''});
    $(window).scrollTop(scrollTopPos)
    $('.realview *').remove();
    return false
})