'use strict';

(function(module) {

  var entries = [];
  ProjectEntry.allEntries = [];

  // CONSTRUCTOR FUNCTION FOR JOB EXPERIENCE OBJECTS TO BE USED FOR RENDING WITH JQUERY TO HTML PAGE
  function Job (options) {
    this.company = options.company;
    this.role = options.role;
    this.dates = options.dates;
    this.writeup = options.writeup;
  };

  // RENDERING JOB EXP OBJECTS WITH JQUERY TO HTML TEMPLATE
  Job.prototype.toHtml = function() {
    var $newJob = $('.template').clone();
    $newJob.find('h3').text(this.company);
    $newJob.find('h4').text(this.role);
    $newJob.find('#dates').text(this.dates);
    $newJob.find('p').text(this.writeup);

    $newJob.removeClass('template');

    return $newJob;
  };

  // INSTANTIATING JOB EXP OBJECTS FROM SOURCE.JS AND PUSHING INTO ARRAY
  expEntries.forEach(function(options) {
    entries.push(new Job(options));
  });

  // APPENDING JQUERY OBJECTS TO HTML PAGE
  entries.forEach(function(currentEntry) {
    $('#experience').append(currentEntry.toHtml());
  });


  // TODO: 1. add additional projects (for filtering)
  //        2. add filtering for project entries

  // CONSTRUCTOR FUNCTION FOR PROJECTS
  function ProjectEntry (opts) {
    this.projName = opts.projName;
    this.projSkills = opts.projSkills;
    this.projDesc = opts.projDesc;
  };

  module.entries = entries;

})(window);
