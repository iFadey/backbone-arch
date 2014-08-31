define(
['backbone', '../shared/events'],

function (Backbone, Events) {
  var View = Backbone.View.extend({
    tagName: 'div',
    className: 'hide',
    id: 'loading',


    initialize: function () {
      this.el.textContent = 'Loading...';
    },


    close: function () {
      this.el.classList.add('hide');
    },


    render: function () {
      this.el.classList.remove('hide');
    }
  });

  return new View();
}
);
