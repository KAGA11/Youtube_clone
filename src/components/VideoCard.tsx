import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'

import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'
import { VideoWithVideoId } from '../types'

interface VideoCardProps {
    video: VideoWithVideoId;
}

const VideoCard: React.FC<VideoCardProps>  = ( { video: { id: { videoId }, snippet } } ) => {
  if (videoId == null) {
    console.log('shou null');
    
  }
  return (
    // 每个视频框大小 移动端适配
   <Card sx={{ width: { md: '290px', xs : '100%' }, boxShadow:'none', borderRadius:'0' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia  
            component="img"
            sx={{ height: 180}}
            alt={snippet?.title}
            image={snippet?.thumbnails?.high?.url} />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height:'106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>

            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight="bold" color="gray">
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 12, color:'gray',ml:'5px'}} />
                </Typography>
            </Link>
        </CardContent>
   </Card>
  )
}

export default VideoCard