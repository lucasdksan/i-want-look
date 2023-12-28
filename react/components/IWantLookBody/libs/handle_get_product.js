import { get_product_id } from "../../../libs/get_product_id";

export const handle_get_product = async (id, setProductList)=>{
    const result = await get_product_id(id);

    setProductList((prevProductList) => {
        const isProductAlreadyAdded = prevProductList.some((product) => product.productId === result.productId);
        return isProductAlreadyAdded ? prevProductList : [...prevProductList, result];
    });
}