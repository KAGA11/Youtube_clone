import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'



// {
//   "kind": "youtube#searchResult",
//   "id": {
//       "kind": "youtube#channel",
//       "channelId": "UCV9FxSrPVEX3vjBax04V_uA"
//   },
//   "snippet": {
//       "publishedAt": "2018-06-29T08:11:13Z",
//       "channelId": "UCV9FxSrPVEX3vjBax04V_uA",
//       "title": "Booba Cartoon – New Episodes and Compilations",
//       "description": "This animated cartoon is about Booba, a cute and inquisitive creature, that acts like a five-year-old kid. Booba explores the world ...",
//       "thumbnails": {
//           "default": {
//               "url": "https://yt3.ggpht.com/BZRQFTUdzDQja9FvseSIVIB7wlEhjIPUJJ3vOFvfcVEQgut6hj3wjd5d25ukTuLAGwGbaGI9grk=s88-c-k-c0xffffffff-no-rj-mo"
//           },
//           "medium": {
//               "url": "https://yt3.ggpht.com/BZRQFTUdzDQja9FvseSIVIB7wlEhjIPUJJ3vOFvfcVEQgut6hj3wjd5d25ukTuLAGwGbaGI9grk=s240-c-k-c0xffffffff-no-rj-mo"
//           },
//           "high": {
//               "url": "https://yt3.ggpht.com/BZRQFTUdzDQja9FvseSIVIB7wlEhjIPUJJ3vOFvfcVEQgut6hj3wjd5d25ukTuLAGwGbaGI9grk=s800-c-k-c0xffffffff-no-rj-mo"
//           }
//       },
//       "channelTitle": "Booba Cartoon – New Episodes and Compilations",
//       "liveBroadcastContent": "none",
//       "publishTime": "2018-06-29T08:11:13Z"
//   }
// }

const ChannelCard = ( { channelDetail,marginTop } ) => {
  console.log(channelDetail,'111');
  

  const channelId = channelDetail?.id?.channelId

  console.log(channelDetail?.snippet?.thumbnails?.high.url);
  
  return (
    <Box
      sx={{
        boxShadow:'none',
        borderRadius:'20px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: { xs:'340px', md: '240px' },
        margin:'auto',
        marginTop,
      }}
    >
      <Link to={`/channel/${channelId}`}>
          <CardContent
            sx={{ display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff' }}
          > 
            <CardMedia
              image={channelDetail?.snippet?.thumbnails?.high.url || demoProfilePicture}
              alt={channelDetail?.snippet?.title}
              sx={{ borderRadius: '50%', height: '180px', width:'180px', mb:2, border: '1px solid #e3e3e3' }}
            >
            </CardMedia>
            <Typography variant='h6'>
              {channelDetail?.snippet?.title}
              <CheckCircle sx={{ fontSize: 14, color:'gray',ml:'5px'}} />
            </Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}Subscribers 
              </Typography>
            )}
          </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard