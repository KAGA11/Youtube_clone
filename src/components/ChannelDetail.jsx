import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const { id } = useParams();
  const [ channelDetail, setChannelDetail ] = useState(null)
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  },[id])

  console.log(channelDetail,videos);
  

  return (
    <Box minHeight="95vh">
      <Box>
        {/* 头部背景图 */}
        <div style={{
            background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex:10,
            height:'300px'
          }}>  
        </div>
        {/* user info  */}
        <ChannelCard channelDetail={channelDetail} marginTop={'-110px'}/>
      </Box>
      
      <Box display='flex' p="2">
          <Box sx={{ mr: {sm : '100px'} }} />
          <Videos videos={videos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail