(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    $.when(
      $.get('/github.com/users/bronwyndet/repos' +
        '?per_page=5' +
        '&sort=updated')
        .done(function(data) {
          reposObj.allRepos = data;
        })
    ).done(callback);
  };

  reposObj.withAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;

})(window);
