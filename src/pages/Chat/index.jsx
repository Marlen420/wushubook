import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatLayout from "./ChatLayout.jsx";
import { getDialogs } from "../../api/dialogs.js";
import { setCurrentDialog } from "../../redux/reducers/dialogsSlice.js";
import socket from "../../utils/socket.js";

function Chat() {
  // Constants
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.profile);
  const { dialogs, currentDialog } = useSelector((state) => state.dialogs);

  // States
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Functions
  const openChat = () => {
    setIsOpen(true);
  };
  const closeChat = () => {
    setIsOpen(false);
  };
  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleDialogClick = (id) => dispatch(setCurrentDialog(id));
  // const loadDialog = (id) => dispatch(getDialogMessages(id));
  const handleSendMessage = ({ text, lobby = null }) => {
    console.log(text);
    socket.emit("createMessage", {
      user: user.id,
      text,
      lobby,
    });
  };

  const setTyping = (flag, lobbyId) => socket.emit('typing', {id: user.id, lobbyId, typing: flag})
  

  // Effects
  useEffect(() => {
    dispatch(getDialogs(user.id));
  }, [dispatch, user]);

  return (
    <ChatLayout
        setTyping={setTyping}
      me={user}
      isOpen={isOpen}
      closeChat={closeChat}
      search={search}
      setSearch={handleSearchChange}
      dialogsList={dialogs}
      currentDialog={currentDialog}
      handleDialogClick={handleDialogClick}
      loadDialog={null}
      sendMessage={handleSendMessage}
    />
  );
}

export default Chat;
