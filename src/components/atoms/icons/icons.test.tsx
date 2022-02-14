import { CgSandClock } from "react-icons/cg";
import Icons from "./icons";


export default {
    title: "atoms"
};

export const icon = () => <Icons  icon={<CgSandClock />} 
                                  name="sand clock"
                                  setBooks={()=>console.log("stories icons component")}/>