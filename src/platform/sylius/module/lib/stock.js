module.exports = function (restClient) {
    let module = {};
    const urlPrefix = 'products/';
    let url = urlPrefix;

    function getResponse(data){
        if(data.code === 200){
            return data.result;
        }
        return false;
    }

    module.check = (sku) => {
        url += `by-slug/${sku}`;
        return restClient.get(url).then((data)=> {
            return getResponse(data);
        });
    };
    
    return module;
};