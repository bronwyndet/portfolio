'use strict';

(function(module) {
  var experienceController = {};

  experienceController.reveal = function() {
    $('#experience').show();
    $('#skills').hide();
    $('#projects').hide();
    $('#interests').hide();
    $('#profile').hide();
  };

  module.experienceController = experienceController;
})(window);
