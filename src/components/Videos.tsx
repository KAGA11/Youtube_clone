import React from 'react'
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './index'

interface Video {
  id:{
    videoId:string,
    channelId: string,
  },
  snippet:any,
  channelDetail : any,
  marginTop?: string | number
}

interface VideosProps {
  videos : Video[],
  direction?: 'row' | 'column'
}

const Videos:React.FC<VideosProps> = ( { videos,direction } ) => {

  if (!videos) {
    return <div>Loading...</div>
  }
    
  return (
   <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos?.map( (item,i) => (
            <Box key={i}>
                {/* itme 会返回视频或者一个作者的channel */}
                {item.id.videoId && <VideoCard video={item} /> }
                {item.id.channelId && <ChannelCard channelDetail={item} /> }
            </Box>

        ) )  }
   </Stack>
  )
}

export default Videos