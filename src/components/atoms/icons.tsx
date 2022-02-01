

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
    onMouseLeave={()=>{ onMouseLeave(iconId) }} onClick={()=>props.setBooks()} data-bs-toggle="collapse" data-bs-target="#demo">  
    <a
      style={{ color: "#6D787E" }}>
      {props.icon} {props.name}
    </a>
    </div>
    );
}

export default Icons;