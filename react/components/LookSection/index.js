import React, { useEffect, useState, memo } from "react";
import { get_look } from "../../libs/get_look";
import IWantLookBody from "../IWantLookBody";

export default function LookSection({ VtexFlexRowBody, VtexFlexRowDescription, VtexFlexRowProducts }) {
    const [loading, setLoading] = useState(true);
    const [iWantLookData, setIWantLookData] = useState();
    const [successGetLook, setSuccessGetLook] = useState(false);

    const handle_get_looks = async (params)=>{
        const { result, success } = await get_look(params);

        setIWantLookData(result[0]);
        setSuccessGetLook(success);
        setLoading(false);
    }

    useEffect(()=>{
        const url = window.location;
        const pathname = url ? url.pathname : "";
        const pathname_split = pathname.split("/");
        const params = pathname_split[pathname_split.length - 1];

        handle_get_looks(params);
    },[]);

    if(loading) return( <div>Loading...</div> );
    if(!successGetLook) return(<div>Link Inválido !!!</div>);

    return (
        <VtexFlexRowBody>
            <IWantLookBody 
                iWantLookData={iWantLookData} 
                VtexFlexRowDescription={VtexFlexRowDescription} 
                VtexFlexRowProducts={VtexFlexRowProducts} 
            />
        </VtexFlexRowBody>
    );
}