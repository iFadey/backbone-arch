define(
['./router'],

function (Router) {
  var router;

  console.log('Module X...');

  function init() {
    console.log('init mod-x...');
    router = new Router();
  }

  return {
    init: init
  };
}
);
