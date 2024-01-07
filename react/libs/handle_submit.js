import { convert_product_list_string } from "./convert_product_list_string";

const send_file_desktop = async (file, myID)=>{
    const formData = new FormData();

    formData.append("value", file);

    const attachmentResponse = await fetch(`/api/dataentities/IO/documents/${myID}/file_desktop/attachments/`, {
        method: "POST",
        headers: {
            "Accept": "application/vnd.vtex.ds.v10+json",
        },
        body: formData
    });

    return attachmentResponse;
}

const send_file_mobile = async (file, myID)=>{
    const formData = new FormData();

    formData.append("value", file);

    const attachmentResponse = await fetch(`/api/dataentities/IO/documents/${myID}/file_mobile/attachments/`, {
        method: "POST",
        headers: {
            "Accept": "application/vnd.vtex.ds.v10+json",
        },
        body: formData
    });

    return attachmentResponse;
}

const submit = async (productListSelected, text, selectedFileDesktop, selectedFileMobile) => {
    const list_formated = convert_product_list_string(productListSelected);
    console.log(selectedFileDesktop, selectedFileMobile)
    const body = {
        active: false,
        description: text,
        params_user: "",
        product_list: list_formated,
        file_desktop: selectedFileDesktop,
        file_mobile: selectedFileMobile
    }

    const response = await fetch("/api/dataentities/IO/documents", {
        method: "POST",
        headers: {
            "Accept": "application/vnd.vtex.ds.v10+json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });

    if (response.ok) {
        const responseData = await response.json();
        console.log(responseData)
        if (selectedFileDesktop && selectedFileMobile) {
            const myID = responseData.Id.replace("IO-", "");
            
            const result_d = await send_file_desktop(selectedFileDesktop, myID);
            const result_m = await send_file_mobile(selectedFileMobile, myID);

            console.log({ result_d, result_m });
        }

        return {
            success: true,
            dataError_validation: {
                errorText: false,
                file_image_d: false,
                file_image_m: false,
                productListSelected: false
            }
        };
    } else {
        return {
            success: false,
            dataError_validation: {
                errorText: false,
                file_image_d: false,
                file_image_m: false,
                productListSelected: false
            }
        }
    }
}

const validataion_data = (productListSelected, text, selectedFileDesktop, selectedFileMobile) => {
    let errorText = false;
    let file_image_d = false;
    let file_image_m = false;
    let productListSelectedValidation = false;

    if (!text || text === "") errorText = true;
    if (!productListSelected || productListSelected.length === 0) productListSelectedValidation = true;
    if (!selectedFileDesktop || !selectedFileDesktop?.type.startsWith("image/")) file_image_d = true;
    if (!selectedFileMobile || !selectedFileMobile?.type.startsWith("image/")) file_image_m = true;

    const success = !(errorText || productListSelectedValidation || file_image_d || file_image_m);

    return {
        success: success,
        dataError_validation: {
            errorText: errorText,
            file_image_d: file_image_d,
            file_image_m: file_image_m,
            productListSelected: productListSelectedValidation
        }
    };
}

export const handle_submit = async (data) => {
    const { productListSelected, text, selectedFileDesktop, selectedFileMobile } = data;
    const data_validation = validataion_data(productListSelected, text, selectedFileDesktop, selectedFileMobile);

    if (!data_validation.success) return data_validation;

    const result = await submit(productListSelected, text, selectedFileDesktop, selectedFileMobile);

    return result;
}