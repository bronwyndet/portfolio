'use strict';

(function(module) {
  var interestsController = {};

  interestsController.reveal = function() {
    $('#interests').show();
    $('#skills').hide();
    $('#experience').hide();
    $('#projects').hide();
    $('#profile').hide();
  };

  module.interestsController = interestsController;
})(window);
