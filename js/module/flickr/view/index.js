define(
[
  'backbone',
  './flickr-images',
  './flickr-search-form',
  './loading'
],

function (Backbone, FlickrImagesView, FlickrSearchView, Loading) {
  var View = Backbone.View.extend({
    tagName: 'div',
    id: 'view-flickr',


    close: function () {
      this.el.classList.add('hide');
    },


    initialize: function () {
      var self = this;

      self.flickrImagesView = new FlickrImagesView();
      self.flickrSearchView = new FlickrSearchView();

      self.el.appendChild(self.flickrSearchView.el);
      self.el.appendChild(self.flickrImagesView.el);
      self.el.appendChild(Loading.el);
    },


    render: function () {
      var self = this;

      self.flickrSearchView.render();
      self.flickrImagesView.render();

      self.el.classList.remove('hide');
    }
  });


  return View;
}
);
