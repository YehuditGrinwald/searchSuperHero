import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {  useState } from 'react';
import { Hero} from '../../HerosContextProvider';
import SearchResults from '../SearchResults/SearchResults';

const BASE_URL = "https://www.superheroapi.com/api.php/10223009321394258/search/"


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(10)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

export default function SearchBar() {
  const [heros, setHeros] = useState<Hero[]>([]);
  const [searchValue, setSearchValue] = useState('');

  function handleSearchInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    setSearchValue(e.target.value);
  }

  const fetchSuperHero = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    try {
      const url = `${BASE_URL}${searchValue}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log('data.results ', data.results,heros)
    
      data.results && setHeros([...heros,...data.results]);
      // setSearchValue('');?
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <form onSubmit={fetchSuperHero}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search for a superhero!  "
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchValue} 
                  onChange={handleSearchInputChange}
                />
              </Search>
            </form>
          </Toolbar>
        </AppBar>
      </Box>
      <div>
        {heros.length ?
          <SearchResults heros={heros} /> :
          <span>The superhero you're looking for is on vacation. keep searching!" </span>
        }
      </div>
    </div>
  );
}
