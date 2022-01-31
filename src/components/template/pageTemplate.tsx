import bookDetails from "../../classes/bookClass";
import Fotter from "../organisms/fotter";
import NavBar from "../organisms/navbar";

function Page(props:{home?:JSX.Element,setBooks:(category:string)=>void}){
    return(
        <div>
            <NavBar setBooks={props.setBooks}/>
            {props.home}
            <Fotter />
        </div>
    );
}


export default Page