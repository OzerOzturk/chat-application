import { useState } from 'react';
import {sendMessage, isTyping} from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';


const MessageForm =(props) => {
    const [value, setValue] = useState('');
    const {chatId, creds} = props;

    const handleSubmit =(event) => {
        event.preventDefault();

        const text = value.trim();

        if(text.length > 0 ) sendMessage(creds, chatId, {text});

        setValue('');
    }

    const handleChange =(event) => {
        setValue(event.target.value);

        isTyping(props, chatId)
    }

    const handleUpload = (event) => {
       sendMessage(creds, chatId, {files:event.target.files, text:''})     
    }

    
    return (
        <form className='message-form' onSubmit={handleSubmit}>
            <input className='message-input' onChange={handleChange} onSubmit={handleSubmit} value={value}  placeholder='send a message...'/>
        <label htmlFor="upload-button">
            <span className='image-button' >
                <PictureOutlined className='picture-icon' />
            </span>
        </label>
        <input type="file" multiple={false} id="upload-button" onChange={handleUpload} style={{display:'none'}} />
        <button type='submit' className='send-button'>
            <SendOutlined className='send-icon'/>
        </button>
        </form>
    )
}

export default MessageForm;