import { useState } from "react";
import { Color } from "./Color";
import { useRecoilValue } from "recoil";
import { colorState } from "../store/atoms/atoms";

export function ColorChanger(){
    const colors = useRecoilValue(colorState)
    return(
        <div style={{
            border: "solid white 0.5px",
            display:"inline-block",
            borderRadius: "10px",
            padding:"0px 10px",
            boxShadow: "0px 0.5px 1px 0px",
            position: "absolute",
            left:"35%",
            bottom:"2%",
            backgroundColor:"white"
        }}>
            {colors.map(color=><Color color={color}></Color>)}
        </div>
    )
}