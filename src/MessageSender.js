import React, { useState } from 'react'
import "./MessageSender.css"
import { Avatar } from '@mui/material'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from "./firebase"
import firebase from 'firebase/compat/app';


export default function MessageSender() {
    
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl
          })
      
        setInput("");
        setImageUrl("");
    }

    return (
        <div className='messageSender'>
            <div className='messageSender__top'>
                <Avatar src = {user.photoURL}/>
                <form>
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="messageSender__input" 
                        placeholder={`What's on your mind ${user.displayName}?`} 
                        type="text"/>
                    <input 
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                        placeholder={"Image URL (Optional)"} 
                        type="text"/>
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>
            <div className='messageSender__bottom'>
                <div className='messageSender__option'>
                    <VideocamIcon style={{color:"grey"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className='messageSender__option'>
                    <PhotoLibraryIcon style={{color:"grey"}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className='messageSender__option'>
                    <InsertEmoticonIcon style={{color:"grey"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
    }
