import React, { useEffect, useState, memo } from "react";
import { useRuntime } from "vtex.render-runtime";

import LookBanner from "../LookBanner";

import { class_generator } from "../../libs/class_generator";
import { get_look } from "../../libs/get_look";

const LookSection = memo(({ VtexFlexRowBody, VtexLoadingContent }) => {
    const [look, setLook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [successGetLook, setSuccessGetLook] = useState(false);
    const { deviceInfo: { isMobile } } = useRuntime();

    const getData = async (params)=>{
        const params_split = params.split("/");
        const len = params_split.length;
        const result = await get_look(params_split[len-1]);

        console.log(result)
    }   

    useEffect(() => {
        const url = window.location.href;
        const { pathname } = new URL(url);
        
        getData(pathname);
    }, []);

    if (loading) return (VtexLoadingContent ? <VtexLoadingContent/> : <div className={class_generator("vtex-search-section", "look-section--loading")}>Loading...</div>);

    return (
        <VtexFlexRowBody>
            <LookBanner 
                description={look.description} 
                url={isMobile ? look.mobile_image_url : look.desktop_image_url} 
            />
        </VtexFlexRowBody>
    );
})

export default LookSection;