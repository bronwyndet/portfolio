(function(module) {

  var repoView = {};
  var repoCompiler = Handlebars.compile($('#skills-template').text());

  repoView.renderRepos = function() {
    $('#reposkills').empty().append(
      reposObj.withAttribute('name')
      .map(repoCompiler)
    );
  };

  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;

})(window);
