/*
  Videos 组件props
*/
export interface VideosProps {
  videos : Video[],
  direction?: 'row' | 'column'
}

export interface VideoWithVideoId {
    id: {
      videoId: string;
      channelId?: undefined;
    };
    snippet: {
      title: string;
      channelId: string;
      channelTitle: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
    };
  }
  
export interface VideoWithChannelId {
    id: {
      videoId?: undefined;
      channelId: string;
    };
    snippet: {
      title: string;
      channelId: string;
      channelTitle: string;
      thumbnails: {
        high: {
          url: string;
        };
      };
    };
  }
  
export type Video = VideoWithVideoId | VideoWithChannelId;

/*
  播放时的video
*/
export interface videoDetail {
  snippet:{
    title:string,
    channelId:string,
    channelTitle:string,
    thumbnails?: {
      [key: string]: {
        url: string;
        width?: number;
        height?: number;
      };
    };
  },
  statistics?:{
    viewCount: string, 
    likeCount: string,
    commentCount?: string;
  }
}


/*
  Sidebar props
*/
export interface SidebarProps {
  selectedCategory:string,
  setSelectedCategory:( category:string )=> void;
}



/*
  ChannelDetail 
  子:
     ChannelCard props
*/
export interface ChannelCardProps {
  channelDetail: {
    id : {
      channelId: string
    },
    snippet: {
      title:string,
      thumbnails:{
        high:{
          url:string
        }
      }
    },
    statistics?:{
      subscriberCount : string 
    },
  },
  marginTop?: string | number
}