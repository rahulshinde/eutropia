$(document).ready( function() {
	$(".content").load("trade.html");


    $("#trade").on("click", function() {
        $(".content").load("trade.html");
        $('.section').removeClass('visible');
        $('#trade').addClass('visible');

        //scroll
        $('body,html').animate({scrollTop: 0 ,}, 0);
    });

    $("#id1").on("click", function() {
        $(".content").load("id1.html");
        $('.section').removeClass('visible');
        $('#id1').addClass('visible');

        //scroll
        $('body,html').animate({scrollTop: 0 ,}, 0);
    });

    $("#id2").on("click", function() {
        $(".content").load("id2.html");
        $('.section').removeClass('visible');
        $('#id2').addClass('visible');

        //scroll
        $('body,html').animate({scrollTop: 0 ,}, 0);
    });

    $("#id3").on("click", function() {
        $(".content").load("id3.html");
        $('.section').removeClass('visible');
        $('#id3').addClass('visible');

        //scroll
        $('body,html').animate({scrollTop: 0 ,}, 0);
    });

    $("#id4").on("click", function() {
        $(".content").load("id4.html");
        $('.section').removeClass('visible');
        $('#id4').addClass('visible');

        //scroll
        $('body,html').animate({scrollTop: 0 ,}, 0);
    });

    $("#app1").on("click", function() {
        $(".content").load("app1.html");
        $('.section').removeClass('visible');
        $('#app1').addClass('visible');

        //scroll
        $('body,html').animate({scrollTop: 0 ,}, 0);
    });

    $("#app2").on("click", function() {
        $(".content").load("app2.html");
        $('.section').removeClass('visible');
        $('#app2').addClass('visible');

        //scroll
        $('body,html').animate({scrollTop: 0 ,}, 0);
    });

});