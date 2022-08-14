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
    });
});
AOS.init();
