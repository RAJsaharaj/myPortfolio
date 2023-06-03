import React from 'react'
import "./Contact.css";
function Contact() {
  return (
    <div>
  <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">Mathabhanga, Coochbehar</div>
          <div class="text-two">Monmohan Para</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+91 9547602503</div>
          <div class="text-two">+91 9851171483</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">Rajsaha03583@gmail.com</div>
          <div class="text-two"></div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div class="input-box message-box">
          <input type="text" placeholder='Enter your message'></input>
        </div>
        <div class="button1">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
    </div>
  )
}

export default Contact