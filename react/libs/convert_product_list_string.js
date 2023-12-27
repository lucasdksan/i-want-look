export const convert_product_list_string = (productList)=>{
    if (productList.length === 0) return "";

    const productReference = productList.map((product) => product.productReference);
    const productReferenceString = productReference.join(";");
    return productReferenceString;
}