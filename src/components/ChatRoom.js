import '../style/chatstyle.css'
import chatdata from '../utils/chatdata';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { styled, alpha } from '@mui/material/styles';
import Search from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  height: 600
};


function WhiteboardModal(props) {
  console.log(props)
return (
  <div>
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>

      </Box>
    </Modal>
  </div>
);
}
  

const ChatRoom = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

    return (
        <>
  <div className="container2">
      <section className="discussions">

        <div className="discussion message-active">
          <div className="photo">
            <div className="online"></div>
          </div>
          <div className="desc-contact">
            <p className="name">John Doe</p>
            <p className="message">Thanks for the help</p>
          </div>
          <div className="timer">12 sec</div>
        </div>
        
        {
            chatdata.map((d,index) => {
                return(
                    <div key={index} className="discussion">
                    <div className="photo" >
                      <div className="online"></div>
                    </div>
                    <div className="desc-contact">
                      <p className="name">{d.name}</p>
                      <p className="message">{d.message}</p>
                    </div>
                    <div className="timer">{d.time}</div>
                  </div>
                )
            })
        }

       
      </section>
      <section className="chat">
        <div className="header-chat">
          <i className="icon fa fa-user-o" aria-hidden="true"></i>
          <p className="name">John Doe</p>
          <i className="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
        </div>
        <div className="messages-chat">
          <div className="message">
            <div className="photo" >
              <div className="online"></div>
            </div>
            <p className="text"> Hi, how are you ? </p>
          </div>
          <div className="message text-only">
            <p className="text"> What are you doing tonight ? Want to go take a drink ?</p>
          </div>
          <p className="time"> 14h58</p>
          <div className="message text-only">
            <div className="response">
              <p className="text"> Hey Megan ! It's been a while 😃</p>
            </div>
          </div>
          <div className="message text-only">
            <div className="response">
              <p className="text"> When can we meet ?</p>
            </div>
          </div>
          <p className="response-time time"> 15h04</p>
          <div className="message">
            <div className="photo" >
              <div className="online"></div>
            </div>
            <p className="text"> 9 pm at the bar if possible 😳</p>
          </div>
          <p className="time"> 15h09</p>
        </div>
        <div className="footer-chat">
          <i className="icon fa fa-smile-o clickable" aria-hidden="true"></i>
          <div className="message-container">
            <input type="text" className="write-message" placeholder="Type your message here" />
            <InsertEmoticonIcon sx={{ color: "#4f6ebd", cursor: "pointer"}} />
          </div>
          <div className="draw-btn" onClick={handleOpen}>
            Draw
            <WhiteboardModal open={open} handleClose={handleClose} />
          </div>
          <div className="send">
            <SendIcon  />
          </div>
        </div>
      </section>
  </div>
        </>
    )
}

export default ChatRoom;