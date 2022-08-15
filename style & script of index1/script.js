var playMusic=()=>{
    var music=document.getElementById('music_bgr');
    music.play();
};
var stopMusic=()=>{
    var music=document.getElementById('music_bgr');
    music.pause();
};
$(document).ready(function(){
    var width=$(window).width();
    if(width<=790){
        alert('Website chưa responsive ở chế độ Desktop site nên khi dùng trên thiết bị nhỏ vui lòng để chế độ bình thường. Cảm ơn ')
    };
    $('#yes').click(()=>{
        playMusic();
        $('#suggest').css({'display':'none'});
        alert('Nếu muốn tắt nhạc thì bấm mũi tên hoặc logo VietNam-Tourism nếu ở thiết bị lớn nhá.Thanks.')
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
        stopMusic();
        $('#suggest').css({'display':'block'});
   });
});
AOS.init();