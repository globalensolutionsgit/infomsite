$(document).ready(function(){



    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
    $('#bt-menu ul li a').click(function(){

       $('#bt-menu ul li a').removeClass('active_mm');
        $(this).addClass('active_mm');
    });
    //text animation in terms page
    $(function () {
        $('.tlt').textillate({
            in: {
                effect: 'fadeInLeft'
            }
        });
    });

    var the_height = $(window).height();
    var the_width = $(window).width();
    var content_height = the_height - 200;
    var p_content_height = the_height - 194;
    var col6width = $('.col-md-6').width();
    // $('.cd-section').css({"height":the_height +"px"});
    // alert(the_height);

    if(the_width > 786){//desktop design
        $('.slide_content').css({"height":content_height +"px"});
        $('.bio_2_left_content,.bio_2_right_content').css({"height":p_content_height-82 +"px"});
        $('.bio_3_left_content,.bio_3_right_content ').css({"height":p_content_height-82 +"px"});
        $('.bio_4_left_content').css({"height":p_content_height-82 +"px"});
        $('.bio_5_left_content').css({"height":p_content_height-82+"px"});
        $('.bio_6_left_content').css({"height":p_content_height-82+"px"});
        $('.terms_and_conditions').css({"height":content_height +"px"});
        $('.services').css({"margin-top":200+"px"});
        $('.products').css({"margin-top":200+"px"});
        $('.products_inner,.services_inner').css({"height":the_height-250+"px"});
        $('.inno_1_left_content').css({"height":p_content_height-82 +"px"});
        $('.inno_2_left_content').css({"height":p_content_height-82 +"px"});
        $('.inno_4_left_content').css({"height":p_content_height-82 +"px","width":col6width+15+"px"});
    }else{//mobile design
        $('.section2').css({"height":$('.bio_2_left_content').height()+158+"px"});
        $('.section3').css({"height":$('.bio_3_left').height()+$('.bio_3_right_content').height()+158+"px"});
        $('.section4').css({"height":$('.bio_4_left_content').height()+$('.bio_4_right_content').height()+158+"px"});
        $('.section5').css({"height":$('.bio_5_left_content').height()+$('.bio_5_right_content').height()+158+"px"});
        $('.section6').css({"height":$('.bio_6_left_content').height()+$('.bio_6_right_content').height()+158+"px"});
        $('.slide_content').css({"height":"100%"});
        $('.bio_2_left_content').css({"height":"100%"});
        $('.bio_3_left_content').css({"height":"100%"});
        $('.bio_4_left_content').css({"height":"100%"});
        $('.bio_4_right_content').css({"height":"100%"});
        $('.bio_5_left_content').css({"height":"100%"});
        $('.bio_6_left_content').css({"height":"100%"});
        $('.terms_and_conditions').css({"height":"100%"});
    }




    $('[data-dialog]').on('click', function (e) {
        var $this = $(e.target);
        $($this.data('dialog')).attr('class', 'popup ' + $this.data('effect'));
    });

    $('.inno_1_left_content_image img').mouseover(function(){
        $('.member-profile_left span').css({"background":"#a4a6a8"});
    });
    $('.inno_1_left_content_image img').mouseout(function(){
        $('.member-profile_left span').css({"background":"#fff"});
    });
    $('.inno_1_right_content_image img').mouseover(function(){
        $('.member-profile_right span').css({"background":"#a4a6a8"});
    });
    $('.inno_1_right_content_image img').mouseout(function(){
        $('.member-profile_right span').css({"background":"#e9e9e9"});
    });
    $('#upload_spe').click(function() {
        $("#atm_busexpect").fadeOut('slow');
        $("#upload_spe").fadeOut('slow');
        $("#upload_show").fadeIn("slow");
        $("#Enter_spe").fadeIn("slow");
        $("#atm_busexpect").val("");$("#msg_file").val("");
        $("#atm_uploadspecific").prop("checked",false);
        $("#atm_enterspecific").prop("checked",false);
        $("#msg_exp").html("");

    });
    $('#Enter_spe').click(function() {
        $("#atm_busexpect").fadeIn('slow');
        $("#upload_spe").fadeIn('slow');
        $("#upload_show").fadeOut("slow");
        $("#Enter_spe").fadeOut("slow");
        $("#atm_dumy").val("");  $("#msg_file").val("");
        $("#atm_uploadspecific").prop("checked",false);
        $("#atm_enterspecific").prop("checked",false);
        $("#msg_exp").html("");

    });
    $('#bt-menu').click(function() {
        $('.intro').removeClass('bt-menu-open');
        $('.intro').addClass('bt-menu-close');
        $('#fp-nav').show();
    });
    $('.enter_menu').click(function() {

        if($('#bt-menu').hasClass("bt-menu-open")){
            $('#bt-menu').removeClass('bt-menu-open');
            $('#bt-menu').addClass('bt-menu-close');
            $('#fp-nav').hide();

        }else if($('#bt-menu').hasClass("bt-menu-close")){
            $('#bt-menu').removeClass('bt-menu-close');
            $('#bt-menu').addClass('bt-menu-open');
            $('#fp-nav').show();
        }else{
            $('#bt-menu').addClass('bt-menu-open');
            $('#fp-nav').hide();
        }
    });
    $('.bt-menu-trigger').click(function(){
        if($('#bt-menu').hasClass("bt-menu-open")){
            $('#fp-nav').hide();

        }else if($('#bt-menu').hasClass("bt-menu-close")){
            $('#fp-nav').show();
        }
    });


    $('#Back').click(function() {
        $("#tab1").fadeIn("slow");
        $("#tab3").fadeOut('slow');
        $("#tab2").fadeOut('slow');
    });
    $('#cons_Back').click(function() {
        $("#tab2").fadeIn("slow");
        $("#tab1").fadeOut('slow');
        $("#tab3").fadeOut('slow');
    });


    $('.overflow_hidden').css({"height":the_height +"px"});

    $(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top-200},"1000");return false})})
    // $(function() {
    //         $(this).bind("contextmenu", function(e) {
    //             e.preventDefault();
    //          });
    //     });
    var active_id = '';
    $('.hex,#popup_window').click(function(e){

        $(window).off('DOMMouseScroll mousewheel');

        $( '.mcusheight' ).bind( 'mousewheel DOMMouseScroll', function ( e ) {

            var scrollTo = null;
            if (e.type == 'mousewheel') {
                scrollTo = (e.originalEvent.wheelDelta * -1);
            }
            else if (e.type == 'DOMMouseScroll') {
                scrollTo = 40 * e.originalEvent.detail;
            }
            if (scrollTo) {
                e.preventDefault();
                $(this).scrollTop(scrollTo + $(this).scrollTop());
            }
        });
        active_id = $('#fullpage').find('.active').attr('id');
        $('#fullpage').find('.active').removeClass('active');
    });
    $('.popup-close').click(function(){
        $('#'+active_id).addClass('active');
    });
    // $('#loader-wrapper').append('');
    $('.error_field').hide();
         $('.submit').on('click', function(){
           var user = $('#username').val();
           var pswd = $('#password').val();
           if(user != ''){
              $('#username').next('.error_field').hide();
             if(pswd == ''){
               $('#password').next('.error_field').show();
             }
             else{
                $('#password').next('.error_field').hide();
                 $('#password').next().next('.error_field').show();

             }
           }
            else{
              $('#username').next('.error_field').show();
            }
           if ($("#content :input").hasClass("error_field")){
             return false;
           }
     });
    //  if($('#left1').hasClass('active')){
     //
    //     $('#tdft').hide();
    //  }
    //  else{
    //      alert('no');
    //      $('#tdft').show();
    //  }
    //  alert($('#left1').attr('class'));


});
//
// $(window).load(function(){
//     $("#preloader").delay(2000).fadeOut("slow");
//     $(".main_wrapper").delay(2000).fadeIn("slow");
//
// });

$(window).resize(function(){
    var the_height = $(window).height();
    var content_height = the_height - 200;
    var p_content_height = the_height - 252;
    $('.slide_content').css({"height":content_height +"px"});
    $('.bio_2_left_content').css({"height":p_content_height +"px"});
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
