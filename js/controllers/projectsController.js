'use strict';

(function(module) {
  var projectsController = {};

  projectsController.reveal = function() {
    $('#projects').show();
    $('#skills').hide();
    $('#profile').hide();
    $('#interests').hide();
    $('#experience').hide();
  };

  module.projectsController = projectsController;
})(window);
