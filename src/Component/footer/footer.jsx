import React ,{useEffect}from 'react'
import './footer.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import video from '../../Assets/View.mp4'
import {FaTripadvisor} from 'react-icons/fa'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
export default function Footer() {

  useEffect(() =>{
    Aos.init({duration:200})
  },[])
  return (
   <section className="footer">
    <div className="videoDiv">
    <video src={video}  muted autoPlay loop type='view/mp4'></video>
    </div>

    <div className="setContent container">
      <div className="contactDIv flex">
        <div  data-aos='fade-up' className="text">
          <small>KEEP IN TOUCH</small>
           <h2>Travel with us</h2>
           <div className="inputDiv flex">
          <input data-aos='fade-up' type="text"  placeholder='Enter Email Address' />
          <button data-aos='fade-up' className="btn flex" type='submit'>
         SEND <FiSend className='icon'/>
          </button>
        </div>
        
        </div>

        
      </div>

      <div className="footerCard flex">
        <div className="footerIntro flex">
          <div className="logoDiv">
            <a href="/" className="logo flex">
              <MdOutlineTravelExplore className='icon'/>
            </a>
          </div>

          <div data-aos='fade-up' className="footerParagraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, itaque odio labore quos reprehenderit assumenda nemo beatae fuga, libero voluptatum earum suscipit. Asperiores perferendis officiis, illo sequi tempore dolorem. Obcaecati!
          </div>

          <div data-aos='fade-up' className="footerSocials">
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>
            <FaTripadvisor className='icon'/>
          </div>
        </div>

        <div className="footerLinks grid">
          <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
            <span className="groupTitle">
              OUR AGENCY
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Services
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Agency
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Tourism
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Payment
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Insurance
            </li>
          </div>

          <div data-aos='fade-up'data-aos-duration='4000' className="linkGroup">
            <span className="groupTitle">
              PARTNERS
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Bookings
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Rentcars
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              hoselWorld
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Trivago
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              TripAdvisor
            </li>
          </div>

          <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
            <span className="groupTitle">
              LAST MINUTE
            </span>

            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              London
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Califonia
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Indonsia
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Europe
            </li>
            <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Oceania
            </li>
          </div>

          
        </div>

        <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED _ YASHASVI 2023</small>
          </div>
      </div>
    </div>
   </section>
  )
}
  