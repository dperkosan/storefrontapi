import { StorefrontApiModule, registerExtensions } from 'src/lib/module'
import { StorefrontApiContext, GraphqlConfiguration, ElasticSearchMappings } from 'src/lib/module/types'
import { Router } from 'express'
// import cart from './api/cart';
import resolvers from './graphql/resolvers'
import schema from './graphql/schema'

import path from 'path'
import version from './api/version'
import { loadSchema } from 'src/lib/elastic'

export const SyliusModule: StorefrontApiModule = new StorefrontApiModule({
  key: 'sylius',

  initGraphql: ({ config, db, app }: StorefrontApiContext): GraphqlConfiguration => {
    return {
      resolvers,
      schema,
      hasGraphqlSupport: true
    }
  },

  initApi: ({ config, db, app }: StorefrontApiContext): void => {
    let api = Router();

    // mount the cart resource
    // api.use('/cart', cart({ config, db }));

    // mount the order resource
    api.use('/sayHello', (req, res) => {
      res.end('Hello ' + req.query.name + '!')
    });

    // api router
    app.use('/sylius', api);
  }
})
