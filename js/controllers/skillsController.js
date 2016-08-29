'use strict';

(function(module) {
  var skillsController = {};

  skillsController.reveal = function() {
    $('#skills').show();
    $('#projects').hide();
    $('#experience').hide();
    $('#interests').hide();
    $('#profile').hide();
  };

  module.skillsController = skillsController;
})(window);
