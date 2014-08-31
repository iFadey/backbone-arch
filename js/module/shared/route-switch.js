define(
function (Backbone) {
  var _loadedViews = new Map(),
      currentView = null;

  return function (View) {
    var view = _loadedViews.get(View);

    if (currentView) currentView.close();

    if (!view) {
      view = new View();
      document.querySelector('#content').appendChild(view.el);
    }

    view.render();
    currentView = view;
    _loadedViews.set(View, view);
  };

}
);
