define(
['backbone', '../service/flickr'],

function (Backbone, Flickr) {
  var Collection = Backbone.Collection.extend({

    initialize: function () {
      var self = this;

      self.flickr = Flickr.create();
    },

    search: function (keywords) {
      var self = this;

      return self.flickr
          .search(keywords)
          .then(function (photos) {
            if (Array.isArray(photos) && photos.length)
              self.add(photos);
          });
    }

  });

  return Collection;
}

);
