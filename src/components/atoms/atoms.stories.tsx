import React from "react"

import Icons from './icons'
import Logo from "./logo";
import SlideButton from "./slideButton";

export default {
    title: "atoms"
};


export const logo = ()=> <Logo />

export const slideButton = ()=> <SlideButton text="Currently reading" type={true}/>