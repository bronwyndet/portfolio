'use strict';

var entries = [];
var projWriteup = [];
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

// CONSTRUCTOR FUNCTION FOR PROJECTS
function ProjectEntry (opts) {
  this.projName = opts.projName;
  this.projSkills = opts.projSkills;
  this.projDesc = opts.projDesc;
};

// COMPILING PROJECT OBJECTS WITH HANDLEBARS
ProjectEntry.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};


ProjectEntry.retrieveAll = function(data) {
  if (localStorage.writeUps) {
    projEntries.renderToIndex(JSON.parse(localStorage.writeUps));
  } else {
    $.getJSON('data/projects.json', function(data, status, XHR) {
      
    };
  };

};



projEntries.renderToIndex = function(){
  // INSTANTIATING PROJECT OBJECTS AND PUSHING INTO ARRAY
  projEntries.forEach(function(opts) {
    projWriteup.push(new ProjectEntry(opts));
  });

  // APPENDING PROJECTS TO HTML PAGE
  projWriteup.forEach(function(projObject) {
    $('#projblurb').append(projObject.toHtml());
  });
};
