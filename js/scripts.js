$(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var sign = $("#sign").val();
    var interestedIn = $("#interestedIn").val();
    var faveShow = $("#faveShow").val();

    if ( interestedIn === "Male" && faveShow === "Game of Thrones") {
      $(".joffrey").show();
      $(".cersei").hide();
      $(".demogorgon").hide();
      $(".barb").hide();
      $(".guy").hide();
      $(".ina").hide();
    } else if ( interestedIn === "Female" && faveShow === "Game of Thrones") {
      $(".cersei").show();
      $(".demogorgon").hide();
      $(".barb").hide();
      $(".guy").hide();
      $(".ina").hide();
      $(".joffrey").hide();
    } else if ( interestedIn === "Either" && faveShow === "Game of Thrones") {
      $(".cersei").show();
      $(".demogorgon").hide();
      $(".barb").hide();
      $(".guy").hide();
      $(".ina").hide();
      $(".joffrey").hide();
    } else if ( interestedIn === "Male" && faveShow === "Stranger Things") {
      $(".demogorgon").show();
      $(".cersei").hide();
      $(".barb").hide();
      $(".guy").hide();
      $(".ina").hide();
      $(".joffrey").hide();
    } else if ( interestedIn === "Female" && faveShow === "Stranger Things") {
      $(".barb").show();
      $(".cersei").hide();
      $(".demogorgon").hide();
      $(".guy").hide();
      $(".ina").hide();
      $(".joffrey").hide();
    } else if ( interestedIn === "Either" && faveShow === "Stranger Things") {
      $(".barb").show();
      $(".cersei").hide();
      $(".demogorgon").hide();
      $(".guy").hide();
      $(".ina").hide();
      $(".joffrey").hide();
    } else if ( interestedIn === "Male" && faveShow === "The Food Network (yes the entire network!)") {
      $(".guy").show();
      $(".cersei").hide();
      $(".barb").hide();
      $(".demogorgon").hide();
      $(".ina").hide();
      $(".joffrey").hide();
    } else if ( interestedIn === "Either" && faveShow === "The Food Network (yes the entire network!)") {
      $(".guy").show();
      $(".cersei").hide();
      $(".barb").hide();
      $(".demogorgon").hide();
      $(".ina").hide();
      $(".joffrey").hide();
    } else if ( interestedIn === "Female" && faveShow === "The Food Network (yes the entire network!)") {
      $(".ina").show();
      $(".cersei").hide();
      $(".barb").hide();
      $(".guy").hide();
      $(".demogorgon").hide();
      $(".joffrey").hide();
    } else if (interestedIn === "" || faveShow === "") {
      alert('Selection must be made in dropdown menu');
      $(".ina").hide();
      $(".cersei").hide();
      $(".barb").hide();
      $(".guy").hide();
      $(".demogorgon").hide();
      $(".joffrey").hide();
      $(".matchMessage").hide();
    }

    if (name === "" || sign === "") {
      alert('Fill out the frickin form!')
      $(".matchMessage").hide();
    }


    $(".name").text(name);
    $(".sign").text(sign);

    $(".matchPhotoAndMessage").show();
  });

});
