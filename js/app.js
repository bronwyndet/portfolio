'use strict';

var navView = {};

$('.category').not('#skills').hide();

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


navView.navigate();
