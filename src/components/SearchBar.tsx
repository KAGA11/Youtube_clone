import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton, Icon } from '@mui/material'
import { Search } from '@mui/icons-material'

// 搜索框UI
const SearchBar = () => {
  const [searchTerm,setSearchTerm] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  } 

  return (
    <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius:'20px',
            border:'1px solid #e3e3e3',
            pl:2,
            boxShadow:'none',
            mr:{ sm : 5}
        }}
    >
       <input 
        className='search-bar'
        placeholder='search...'
        value={searchTerm}
        onChange={handleChange}
       />
        <IconButton type='submit' sx={{ p:'10px', color:'red'  }}>
          <Search />
        </IconButton> 
    </Paper>
  )
}

export default SearchBar