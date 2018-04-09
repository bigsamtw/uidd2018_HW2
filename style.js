$(document).ready( function(){
    cloud_move(); 
    sun_animate();
    trainSet2_startup();
    train1_animate();
});

function cloud1_left(){
  $(".cloudSet1").animate(
      {left: "-=2%"},
      1000);  
}  
function cloud1_right(){
  $( ".cloudSet1").animate(
      {left: "+=2%"}, 
      1000);  
} 
function cloud_move(){
    $.when(cloud1_left()).then(cloud1_right());
    $.when(cloud2_right()).then(cloud2_left());
    setTimeout(function(){cloud_move()},1000);

}
function cloud2_left(){
  $(".cloudSet2").animate(
      {left: "-=2%"},
      1000);  
}  
function cloud2_right(){
  $( ".cloudSet2").animate(
      {left: "+=2%"}, 
      1000);  
} 

function sun1_faded(){
    $("#sun1").fadeIn(3000);
}
function sun2_faded(){
    $("#sun2").fadeIn(3000);
}
function sun3_faded(){
    $("#sun3").fadeIn(3000);
}
function sun_disappear(){
    $(".sun").fadeOut(3000);
}
function sun_animate(){
    setTimeout(function(){sun3_faded()},3000);
    setTimeout(function(){sun2_faded()},3000);
    setTimeout(function(){sun1_faded()},3000);
    setTimeout(function(){sun_disappear()},3000);
    setTimeout(function(){sun_animate()},3000);
}

function trainSet2_startup(){
    $(".trainSet2").animate({left : "+=100%"},0);
}
function trainSet_move(){
    $(".trainSet1").animate({left : "-=100%"},5000);
    $(".trainSet2").animate({left : "-=100%"},5000);
}
function train1_animate(){
    console.log("1");
    $.when(setTimeout(function(){trainSet_move()},1000)).then(setTimeout(function(){$(".trainSet1").animate({left : "+=200%"},0)},5000));
    setTimeout(function(){train2_animate()},10000);
}
function train2_animate(){
        console.log("2");
    $.when(setTimeout(function(){trainSet_move()},1000)).then(setTimeout(function(){$(".trainSet2").animate({left : "+=200%"},0)},5000));
    setTimeout(function(){train1_animate()},10000);
}