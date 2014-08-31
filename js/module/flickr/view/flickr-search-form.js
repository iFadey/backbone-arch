define(
[
  'backbone',
  '../shared/events',
  './loading'
],

function (Backbone, Events, Loading) {
  var View = Backbone.View.extend({
    tagName: 'form',
    className: 'flickr-form-search',
    template: '<input type="search" placeholder="Search...">',

    events: {
      'keypress [type=search]': 'search'
    },

    search: function (e) {
      if (e.keyCode === 13) {
        Loading.render();
        Events.trigger('flickr:search', e.target.value);
        return false;
      }
    },

    initialize: function () {
      var self = this;
      self.$el.append(self.template);
    }
  });

  return View;
}
);
