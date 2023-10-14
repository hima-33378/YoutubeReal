import React from 'react'
import logo from '../images/download.png'
import { Link } from 'react-router-dom';

function YTsidebar() {
  return (
  <>
  <div className='col-md-2 menu'>
    <div className='logodiv' style={{display:'flex'}}> 
    <i class="fa-solid fa-bars"></i>
    <img src={logo} width='160' height='50' alt='Youtube' style={{}}/>
    <span style={{fontSize:'25px',margin:'10px'}}></span>
    </div>
    
    <div className='sidebar'>
      <ul>
      <Link to="/" className='linkmenu'><li><i class="fa-solid fa-home icons"></i>Home</li></Link>
      <Link to="/Shorts" className='linkmenu'><li><i class="fa-solid fa-film icons"></i>Shorts</li></Link>
      <Link to="/Subscriptions" className='linkmenu'> <li><i class="fa-solid fa-briefcase icons"></i>Subscription</li></Link>
        <hr style={{color:'white'}}/>
        <li><i class="fa-solid fa-book icons"></i>Library</li>
        <li><i class="fa-solid fa-history icons"></i>History</li>
        <li><i class="fa-solid fa-play-circle icons"></i>Your Videos</li>
        <li><i class="fa-solid fa-clock icons"></i>Watch Later</li>
        <li><i class="fa-solid fa-thumbs-up icons"></i>Liked Videos</li>
        <hr style={{color:'white'}}/>
        <h4>Explore</h4>
        <li><i class="fa-solid fa-fire icons"></i>Trending</li>
        <li><i class="fa-solid fa-shopping-bag icons"></i>Shopping</li>
        <li><i class="fa-solid fa-music icons"></i>Music</li>
        <li><i class="fa-solid fa-film icons"></i>Movies</li>
        <li><i class="fa-solid fa-signal icons"></i>Live</li>
        <li><i class="fa-solid fa-gamepad icons"></i>Gaming</li>
        <li><i class="fa-solid fa-newspaper icons"></i>News</li>
        <li><i class="fa-solid fa-trophy icons"></i>Sports</li>
        <li><i class="fa-solid fa-lightbulb icons"></i>Learning</li>
        <li><i class="fa-solid fa-credit-card-alt icons"></i>Fashion & Beauty</li>
        <li><i class="fa-solid fa-podcast icons"></i>Podcast</li>
      </ul>
    </div>
  </div>
  
  </>
  )
}
export default  YTsidebar;
