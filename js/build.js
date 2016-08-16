'use strict';

var entries = [];

function Job (options) {
  this.company = options.company;
  this.role = options.role;
  this.dates = options.dates;
  this.writeup = options.writeup;
};

Jobs.prototype.toHtml = function() {
  var $newJob = $('article.templateExp').clone();
  $newJob.find('h3', this.company);
  $newJob.find('h4', this.role);
  $newJob.find('h4 span', this.dates);
  $newJob.find('p', this.writeup);


};
