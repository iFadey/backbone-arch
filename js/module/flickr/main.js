define(
['./router'],

function (Router) {
  var router;

  console.log('main flickr...');

  function init() {
    console.log('init flickr...');
    router = new Router();
  }

  return {
    init: init
  };
}
);
