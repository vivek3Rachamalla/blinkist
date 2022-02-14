import SearchBar from "./searchbar";

export default {
    title: "molecules"
};

export const searchbar = <SearchBar onSearch={(text:string)=>console.log("search")}/> 
