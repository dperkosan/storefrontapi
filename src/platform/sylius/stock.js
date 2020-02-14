import AbstractStockProxy from '../abstract/stock';
import { multiStoreConfig } from './util';

class StockProxy extends AbstractStockProxy {
    constructor (config, req) {
        const SyliusClient = require('./module/index.js').SyliusClient;
        super(config, req)
        this.api = SyliusClient(multiStoreConfig(config.sylius.api, req));
    }

    check (data) {
        return this.api.stock.check(data.sku);
    }
}

module.exports = StockProxy
