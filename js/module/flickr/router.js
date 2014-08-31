define(
['backbone', './view/index', 'module/shared/route-switch'],

function (Backbone, IndexView, routeSwitch) {
  var Router = Backbone.Router.extend({
    routes: {
      'flickr': 'index'
    },

    index: function () {
      routeSwitch(IndexView);
    }
  });

  return Router;
}
);
