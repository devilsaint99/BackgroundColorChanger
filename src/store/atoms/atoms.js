import { atom } from "recoil";

export const backgroundState = atom({
    key: "backgroundState",
    default: "white"
})

export const colorState = atom({
    key: "colorState",
    default: ["red", "yellow", "black", "purple", "white"]
})