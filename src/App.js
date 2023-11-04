import { ChatEngine } from 'react-chat-engine';

import  ChatFeed  from './components/ChatFeed';
import './App.css';

const App = () => {
  return (
    <ChatEngine 
       height='100vh'
       projectID="e13ff429-c2ae-4304-bfef-dcd2b9f8a98a"
       userName="Jane"
       userSecret="123123"
       renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps } />}
    />
)}

export default App;
