import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
import { useTheme } from '../ThemeContext'

const Navbar = () => {
  const { changeTheme } = useTheme()

  return (
   <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={{ position:'sticky', top:0, justifyContent:'space-between' }}
    >

      <Link to="/" style={{ display:'flex', alignItems:'center' }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <div style={{ display:'flex',}}>
        <button onClick={changeTheme}>
          changeTheme
        </button>
        <SearchBar />
      </div>
   </Stack>
  )
}

export default Navbar