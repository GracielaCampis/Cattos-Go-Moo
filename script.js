$("#button").click(function() {
    $("#cat").show();
    $("#Derp").text("So apparently cats are liquid.... The only reaction I got for this is... [double click the button]");
    $("#Derp").css("color" , "white");
    $("Derp").css("font-family" , "'Indie Flower', cursive");
    $("#Oofie").css("font-size" , "25px");

});
$("#button").dblclick(function() {
    $("#cat").hide();
    $("#meme").show();
    $("#Derp").hide();
    $("#Oofie").text("Yeeeah");
    $("#Oofie").css("color" , "white");
    $("#Oofie").css("font-family" , "'Indie Flower', cursive");
    $("#Oofie").css("font-size" , "25px");
});
$("#meme").hover(function() {
    $("#meme").hide();
    $("#Oofie").hide("Yeeeah");
    $("#But").show();
});
$("#But").hover(function() {
    $("#But").hide ();
    $("#DiduKnow").show ();
});
$("#DiduKnow").click(function() {
$("#Moo").text("That cats go moo... Yes, they really do.");
$("#Moo").css("font-family" , "'Charm', cursive");
$("#Moo").css("color" , "white");
$("#Moo").css("font-size" , "50px");
});
$("#Moo").click(function() {
    $("#Moo").hide();
    $("#DiduKnow").hide();
    $("#Meow").text("And that's the treasure!!!");
    $("#Meow").css("font-family" , "'Charm', cursive");
    $("#Meow").css("font-size" , "70px");
    $("#Meow").css("color" , "white");
});




    