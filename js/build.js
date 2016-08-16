'use strict';

var entries = [];

function Job (options) {
  this.company = options.company;
  this.role = options.role;
  this.dates = options.dates;
  this.writeup = options.writeup;
};

Job.prototype.toHtml = function() {
  var $newJob = $('.template').clone();
  $newJob.find('h3').text(this.company);
  $newJob.find('h4').text(this.role);
  // $newJob.find('h4 span').text(this.dates);
  $newJob.find('p').text(this.writeup);

  $newJob.removeClass('template');

  return $newJob;
};

expEntries.forEach(function(options) {
  entries.push(new Job(options));
});

entries.forEach(function(currentEntry) {
  $('#experience').append(currentEntry.toHtml());
  console.log(currentEntry);
});
