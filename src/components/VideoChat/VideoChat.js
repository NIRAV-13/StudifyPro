import '../VideoChat/index.css'

const VideoChat = () => {
    return(
<div class="app-container">
   <button class="mode-switch">
       <svg class="sun" fill="none" stroke="#fbb046" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-sun" viewBox="0 0 24 24"><defs/><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
  <svg class="moon" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-moon" viewBox="0 0 24 24"><defs/><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
     </button>
   <div class="app-main">
     <div class="video-call-wrapper">
       <div class="video-participant">
         <div class="participant-actions">
           <button class="btn-mute"></button>
          <button class="btn-camera"></button>
         </div>
         <img height={500} src="https://img.freepik.com/free-photo/selfquarantine-personal-growth-development-concept-smiling-woman-working-with-computer-remote-home-employee-get-ready-online-videocall-interview-learning-new-skills-while-lockdown_197531-30328.jpg?w=996&t=st=1670211072~exp=1670211672~hmac=38bb5397c28c5b7e8bc37e550789d07daaf227a6611d1f2b37f975b894f178bf" alt="participant" />
       </div>
     </div>
   </div>
  <div class="right-side">
    <button class="btn-close-right">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-x-circle" viewBox="0 0 24 24">
        <defs></defs>
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M15 9l-6 6M9 9l6 6"></path>
      </svg>
    </button>
    <div class="chat-container">
      <div class="chat-header">
        <button class="chat-header-button">
         Live Chat
        </button>
      </div>
      <div class="chat-area">
         <div class="message-wrapper">
          <div class="profile-picture">
            <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp" />
          </div>
          <div class="message-content">
            <p class="name">Ryan Patrick</p>
            <div class="message">Helloo Tim</div>
          </div>
        </div>
         <div class="message-wrapper">
          <div class="profile-picture">
            <img src="https://images.unsplash.com/photo-1576110397661-64a019d88a98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80" alt="pp" />
          </div>
          <div class="message-content">
            <p class="name">Tim Russel</p>
            <div class="message">New Homework document⬇️</div>
            <div class="message-file">
            </div>
          </div>
        </div>
         <div class="message-wrapper">
          <div class="profile-picture">
            <img src="https://images.unsplash.com/photo-1581824283135-0666cf353f35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1276&q=80" alt="pp" />
          </div>
          <div class="message-content">
            <p class="name">Ryan Patrick</p>
            <div class="message">I downloaded the file <a class="mention">@timrussel</a></div>
          </div>
        </div>
      </div>
      <div class="chat-typing-area-wrapper">
        <div class="chat-typing-area">
          <input type="text" placeholder="Type your meesage..." class="chat-input" />
          <button class="send-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-send" viewBox="0 0 24 24">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="app-main">
     <div class="video-call-wrapper">
       <div class="video-participant">
         <div class="participant-actions">
         </div>
         <img height={150} src="https://img.freepik.com/free-photo/smiley-little-boy-isolated-pink_23-2148984798.jpg?w=900&t=st=1670211466~exp=1670212066~hmac=be7635032c9d67d648926c64cea1ac1c7df15c260aa4c3ccb26d1764725af527" alt="participant" />
       </div>
     </div>
   </div>
    </div>
  </div>
</div>
    )
}

export default VideoChat;