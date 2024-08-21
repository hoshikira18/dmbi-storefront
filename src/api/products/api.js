const { medusa } = require('@/context/config');

export const getProductTags = async (options) => {
    const productTags = await medusa.productTags
        .list(options)
        .then((res) => res.product_tags)
        .catch((err) => {
            console.log(err);
        });
    return productTags;
};

export const getProducts = async (options) => {
    const products = await medusa.products
        .list(options)
        .then((res) => res.products)
        .catch((err) => {
            console.log(err);
        });
    return products;
};
