import { useSetRecoilState } from "recoil"
import { backgroundState } from "../store/atoms/atoms"

export function Color({color}){
    const setBackground = useSetRecoilState(backgroundState)


    let text = color == "black"? "white":"black"
    let backgroundColor = color == 'white'? "pink":color    
    return(
        <button onClick={()=>{
            setBackground(color)
            document.body.style.backgroundColor = color
        }} style={{
            backgroundColor:backgroundColor,
            padding:"5px 20px",
            border: "None",
            borderRadius: "10px",
            outline: "none",
            boxShadow: "none",
            color:text,
            margin:"10px"
        }}>
            {color == "white"? "default":color}
        </button>
        
    )
}