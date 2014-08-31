define(
[
  'backbone'
],

function (Backbone, FlickrImagesView, FlickrSearchView, Loading) {
  var View = Backbone.View.extend({
    tagName: 'div',
    id: 'view-mod-x',


    close: function () {
      this.el.classList.add('hide');
    },


    initialize: function () {
      var self = this;
      self.el.innerHTML = '<p>Module X</p>';
    },


    render: function () {
      this.el.classList.remove('hide');
    }
  });


  return View;
}
);
