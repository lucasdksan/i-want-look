export const get_product_id = async (id) => {
    const response = await fetch(`/api/catalog_system/pub/products/variations/${id}`, {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
    });

    const result = await response.json();

    return result;

    // fetch(`/api/catalog_system/pub/products/variations/${id}`, {
    //     method: "GET",
    //     headers: {
    //         "Accept": "application/json",
    //         "Content-Type": "application/json"
    //     },
    // })
    //     .then((response) => {
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         return response.json();
    //     })
    //     .then((result) => {
    //         console.log("Result: ", result);
    //         setProductList(product => {
    //             console.log("Product: ", product);
    //             return [...product, result]
    //         })
    //     })
    //     .catch((error) => {
    //         console.error("Error fetching product details:", error);
    //     });
}