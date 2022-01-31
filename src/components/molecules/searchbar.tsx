import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

function SearchBar(){

    return(
        <Input
        placeholder='Search by title or author'
        style={{width:"600px"}}
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          }
        />
    );

}

export default SearchBar