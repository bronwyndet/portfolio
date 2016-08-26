'use strict';

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

// COMPILING PROJECT OBJECTS WITH HANDLEBARS
ProjectEntry.prototype.toHtml = function() {
  var source = $('#project-template').html();
  var templateRender = Handlebars.compile(source);
  return templateRender(this);
};

// CHECKING FOR LOCAL STORAGE AND USING IF PRESENT, USING JQUERY/AJAX TO RETRIEVE IF NOT PRESENT (AND THEN SET TO LOCAL STORAGE)
// TODO: "delete data parameter per Munir"
ProjectEntry.retrieveAll = function(data) {
  if (localStorage.writeUps) {
    ProjectEntry.loadAll(JSON.parse(localStorage.writeUps));
    ProjectEntry.renderToIndex();
  } else {
    $.getJSON('data/projects.json', function(data, status, XHR){
      localStorage.writeUps = JSON.stringify(data);
      ProjectEntry.loadAll(data);
      ProjectEntry.renderToIndex();
    });
  };
};

//TODO: add functional comment
ProjectEntry.allProjects = function() {
  return ProjectEntry.uniqueEntries.map(function(data){
    return data.project;
  }).reduce(function(acc, cur, index, array) {
    if (acc.indexOf(cur) === -1){
      acc.push(cur);
    };
    return acc;
  },[]);
};


// INSTANTIATING PROJECT OBJECTS AND PUSHING INTO ARRAY
ProjectEntry.loadAll = function (inputData) {
  inputData.forEach(function(opts){
    ProjectEntry.allEntries.push(new ProjectEntry(opts));
  });
};

// APPENDING PROJECTS FROM ARRAY ONTO HTML PAGE
ProjectEntry.renderToIndex = function() {
  ProjectEntry.allEntries.forEach(function(projObject) {
    $('#projblurb').append(projObject.toHtml());
  });
};
