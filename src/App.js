import {ChatEngine} from 'react-chat-engine'

import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'

import './App.css';

const projectID='ed2880d5-4637-4529-9628-dd921e7ce064'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>

    return (
        <ChatEngine
            height='100vh'
            projectID={projectID}
            userName = {localStorage.getItem('username')}
            userSecret ={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;