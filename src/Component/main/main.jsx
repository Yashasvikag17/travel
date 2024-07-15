import React,{useEffect} from 'react'
import './main.css'
import dest from '../../Assets/dest.jpg';
import dest1 from '../../Assets/dest8.jpg';
import dest2 from '../../Assets/dest1.jpg';
import dest3 from '../../Assets/dest2.jpg';
import dest4 from '../../Assets/dest3.jpg';
import dest5 from '../../Assets/dest4.jpg';
import dest6 from '../../Assets/dest5.jpg';
import dest7 from '../../Assets/dest6.jpg';
import dest8 from '../../Assets/dest7.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
export default function Main() {

  const Data = [
    {
id:1,
imgSrc: dest,
destTitle: 'Bora Bora',
location: 'New Zealand',
grade: 'CULTURAL RELAX',
fees: '$700',
description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.'
    },
    {
      id:2,
imgSrc: dest1,
destTitle: 'Machu Picchu',
Location: 'Peru',
grade: 'CULTURAL RELAX',
fees: '$600',
description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
    },
    {
      id:3,
imgSrc: dest2,
destTitle: 'Great Barrier Reef',
location: 'Australia',
grade: 'CULTURAL RELAX',
fees: '$700',
description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place'
    },
    {
      id:4,
      
      imgSrc: dest3,
      destTitle: 'Cappadocia',
      location: 'Turkey',
      grade: 'CULTURAL RELAX',
      fees: '$800',
      description: 'According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities'
    },

    {
      id:5, 
imgSrc: dest4,
destTitle: 'Guanajuato',
location: 'Mexico',
grade: 'CULTURAL RELAX ',
fees: '$1100',
description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
    },

    {
      id:6, 
imgSrc: dest5,
destTitle: 'Cinque Terre',
location: 'Italy',
grade: 'CULTURAL RELAX',
fees: '$840',
description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
    },
    {
      id:7,
imgSrc: dest6,
destTitle: 'Angkor Wat',
location: 'Cambodia',
grade: 'CULTURAL RELAX',
fees: '$790',
description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities'
    },
    {
      id:8,
imgSrc: dest7,
destTitle: 'Taj Mahal',
location: 'India',
grade: 'CULTURAL RELAX',
fees: '$900',
description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities'
    },
    {
      id:9,
      imgSrc: dest8,
      destTitle: 'Bali Island',
      location: 'Indonesia',
      grade: 'CULTURAL RELAX',
      fees: '$500',
      description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
    },
  ]

  useEffect(() =>{
    Aos.init({duration:200})
  },[])
  return (
    <section className="main container section">
      <div className="setTitle">
        <h3 data-aos='fade-up' className="title">
          Most visited destination
        </h3>
      </div>

      <div className="setContent grid">
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => (

          
          <div data-aos='fade-up' key={id} className="singleDestination">
           

            <div className="cardInfo">

            <div className="imageDiv">
              <img src={imgSrc} alt={destTitle} />
            </div>
              <h4 className="destTitles">{destTitle}</h4>
              <span className="continent flex">
                <HiOutlineLocationMarker className="icon1" />
                <span className="name">{location}</span>
              </span>
                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>

                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
