var playMusic=()=>{
    var music=document.getElementById('music_bgr');
    music.play();
};
var stopMusic=()=>{
    var music=document.getElementById('music_bgr');
    music.pause();
};
$(document).ready(function(){
    $('#yes').click(()=>{
        playMusic();
        $('#suggest').css({'display':'none'});
    });
    $('#no').click(()=>{
        $('#suggest').css({'display':'none'});
    });
    $('#logo_page').click(()=>{
       stopMusic();
    });
    $(window).scroll(()=>{
        var pos=$(this).scrollTop();
        if(pos>160){
            $('#controls').addClass('permanentNav');
        }else {$('#controls').removeClass('permanentNav')};
        if(pos){
            $('#back-top').fadeIn();
        }else{
            $('#back-top').fadeOut();
        };
   });
   $('#back-top').click(()=>{
        $('html,body').animate({scrollTop:0},'slow');
   });
});
AOS.init();
