import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/layout";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);

  const { user } = ChatState();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {user && <SideDrawer />}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chats;
