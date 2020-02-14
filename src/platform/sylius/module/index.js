const RestClient = require('./lib/rest_client').RestClient;
const user = require('./lib/user');
const cart = require('./lib/cart');
const stock = require('./lib/stock');

const SYLIUS_API_VERSION = '1.0.0';

module.exports.SyliusClient = function (options) {
  let instance = {
    addMethods (key, module) {
      let client = RestClient(options);
      if (module) {
        if (this[key])
          this[key] = Object.assign(this[key], module(client));
        else
          this[key] = module(client);
      }
    }
  };

  options.version = SYLIUS_API_VERSION;

  let client = RestClient(options);

  instance.user = user(client);
  instance.cart = cart(client);
  instance.stock = stock(client);

  return instance;
};