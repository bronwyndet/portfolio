'use strict';

var entries = [];
ProjectEntry.allEntries = [];

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
