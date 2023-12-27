export const get_look = async (params)=>{
    const response = await fetch(`/api/dataentities/IO/search?_fields=params_user,description,active,product_list,text&_where=params_user=${params} AND active=true`);
    const result = await response.json();

    if(result && result.length > 0) return {
        success: true,
        result
    };

    return {
        success: false,
        result
    };
}