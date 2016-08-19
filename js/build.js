'use strict';

var entries = [];
var projWriteup = [];

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
  $newJob.find('#dates').text(this.dates);
  $newJob.find('p').text(this.writeup);

  $newJob.removeClass('template');

  return $newJob;
};

expEntries.forEach(function(options) {
  entries.push(new Job(options));
});

entries.forEach(function(currentEntry) {
  $('#experience').append(currentEntry.toHtml());
});



function ProjectEntry (opts) {
  this.projName = opts.projName;
  this.projSkills = opts.projSkills;
  this.projDesc = opts.projDesc;
}

ProjectEntry.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

projEntries.forEach(function(opts) {
  projWriteup.push(new ProjectEntry(opts));
});

projWriteup.forEach(function(projObject) {
  $('#projblurb').append(projObject.toHtml());
});
