$(document).ready(function(){var a=0,b=1920/1080;$(".traits").off("click"),$(".traits").on("click",function(){0===a?($("#navigation .menu_mobile").slideDown(),a=1):($("#navigation .menu_mobile").slideUp(),a=0)}),0!==$("#home").length?$(".link_home").addClass("link_active"):0!==$("#blindtest").length?$(".link_blindtest").addClass("link_active"):0!==$("#gallery").length?$(".link_gallery").addClass("link_active"):0!==$("#contact").length?$(".link_contact").addClass("link_active"):0!==$("#calendar").length&&$(".link_calendar").addClass("link_active"),0!==$("#home").length&&$(window).width()<1e3&&$(".device").height($(window).width()/b+50),$(window).resize(function(){0!==$("#home").length&&$(window).width()<1e3&&$(".device").height($(window).width()/b+50)}),$(".choose_perso li").click(function(){var a,b=$(this).attr("data-color");"blue"===b?a="#4a6398":"red"===b?a="#c50a36":"green"===b?a="#1fb22c":"orange"===b&&(a="#da5a00"),$(".bg_perso").hide(),$(".persos").css("border-color",a),$(".choose_perso li").css("border-color",a),$(".bg_"+b).show()}),$(".launch_blindtest").on("click",function(){$(this).hide(),$(".block_blindtest, .block_blindtest .question1").show(),window.current_question=1,window.score=0,$(".picture_blindtest img").attr("src","img/quandunami.jpg"),$(".pause_player").show(),$(".audio_player").trigger("play")});var c=!0;$(".pause_player").on("click",function(){c===!0?($(".audio_player").trigger("pause"),$(this).addClass("play_button"),$(this).removeClass("pause_button"),c=!1):c===!1&&($(".audio_player").trigger("play"),$(this).removeClass("play_button"),$(this).addClass("pause_button"),c=!0)}),$(".block_blindtest .question button").on("click",function(){$(".audio_player").trigger("pause"),$(this).parent().hasClass("question5")?($(".what_answer").show(),$(this).hasClass("good_answer")?($(".what_answer img").attr("src","img/good_answer.png"),$(".block_blindtest .question"+window.current_question+" button").css("background","red"),$(this).css("background","green"),window.score++):($(".what_answer img").attr("src","img/bad_answer.png"),$(".block_blindtest .question"+window.current_question+" button").css("background","red"),$(".block_blindtest .question"+window.current_question+" button.good_answer").css("background","green")),setTimeout(function(){$(".what_answer").hide(),$(".what_answer img").attr("src",""),$(".block_blindtest .question"+window.current_question).hide();var a;0===window.score?a="Tu ferais mieux de rentrer à ta maison.":1===window.score?a="Mouais. Tu as le niveau d'un Chinpokomon au maximum.":2===window.score?a="Pas terrible. Tu peux faire partie des lapins de Pâques, éventuellement.":3===window.score?a="Tu te débrouilles bien ! Je t'appelerai pour diriger la Scientologie.":4===window.score?a="Pas mal ! Mais il serait peut-être temps de sortir au lieu de regarder la télé !":5===window.score&&(a="T'es fier de toi hein ? De toute façon t'as triché."),$(".blindtest_sentence").append(a),$(".result_blindtest .score").text(window.score<2?window.score+" point":window.score+" points"),$(".result_blindtest").show()},2500)):($(".what_answer").show(),$(this).hasClass("good_answer")?($(".what_answer img").attr("src","img/good_answer.png"),$(".block_blindtest .question"+window.current_question+" button").css("background","red"),$(this).css("background","green"),window.score++):($(".what_answer img").attr("src","img/bad_answer.png"),$(".block_blindtest .question"+window.current_question+" button").css("background","red"),$(".block_blindtest .question"+window.current_question+" button.good_answer").css("background","green")),setTimeout(function(){$(".what_answer").hide(),$(".what_answer img").attr("src",""),$(".block_blindtest .question"+window.current_question).hide(),window.current_question++,$(".block_blindtest .question"+window.current_question).show(),2===window.current_question?($(".picture_blindtest img").attr("src","img/dog.jpg"),$(".audio_player").attr("src","music/dog.mp3")):3===window.current_question?($(".picture_blindtest img").attr("src","img/californie.jpg"),$(".audio_player").attr("src","music/californie.mp3")):4===window.current_question?($(".picture_blindtest img").attr("src","img/pokerface.jpg"),$(".audio_player").attr("src","music/pokerface.mp3")):5===window.current_question&&($(".picture_blindtest img").attr("src","img/token.jpg"),$(".audio_player").attr("src","music/token.mp3")),$(".audio_player").trigger("play")},2500))}),$("select[name=filter]").change(function(){$(".gallery li").hide(),"all"===$(this).val()?$(".gallery li").show():$(".gallery li[data-filter="+$(this).val()+"]").show()}),$("select[name=sort]").change(function(){"nb_persos"===$(this).val()&&$(".gallery li:visible").each(function(){$(this).attr("data-id")})}),$(".info_btn_m").on("click",function(){$(this).closest("div").next(".detail_m").slideToggle()}),$(".info_btn_m").on("click",function(){$(this).children("#slide_info_btn").toggleClass("rotate")});var d=0;$("input[name=member]").on("change",function(){"0"==$(this).val()&&($(".coon img").attr("src","img/coonanger.png"),d=1),"1"==$(this).val()&&1===d&&$(".coon img").attr("src","img/coonrassured.png")}),$("form").on("submit",function(a){a.preventDefault();var b=!0,c=$("input[name=name]"),d=($("input[name=secret]"),$("textarea[name=text]")),e=$("input[name=member]");(null===c&&""===c||null===d&&""===d||null===e&&""===e)&&(b=!1),b===!0&&($(".content_form form").hide(),$(".content_form .validation").show())}),$("a.poplight").on("click",function(){var a=$(this).data("rel"),b=$(this).data("width");$("#"+a).fadeIn().css({width:b}).prepend('<a href="#" class="close"><img src="img/close_calendar.png" class="btn_close" title="Close Window" alt="Close" /></a>');var c=($("#"+a).height()+80)/2,d=($("#"+a).width()+80)/2;return $("#"+a).css({"margin-top":-c,"margin-left":-d}),$("body").append('<div id="overlay"></div>'),$("#overlay").css({filter:"alpha(opacity=80)"}).fadeIn(),!1}),$("body").on("click","a.close, #overlay",function(){return $("#overlay , .popup").fadeOut(function(){$("#overlay, a.close").remove()}),!1})});