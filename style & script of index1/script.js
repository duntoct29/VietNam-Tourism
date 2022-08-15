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
   var value_circle = 2;
   $('#darkMode').click(()=>{
            if(value_circle%2==0){
                $('#darkMode').css({
                'text-align': 'right',
                'background-color':'white'
                });
                $('html').css({ 'background-color': 'rgb(25, 24, 24)'});
                $('.main').addClass('main_dark');
                value_circle++;
            }else{
                $('#darkMode').css({
                    'text-align': 'left',
                    'background-color':'black'
                });
                $('html').css({ 'background-color': 'white'});
                $('.main').removeClass('main_dark');
                value_circle++;
             };
   });
});
AOS.init();