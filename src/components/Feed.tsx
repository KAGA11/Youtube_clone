import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Sidebar,Videos }  from './index'
import { fetchFromAPI } from '../utils/fetchFromAPI'

// Feed 是主页
const Feed:React.FC = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then( data => { setVideos(data.items) } )
  },[selectedCategory])


  return (
    <Stack sx={{ flexDirection: { sx:'column', md:'row' } }}>
        <Box sx={{ height: { sx: "auto", md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
          <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            className='right'
            variant='body2'
            sx={{ mt:1.5, color:'#fff' }}
          >
            Copyright 2024 KAGA11 Media
          </Typography>
        </Box>

        {/* 右主栏 */}
        <Box p={2} sx = {{ overflowY:'auto', height:'90vh', flex:2 }}>
          {/* TITILE */}
          <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color:'white' }}>
            <span style={{ color: '#F31503' }}>{selectedCategory}</span>
          </Typography>

          {/* 视频VIDEOS 列表 */}
          <Videos videos={videos}/>

        </Box>
    </Stack>
  )
}

export default Feed