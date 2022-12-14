import React from 'react'
import {ChannelList, useChatContext} from 'stream-chat-react';
import {ChannelSearch, TeamChannelList, TeamChannelPreview} from './';
import Cookies from 'universal-cookie';
import HospitalIcon from '../assets/hospital.png';
import LogoutIcon from '../assets/logout.png';
const SideBar = () => (
  <div className="channel-list__sidebar">
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={HospitalIcon} alt="Hospital" width="30px" />
      </div>
    </div>
    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <img src={LogoutIcon} alt="Logout" width="30px" />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__text">Code Talks</p>
  </div>
);

const ChannelListContainer = () => {
  return (
    <>
      <SideBar/>
      <div className="channel-list__list__wrapper">
        <CompanyHeader/>
        <ChannelSearch/>
        <ChannelList
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List = {(listProps)=>(
          <TeamChannelList
          {...listProps}
          type="team"
          />
        )}
        // another comp Preview
        Preview={(previewProps)=>(
          <TeamChannelPreview
            // spread those props
            {...previewProps}
            type="team"
          />
        )}
        />
        {/* Now for personal chat duplicate */}
        <ChannelList
        filters={{}}
        channelRenderFilterFn={()=>{}}
        List = {(listProps)=>(
          <TeamChannelList
          {...listProps}
          type="messaging"
          />
        )}
        // another comp Preview
        Preview={(previewProps)=>(
          <TeamChannelPreview
            // spread those props
            {...previewProps}
            type="messaging"
          />
        )}
        />
      </div>
    </>
  )
}

export default ChannelListContainer