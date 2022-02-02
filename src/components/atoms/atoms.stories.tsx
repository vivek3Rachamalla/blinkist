import React from "react"

import Icons from './icons'
import Logo from "./logo";
import Header from "./myLibraryHeader";
import { CgSandClock } from 'react-icons/cg'

export default {
    title: "atoms"
};


export const logo = ()=> <Logo />

export const header = () => <Header />

export const icon = () => <Icons  icon={<CgSandClock />} 
                                  name="sand clock"
                                  setBooks={()=>console.log("stories icons component")}/>