import '../style/chatstyle.css'
import chatdata from '../utils/chatdata';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Search from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';

const ChatRoom = () => {
    return (
        <>
  <div className="container">
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
          <p className="name">Megan Leib</p>
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
          <input type="text" className="write-message" placeholder="Type your message here"></input>
          <i className="icon send fa fa-paper-plane-o clickable" aria-hidden="true"></i>
        </div>
      </section>
  </div>
        </>
    )
}

export default ChatRoom;
  