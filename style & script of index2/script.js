AOS.init();
$(document).ready(function(){
    $(window).scroll(()=>{
        var pos=$(this).scrollTop();
        if(pos>160){
            $('#controls').addClass('permanentNav');
        }else {$('#controls').removeClass('permanentNav')};
    });
});