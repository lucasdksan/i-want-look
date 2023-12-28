import { useEffect, useState } from "react";
import { decoder_product_list } from "../../libs/decoder_product_list";
import { handle_get_product } from "./libs/handle_get_product";
import DescriptionBlock from "../DescriptionBlock";
import ProductLook from "../ProductLook";

export default function IWantLookBody({ iWantLookData, VtexFlexRowDescription, VtexFlexRowProducts }) {
    const [data, setData] = useState(decoder_product_list(iWantLookData.product_list));
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        if(data.length !== 0) data.forEach(productId => handle_get_product(productId, setProductList));
    }, []);

    if(productList.length === 0) return(<div>Loading...</div>);

    return (
        <>
            <VtexFlexRowDescription>
                <DescriptionBlock description={iWantLookData.description} productList={productList} />
            </VtexFlexRowDescription>
            <VtexFlexRowProducts>
                { productList.map((product, index)=> <ProductLook product={product} key={index} />) }
            </VtexFlexRowProducts>
        </>
    );
}