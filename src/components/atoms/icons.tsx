import Button from "@mui/material/Button/Button";
import IconButton from "@mui/material/IconButton";
import { MouseEvent } from "react";
import { BsBarChart } from 'react-icons/bs';

/*
BiGlobeAlt
RiPsychotherapyLine
RiLeafLine
RiHospitalLine
GrTarget
RiLightbulbFlashLine
BsGraphUp
BsBarChart
RiWallet3Line
RiHeartsLine
BsChatRightDots
<Button variant="text" startIcon={<BsBarChart />}
         onMouseEnter={(e)=>{e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation(); e.preventDefault(); console.log("hello")}}
          onMouseOver={(e)=>{e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();e.preventDefault(); console.log("hello")}}>Personal Development</Button>*/


function Icons(props:{icon:JSX.Element, name:string, iconId:string,setBooks:()=>void}){
  let iconId=props.iconId;
  const onMouseEnter=(id:string)=>{
    var qid="#"+id+" a";
    document.querySelector(qid)?.setAttribute("style","color: #0365F2")
  }

  const onMouseLeave=(id:string)=>{
    var qid="#"+id+" a";
    document.querySelector(qid)?.setAttribute("style","color: #6D787E")
  }

    return(
    <div id={props.iconId} style={{ paddingBottom: "1rem" }} onMouseEnter={()=>{ onMouseEnter(iconId) }}
    onMouseLeave={()=>{ onMouseLeave(iconId) }} onClick={()=>props.setBooks()} >  
    <a
      style={{ color: "#6D787E" }}>
      {props.icon} {props.name}
    </a>
    </div>
    );
}

export default Icons;