import { useEffect, useState } from "react";
import { decoder_product_list } from "../../libs/decoder_product_list";
import { search_product } from "../../libs/search_product";

export default function IWantLookBody({ iWantLookData }){
    const product_list = decoder_product_list(iWantLookData.product_list);
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        console.log("Product_list: ", product_list);

        // if(productList.length === 0){
        //     product_list.forEach(element => {
        //         search_product(element, setProductList);
        //     });
        // }

        // console.log("productList: ", productList);
    },[]);

    return(
        <div>

        </div>
    );
}