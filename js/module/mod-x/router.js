define(
['backbone', './view/index', 'module/shared/route-switch'],

function (Backbone, IndexView, routeSwitch) {
  var Router = Backbone.Router.extend({
    routes: {
      'mod-x': 'index'
    },

    index: function () {
      routeSwitch(IndexView);
    }
  });

  return Router;
}
);
