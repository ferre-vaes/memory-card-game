import React, { useEffect, useState, useRef } from 'react'
import './Card.css'

const Card = ({imageUrl, id}) => {
  const cardRef = useRef()
  const [init, setInit] = useState(true)

  useEffect(() => {
    cardRef.current.classList.add('toggleCard')
    setTimeout(() => {
      cardRef.current.classList.remove('toggleCard')
      setInit(false)
    }, 6000);
  }, [])
  
  const toggleCard = (e) => {
    e.target.classList.add('flipped')
    const toggledElements = document.getElementsByClassName("flipped");
    if (toggledElements.length <= 2 && !init) { 
      e.target.classList.add('toggleCard')
      checkCards(e)
    }
  }

  const checkCards = (e) => {
    setTimeout(500);
    const flippedElements = document.querySelectorAll(".flipped");
    if(flippedElements.length === 2) {
      if(flippedElements[0].getAttribute('name') === flippedElements[1].getAttribute('name')) { 
        console.log('match');
        flippedElements.forEach((card) => {
          card.classList.remove('flipped')
          card.style.pointerEvents = 'none'
        });
      } else {
        flippedElements.forEach((card) => {
          setTimeout(() => {
            card.classList.remove('flipped')
            card.classList.remove('toggleCard')
          }, 1000);
        });
      }
    }
  }

  return (
    <div className='card' ref={cardRef} onClick={toggleCard} name={id}>
      <img src={imageUrl} alt='card' className='face' />
      <div className='back'></div>
    </div>
  )
}

export default Card
