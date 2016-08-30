'use strict';

(function(module) {
  var profileController = {};

  profileController.reveal = function() {
    $('#profile').show();
    $('#skills').hide();
    $('#interests').hide();
    $('#experience').hide();
    $('#projects').hide();
  };

  module.profileController = profileController;
})(window);
