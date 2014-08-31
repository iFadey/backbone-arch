define(
['jquery'],

function ($) {

  var proto = {
    _urlTmpl: 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e60ab9db16f52500ac9d440ff0fc3e1d&tags={{TAGS}}&per_page=50&page={{PAGE}}&format=json&nojsoncallback=1',

    _genImageUrl: function (photos) {
      var len = photos.length,
          photo,
          imageUrl = 'https://farm{{FARM}}.staticflickr.com/{{SERVER}}/{{ID}}_{{SECRET}}_m_d.jpg';

      for (var i = 0; i < len; ++i) {
        photo = photos[i]
        photo.url = imageUrl.replace('{{FARM}}', photo.farm);
        photo.url = photo.url.replace('{{SERVER}}', photo.server);
        photo.url = photo.url.replace('{{ID}}', photo.id);
        photo.url = photo.url.replace('{{SECRET}}', photo.secret);
      }
    },

    search: function (keywords) {
      var self = this;

      if (typeof keywords === 'string' && keywords !== self._keywords) {
        self._keywords = keywords.trim().split(' ').join('+');
        self._page = 1;
      }

      return new Promise(function (resolve) {
        $.getJSON(self._parseUrl(), function (data) {
          var photos = data.photos.photo;
          self._pages = parseInt(data.photos.pages, 10);
          self._genImageUrl(photos);
          resolve(photos);
          self._page++;
        });
      });
    },

    _parseUrl: function () {
      var self = this,
          url = this._urlTmpl,
          keywords = self._keywords;

      url = url.replace('{{PAGE}}', self._page);
      url = url.replace('{{TAGS}}', keywords ? keywords : '%20');

      return url;
    }
  };


  function create(keywords) {
    var Flickr = Object.create(proto);
    Flickr._page = 1;
    Flickr._photos = [];
    Flickr._keywords = typeof keywords === 'string'
                     ? keywords.trim().split(' ').join('+')
                     : [];
    return Flickr;
  }


  return {
    create: create
  };
}
);
