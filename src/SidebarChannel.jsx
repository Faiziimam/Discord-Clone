import React from 'react'
import { useDispatch } from 'react-redux';
import { setChannelInfo } from './features/appSlice';
import "./sidebarChannel.css";
function SidebarChannel({id, channelName}) {
    const dispatch=useDispatch();

    return (
        <div className="sideChannel" onClick={()=>dispatch (setChannelInfo({
                 channelId:id,
                 channelName:channelName,
            })
         )
       }
     >
            <h4><span className="sidebarChannel_Hash">#</span>{channelName}</h4>
        </div>
    )
}
export default SidebarChannel
