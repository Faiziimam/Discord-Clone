import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import {Avatar} from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import SidebarChannel from "./SidebarChannel";
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import db, { auth } from './firebase';
function Sidebar() {
    const user=useSelector(selectUser);
    const [channels,setChannels]=useState([]);
    
    useEffect(()=> {
        db.collection("channels").onSnapshot((snapshot)=>
            setChannels(
               snapshot.docs.map((doc)=>({
               id:doc.id,
               channel:doc.data(),
            }))
        )
     );
    },[]);
     const handleAddChannel=()=>{
         const channelName=prompt("Enter New Channel Name");

         if(channelName){
             db.collection("channels").add({
                 channelName:channelName,
             });
         }
     };
    return (
        <div className="sidebar">
        <div className="sidebar-Top">
       <h1>CORDLESS</h1>
       <ExpandMoreIcon />
       </div>
           
        <div className="sidebar-Channel">
         <div className="sidebar_ChannelHeader">
             <div className="sidebar_Header">
             <ExpandMoreIcon />
                <h1>Text Channels</h1>
             </div>
            <AddIcon onClick={handleAddChannel} className="sidebar_addchannel"/>
         </div>
         <div className="sidebar_channelList">
          {channels.map(({id,channel})=>(
            <SidebarChannel 
                key={id}
                id={id}
                channelName={channel.channelName}
            />
          ))}
        </div>
        </div>
 
       <div className="sidebar_voice">
         <SignalCellularAltIcon  
             className="sidebar_voiceIcon"
             fontSize="large"
         />
         <div className="sidebar_voiceInfro">
             <h3>Voice Connected</h3>
              <p>Stream</p>
         </div>
         <div className="sidebar_voiceIcon">
              <InfoIcon />
              <CallIcon />
         </div>
       </div>
           
           <div className="sidebar_profile">
               <Avatar  onClick={()=>auth.signOut()}  src={user.photo}/>
               <div className="sidebar_profileInfo">
                   <h3>{user.displayName}</h3>
                   <p>#{user.uid.substring(0,5)}</p>
               </div>
               <div className="sidebar_profileIcon">
                  <MicIcon />
                  <HeadsetIcon/>
                  <SettingsIcon/>
               </div>
           </div>

        </div>
    )
}

export default Sidebar
