import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

function SearchBar(props:{onSearch:(text:string)=> void}){

    return(
        <Input
        placeholder='Search by title or author'
        style={{width:"600px"}}
        onChange={()=> console.log("h1")}
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          }
        />
    );

}

export default SearchBar;