import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Stack, Box, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'

// {
//   "kind": "youtube#videoListResponse",
//   "items": [
//       {
//           "kind": "youtube#video",
//           "id": "fRybiRruJWY",
//           "snippet": {
//               "publishedAt": "2024-08-09T06:58:58Z",
//               "channelId": "UCckHqySbfy5FcPP6MD_S-Yg",
//               "title": "Houthis On Rampage: Rare RPG Blast, Missile Strike & Drone | 3 New Attacks On Ships Near Yemen",
//               "description": "48 hours after targeting Contship Ono, U.S. destroyers USS Laboon and Cole in Red Sea and Gulf of Aden, the Houthi rebels mounted fresh attacks on commercial ships. Maritime agencies UKMTO and Ambrey reported that ships were targeted with missiles and drones and a rare RPG blast. They said that men on two smaller crafts launched RPG attack on a vessel which reportedly escaped unhurt. Watch for more details.\n\n#houthirebels #ismailhaniyeh #yemen #sanaa #redsea #gulfofaden #missiles #drones #uav #rpg #rare #ship #vessels #usa #Uscentcom #unitedstates #joebiden #washington #ismailhaniyehassassinated #benjaminnetanyahu #telaviv #iran #tehran #ayatollahalikhamenei #masoudpezeshkian #warning #revenge #middleeast #israelhamaswar #gaza #Palestine #Mokha #hodeidah #babelmandabstrait\n\nSubscribe to The Times of India's YouTube channel: http://goo.gl/WgIatu\nFor daily news & updates and exclusive stories, follow the Times of India\n\nFacebook:\nhttps://www.facebook.com/TimesofIndia\nInstagram:\nhttps://www.instagram.com/timesofindia/\nDownload the app: http://toi.in/3SLUCa80\nFollow the TOI WhatsApp channel: https://bit.ly/3RYl0J9\n\nFollow TOI+ for well-researched and in-depth news and analysis\n\nFacebook:\nhttps://www.facebook.com/timesofindiaplus\nTwitter:\nhttps://twitter.com/TOIPlus\nInstagram:\nhttps://www.instagram.com/toi_plus/",
//               "thumbnails": {
//                   "default": {
//                       "url": "https://i.ytimg.com/vi/fRybiRruJWY/default.jpg",
//                       "width": 120,
//                       "height": 90
//                   },
//                   "medium": {
//                       "url": "https://i.ytimg.com/vi/fRybiRruJWY/mqdefault.jpg",
//                       "width": 320,
//                       "height": 180
//                   },
//                   "high": {
//                       "url": "https://i.ytimg.com/vi/fRybiRruJWY/hqdefault.jpg",
//                       "width": 480,
//                       "height": 360
//                   },
//                   "standard": {
//                       "url": "https://i.ytimg.com/vi/fRybiRruJWY/sddefault.jpg",
//                       "width": 640,
//                       "height": 480
//                   },
//                   "maxres": {
//                       "url": "https://i.ytimg.com/vi/fRybiRruJWY/maxresdefault.jpg",
//                       "width": 1280,
//                       "height": 720
//                   }
//               },
//               "channelTitle": "Times Of India",
//               "tags": [
//                   "times of india",
//                   "toi",
//                   "latest news",
//                   "news",
//                   "news today",
//                   "latest news today",
//                   "trending news",
//                   "viral news",
//                   "viral video",
//                   "times news",
//                   "english news",
//                   "live news",
//                   "houthi rebels",
//                   "houthis",
//                   "yahya saree",
//                   "sanaa",
//                   "yemen",
//                   "mokha",
//                   "hodeidah",
//                   "red sea",
//                   "gulf of aden",
//                   "bab al-mandab strait",
//                   "iran",
//                   "tehran",
//                   "ayatollah ali khamenei",
//                   "masoud pezeshkian",
//                   "irgc",
//                   "israel hamas war",
//                   "gaza",
//                   "palestine",
//                   "benjamin netanyahu",
//                   "tel aviv",
//                   "middle east",
//                   "revenge",
//                   "warning",
//                   "ismail haniyeh",
//                   "assassination"
//               ],
//               "categoryId": "25",
//               "liveBroadcastContent": "none",
//               "defaultLanguage": "en",
//               "localized": {
//                   "title": "Houthis On Rampage: Rare RPG Blast, Missile Strike & Drone | 3 New Attacks On Ships Near Yemen",
//                   "description": "48 hours after targeting Contship Ono, U.S. destroyers USS Laboon and Cole in Red Sea and Gulf of Aden, the Houthi rebels mounted fresh attacks on commercial ships. Maritime agencies UKMTO and Ambrey reported that ships were targeted with missiles and drones and a rare RPG blast. They said that men on two smaller crafts launched RPG attack on a vessel which reportedly escaped unhurt. Watch for more details.\n\n#houthirebels #ismailhaniyeh #yemen #sanaa #redsea #gulfofaden #missiles #drones #uav #rpg #rare #ship #vessels #usa #Uscentcom #unitedstates #joebiden #washington #ismailhaniyehassassinated #benjaminnetanyahu #telaviv #iran #tehran #ayatollahalikhamenei #masoudpezeshkian #warning #revenge #middleeast #israelhamaswar #gaza #Palestine #Mokha #hodeidah #babelmandabstrait\n\nSubscribe to The Times of India's YouTube channel: http://goo.gl/WgIatu\nFor daily news & updates and exclusive stories, follow the Times of India\n\nFacebook:\nhttps://www.facebook.com/TimesofIndia\nInstagram:\nhttps://www.instagram.com/timesofindia/\nDownload the app: http://toi.in/3SLUCa80\nFollow the TOI WhatsApp channel: https://bit.ly/3RYl0J9\n\nFollow TOI+ for well-researched and in-depth news and analysis\n\nFacebook:\nhttps://www.facebook.com/timesofindiaplus\nTwitter:\nhttps://twitter.com/TOIPlus\nInstagram:\nhttps://www.instagram.com/toi_plus/"
//               },
//               "defaultAudioLanguage": "en"
//           },
//           "contentDetails": {
//               "duration": "PT4M10S",
//               "dimension": "2d",
//               "definition": "hd",
//               "caption": "false",
//               "licensedContent": true,
//               "contentRating": {},
//               "projection": "rectangular"
//           },
//           "statistics": {
//               "viewCount": "95554",
//               "likeCount": "1405",
//               "favoriteCount": "0",
//               "commentCount": "111"
//           }
//       }
//   ],
//   "pageInfo": {
//       "totalResults": 1,
//       "resultsPerPage": 1
//   }
// }


const VideoDetail = () => {
  const [ videoDetail, setVideoDetail] = useState(null)
  const [ videos,setVideos ] =useState(null)
  const { id } = useParams();

  useEffect(()=>{
    const fetchURL = async() => {
      const data = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      setVideoDetail(data?.items[0])

      const relatedVideo = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      setVideos(relatedVideo.items)
    }
    fetchURL()
  },[id])

  console.log(videoDetail);

  if (!videoDetail?.snippet) {
    return <div>Loading....</div>
  }

  
  const { snippet: {title,channelId, channelTitle }, statistics:{viewCount, likeCount} } = videoDetail;

  console.log(viewCount,likeCount);
  
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs:'column', md: 'row' }}>
          <Box flex={1}>
            <Box sx={{ width:'100%',position:'sticky', top:'86px' }}>
              <ReactPlayer url={`https:://www.youtube.com/watch?v=${id}`}
              className="react-player" controls />
              <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
                {title}
              </Typography>
              <Stack direction="row" justifyContent="space-between" sx={{color:'#fff' }} py={1} px={2}>
                  <Link to={`/channel/${channelId}`}>
                    <Typography variant={{ sm: 'subtitle1',md:'h6'}} sx={{color:'white' }}>
                        {channelTitle}
                        <CheckCircle sx={{ fontSize:'12px', color:'gray', ml:'5px' }} />
                    </Typography>
                  </Link>
                  <Stack direction="row" gap='20px' alignItems='center'>
                    <Typography variant='body1' sx={{ opacity:0.7 }}>
                        {/* 转换播放数 */}
                        {parseInt(viewCount).toLocaleString()} views
                    </Typography>
                    <Typography variant='body1' sx={{ opacity:0.7 }}>
                        {parseInt(likeCount).toLocaleString()} likes
                    </Typography>
                  </Stack>
              </Stack>
            </Box>
          </Box>

          <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
            <Videos videos={videos} direction="column" />
          </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetail