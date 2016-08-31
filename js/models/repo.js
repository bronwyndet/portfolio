(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/bronwyndet/repos' +
        '?per_page=5' +
        '&sort=updated',
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data) {
        reposObj.allRepos = data;
        console.log(reposObj.allRepos);
        callback();
      }
    });
  };

  reposObj.withAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;

})(window);
