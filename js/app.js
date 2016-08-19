'use strict';

var navView = {};

// CLEARING PAGE OF CONTENT EXCEPT SKILLS (EQUATE TO HOME)
$('.category').not('#skills').hide();

// SINGLE-PAGE NAVIGATION FUNCTION USING JQUERY
navView.navigate = function() {
  $('.nav').on('click', function() {
    $('.category').hide();
  });

  $('.nav[data-category="skills"]').on('click', function() {
    $('#skills').show();
  });

  $('.nav[data-category="projects"]').on('click', function() {
    $('#projects').show();
  });

  $('.nav[data-category="experience"]').on('click', function() {
    $('#experience').show();
  });

  $('.nav[data-category="interests"]').on('click', function() {
    $('#interests').show();
  });

  $('.nav[data-category="profile"]').on('click', function() {
    $('#profile').show();
  });
};

// CALLING SINGLE-PAGE NAVIGATION FUNCTION
navView.navigate();
