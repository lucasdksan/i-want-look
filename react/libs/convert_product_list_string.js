export const convert_product_list_string = (productList)=>{
    if (productList.length === 0) return "";

    const productId = productList.map((product) => product.productId);
    const productIdString = productId.join(";");
    return productIdString;
}