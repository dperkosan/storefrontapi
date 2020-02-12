module.exports = function (restClient) {
    let module = {};
    const urlPrefix = 'variant-products/';
    let url = urlPrefix;

    function getResponse(data){
        if(data.code === 200){
            return data.result;
        }
        return false;
    }

    module.check = (data) => {
        sku = data.sku;
        url += `by-code/${sku}`;
        return restClient.get(url).then((data)=> {
            if (typeof data.code !== 'undefined' && data.code === 200) {
                // reformat response to match with vuestorefront
                data.result = {
                    "item_id": data.variants[sku].id,
                    "product_id": data.variants[sku].id,
                    "stock_id": 1,
                    "qty": data.variants[sku].qty,
                    "is_in_stock": true,
                    "is_qty_decimal": false,
                    "show_default_notification_message": false,
                    "use_config_min_qty": true,
                    "min_qty": 0,
                    "use_config_min_sale_qty": 1,
                    "min_sale_qty": 1,
                    "use_config_max_sale_qty": true,
                    "max_sale_qty": 10000,
                    "use_config_backorders": true,
                    "backorders": 0,
                    "use_config_notify_stock_qty": true,
                    "notify_stock_qty": 1,
                    "use_config_qty_increments": true,
                    "qty_increments": 0,
                    "use_config_enable_qty_inc": true,
                    "enable_qty_increments": false,
                    "use_config_manage_stock": true,
                    "manage_stock": true,
                    "low_stock_date": null,
                    "is_decimal_divided": false,
                    "stock_status_changed_auto": 0
                };
            }
            return getResponse(data);
        });
    };
    
    return module;
};