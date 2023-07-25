import React from "react";
import { ThemeProvider } from 'styled-components';
import ChatBot from "react-simple-chatbot";
const config = {
  botAvatar: "https://i.ibb.co/9vXXTCr/support-agent.png",
  //   floating: true,
};
const theme = {
  background: 'white',
  headerBgColor: '#3330E4 ',
  headerFontSize: '18px',
  botBubbleColor: '#3330E4',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};
function Chatbot() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBot
          headerTitle="CTA Support"
          steps={[
            {
              id: "hello-world",
              message: "Hello World!",
              end: true,
            },
          ]}
          {...config}
        />
      </ThemeProvider>
    </>
  );
}
export default Chatbot;
