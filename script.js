// #1 User clicks “accept” or “decline” after intro info 
// #2a Accept <body>  says “Great to have you on the team! Your first murder case is in this folder”

$(".option-1").click(function() {
    $(".question-2").slideDown();
    $(".question-1").hide();

    // #2b Decline <body> says “That's too bad... we have to erase your mind since you know to much now”
});
$(".option-2").click(function() {
    $(".NO").slideDown();
    $(".question-1").hide();
});
// #3 double click to see picture of murder scene and info
// #4 <body> “The picture shows the crime scene and what was left"
// #6 pick which weapon has evidence to help you catch the murder 



$(".accept").dblclick(function() {
    $(".info").show();
    $(".gun").show();
    $(".knife").show();
    $(".body").show();
    $(".question-2").hide();
});
// #7a Gun
// #8a Next slide
$(".gun").dblclick(function() {
    $(".rightchoice").show();
    $(".info").hide();
    $(".knife").hide();
    $(".body").hide();
    $(".print").show();
    $(".sus-1 ").show();
    $(".light ").show();
    $(".L").show();
    $(".print-2").show();

});

// #7b Knife 
// #8b <body> “You get your mind erased for being incapable of picking the right choice”
$(".knife").dblclick(function() {
    $(".knife-1").show();
    $(".info").hide();
    $(".body").hide();
    $(".gun").hide();

});




// #9 pick which of the finger print matches the murder 
// #11 win or lose
// #10a Suspect #1 
// #12b Lose <body> “Oh no you got killed by the real murder… better luck next life”
$(".L").dblclick(function() {
    $(".wrong-L").show();
    $(".rightchoice").hide();
    $(".matching").hide();
    $(".print-2").hide();
    $(".print").hide();
    $(".light").hide();
    $(".gun").hide();

});


// #10b Suspect #2 // #12a Win <body> “Congratulations on solving the case, $10,000 will be sent to you, on to your next job”

$(".light").dblclick(function() {
    $(".L").hide();
    $(".rightchoice").hide();
    $(".end").fadeIn();
    $(".matching").hide();
    $(".print").hide();
    $(".sus-1").hide();
    $(".gun").hide();

});