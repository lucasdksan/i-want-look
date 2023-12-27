import { convert_product_list_string } from "./convert_product_list_string";

const submit = async (productListSelected, text) => {
    const list_formated = convert_product_list_string(productListSelected);
    const body = {
        active: false,
        text,
        description: "",
        params_user: "",
        product_list: list_formated,
    }

    const response = await fetch("/api/dataentities/IO/documents", {
        method: "POST",
        headers: {
            "Accept": "application/vnd.vtex.ds.v10+json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if(response.ok) {
        return {
            success: true,
            dataError_validation: {
                errorText: false,
                productListSelected: false
            }
        };
    } else {
        return {
            success: false,
            dataError_validation: {
                errorText: false,
                productListSelected: false
            }
        }
    }
}

const validataion_data = (productListSelected, text)=>{
    if ((!text || text === "") && (!productListSelected || productListSelected.length === 0)) {
        return {
            success: false,
            dataError_validation: {
                errorText: true,
                productListSelected: true
            }
        };
    };

    if (!text || text === "") {
        return {
            success: false,
            dataError_validation: {
                errorText: true,
                productListSelected: false
            }
        };
    };

    if (!productListSelected || productListSelected.length === 0) {
        return {
            success: false,
            dataError_validation: {
                errorText: false,
                productListSelected: true
            }
        };
    }
}

export const handle_submit = async (data) => {
    const { productListSelected, text } = data;
    const data_validation = validataion_data(productListSelected, text);

    if(!data_validation.success) return data_validation;

    const result = await submit(productListSelected, text);

    return result;
}