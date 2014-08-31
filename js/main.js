require.config({
  baseUrl: 'js/lib',
  paths: {
    'module': '../module'
  }
});


require(['backbone'], function (Backbone) {
  var modules = [
    'flickr',
    'mod-x'
  ];

  modules = modules.map(function (mod) {
    return 'module/' + mod + '/main';
  });

  require(modules, function () {
    var mods = [].slice.apply(arguments);

    mods.forEach(function (mod) {
      mod.init();
    });

    Backbone.history.start();
  });

});
