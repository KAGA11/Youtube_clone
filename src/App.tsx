import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Box } from "@mui/material";
import { ThemeProvider, useTheme } from "./ThemeContext";

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed  } from "./components";


const AppContent = () => {
  const { theme } = useTheme()
  return (
    <BrowserRouter>
        {/* todo: 主体颜色 */}
        <Box sx={{ backgroundColor: theme === 'light' ? '#fff' : '#000' }}>
            <Navbar />
            <Routes >
                {/* 首页 */}
                <Route path="/" element={<Feed />}/>
                {/* 视频播放页 */}
                <Route path="/video/:id" element={<VideoDetail/>}/>
                {/* 频道页 */}
                <Route path="/channel/:id" element={<ChannelDetail/>}/>
                {/* 搜索页 */}
                <Route path="/search/:searchTerm"  element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
  )
}


function App() {
  return (
    <>
      <ThemeProvider>
          <AppContent />
      </ThemeProvider>
    </>
  );
}

export default App;
