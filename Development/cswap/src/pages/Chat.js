import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, ChannelList, LoadingIndicator, MessageInput, MessageList, Thread, Window } from 'stream-chat-react';
import { Link } from 'react-router-dom';
import { 
    Center,
    Stack,
    Heading, 
    Text, 
    Button, 
    CheckFlex, 
    Input, 
    InputLeftAddon, 
    InputGroup,
    Select,
    Image,
    Flex,
    VStack,
    HStack,
    Textarea
} from '@chakra-ui/react';

import 'stream-chat-react/dist/css/index.css';

const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY2FsbS1yZXNvbmFuY2UtMSIsImV4cCI6MTY0OTQ2NzQ5M30.kuhoUUxqC1cu8G3STMgXE6eiLCYg1VGCU6_FhO-cbOs';

const filters = { type: 'messaging', members: { $in: ['calm-resonance-1'] } };
const sort = { last_message_at: -1 };

const App = () => {
  const [chatClient, setChatClient] = useState(null);

  useEffect(() => {
    const initChat = async () => {
      const client = StreamChat.getInstance('dz5f4d5kzrue');

      await client.connectUser(
        {
          id: 'calm-resonance-1',
          name: 'calm',
          image: 'https://getstream.io/random_png/?id=calm-resonance-1&name=calm',
        },
        userToken,
      );

      setChatClient(client);
    };

    initChat();
  }, []);

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <Chat client={chatClient} theme='messaging light'>
    <Center>
        <Link to ="/home">
        <Button colorScheme="green">Home</Button>
        </Link>
    </Center>
      <ChannelList filters={filters} sort={sort} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;
