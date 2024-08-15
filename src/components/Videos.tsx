import React from 'react'
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './index'
import { VideoWithVideoId, VideoWithChannelId, Video, VideosProps  } from '../types/index'


const Videos:React.FC<VideosProps> = ( { videos,direction } ) => {

  if (!videos) {
    return <div>Loading...</div>
  }
    
  return (
   <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
        {videos?.map( (item,i) => (
            <Box key={i}>
                {/* itme 会返回视频或者一个作者的channel */}
                {item.id.videoId ? (
                  <VideoCard video={item as VideoWithVideoId} />
                ) : item.id.channelId ? (
                  <ChannelCard channelDetail={item as VideoWithChannelId} />
                ) : null}
            </Box>
        ) )  }
   </Stack>
  )
}

export default Videos