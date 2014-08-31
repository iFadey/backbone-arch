define(
[
  'backbone',
  '../collection/flickr-images',
  '../shared/events',
  './loading'
],

function (Backbone, FlickrImages, Events, Loading) {
  var View = Backbone.View.extend({
    tagName: 'div',
    className: 'search-results',
    template: _.template('<article><img src="<%= url %>" alt="<%= title %>" title="<%= title %>"></article>'),

    events: {
      'scroll': 'scroll'
    },

    imagesAdded: function (model) {
      var self = this;
      Loading.close();
      self.$el.append(self.template(model.toJSON()));
    },

    scroll: function (e) {
      var self = this,
          t = e.target;

      if ((t.scrollTop + t.offsetHeight) >= t.scrollHeight) {
        Loading.render();
        self.flickrImages.search();
      }

      return false;
    },

    search: function (keywords) {
      var self = this;
      if (self.keywords !== keywords) {
        self.el.innerHTML = '';
        self.keywords = keywords;
      }
      self.flickrImages.search(keywords);
    },

    initialize: function () {
      var self = this;

      self.flickrImages = new FlickrImages();
      self.listenTo(self.flickrImages, 'add', self.imagesAdded);

      Events.on('flickr:search', self.search.bind(self));
    }
  });

  return View;
}
);
