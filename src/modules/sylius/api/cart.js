import { apiStatus } from 'src/lib/util';
import { Router } from 'express';
const version = require('package.json').version

export default ({ config, db }) => {
  let cartApi = Router();

  /**
   * POST create a cart
   * req.query.token - user token
   */
  cartApi.post('/create', (req, res) => {
    apiStatus(res, { version }, 200);
  });
  return cartApi;
};
