import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatLayout from "./ChatLayout.jsx";
import { getCurrentDialog, getDialogs } from "../../api/dialogs.js";
import { addMessage, setCurrentDialog } from "../../redux/reducers/dialogsSlice.js";
import socket from "../../utils/socket.js";
import { useNavigate } from "react-router";

function Chat() {
  // Constants
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const handleDialogClick = (id) => navigate('/chat/'+id);
  const loadDialog = (id) => dispatch(getCurrentDialog(id));
  const handleSendMessage = ({ text, lobby = null }) => {
    socket.emit("createMessage", {
      user: user.id,
      text,
      lobby,
    });
  };

  useEffect(()=>{
    socket.on('message', (item)=>{
      dispatch(addMessage(item));
    });
    return ()=>socket.off('message');
  }, [socket]);

  const setTyping = (flag, lobbyId) => {
    socket.emit('typing', {userId: user.id, lobbyId, isTyping: flag})
  }
  

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
      loadDialog={loadDialog}
      sendMessage={handleSendMessage}
    />
  );
}

export default Chat;
