(function(module) {

  var repoView = {};
  var repoCompiler = Handlebars.compile($('#skills-template').text());

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withAttribute('name')
      .map(repoCompiler)
    );
  };

  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;

})(window);
