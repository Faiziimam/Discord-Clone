import React, { useEffect, useState } from 'react'
import "./chat.css";
import ChatHeader from './ChatHeader';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';
import GifRoundedIcon from '@material-ui/icons/GifRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelID, selectChannelName} from './features/appSlice';
import db from './firebase';
import firebase from "firebase";
function Chat() {
    const user=useSelector(selectUser);
    const channelId=useSelector(selectChannelID);
    const channelName=useSelector(selectChannelName);
    const [input,setInput]=useState(" ");
    const [messages, setMessage]=useState([]);
  

  useEffect(()=>{
     if(channelId){
       db.collection("channels")
       .doc(channelId)
       .collection("messages")
       .orderBy("timestamp","asc")
       .onSnapshot((snapshot)=>
         setMessage(snapshot.docs.map((doc)=>doc.data()))
       );
     }      
  },[channelId])
    
  const sendMessage=e =>{
    e.preventDefault();

    db.collection("channels").doc(channelId).collection("messages").add({
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        message:input,
        user:user,
    })
    setInput(" ");
  }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName}/>

            <div className="chat_messages">
            {messages.map((message)=>(
              <Message 
                 timestamp={message.timestamp}
                 message={message.message}
                 user={message.user}
              />
            ))}
            </div>
            <div className="chat_input">
              <AddCircleRoundedIcon fontSize="large"/>
              <form >
                  <input 
                    value={input} 
                    disabled={!channelId}
                    onChange={(e)=>setInput(e.target.value)}
                    placeholder="Messages"/>
                  <button 
                   disabled={!channelId}
                   type="submit"
                   className="chat_button"
                   onClick={sendMessage}
                   >
                      SEND
                  </button>
              </form>
            
            <div className="chat_inputIcon">
              <CardGiftcardRoundedIcon fontSize="large"/>
              <GifRoundedIcon fontSize="large"/>
              <EmojiEmotionsRoundedIcon fontSize="large"/>

            </div>
            </div>
        </div>
    )
}

export default Chat
