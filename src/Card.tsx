import React, {useState, useEffect} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowsAltH, faArrowUp, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { motion,AnimatePresence } from 'framer-motion';
import Clouds from './CloudsGif.gif';


interface CardProps {
  goingToNextQuestion:any,
    setGoingToNextQuestion:any,
    colour:any,
    setColour:any,
    hoverColour:any,
    setHoverColour:any,
    cardState:any,
    setCardState:any,
    question:any,
    setQuestion:any,
    laptop:any,
    CardStateNotChosen:any,
    header:any,
    subheader:any,
    redOption:any,
    yellowOption:any,
    greenOption:any,
    additional:any,
    setAdditional:any,
}

function Card({
    goingToNextQuestion,
    setGoingToNextQuestion,
    colour,
    setColour,
    hoverColour,
    setHoverColour,
    cardState,
    setCardState,
    question,
    setQuestion,
    laptop,
    CardStateNotChosen,
    header,
    subheader,
    redOption,
    yellowOption,
    greenOption,
    additional,
    setAdditional
}:CardProps) {

    const OptionHasBeenSelected = colour !== 'None' && hoverColour === 'None'

    return (
        <motion.div initial={{x:goingToNextQuestion ?'-150%' : '150%',y:'200%'}} animate={{x:'0%',y:'0%',transition:{duration:1.5,bounce:0.8}}} transition={{duration:1.5}} exit={{x:goingToNextQuestion ? '150%': '-150%',y:'200%'}} className='Card'>
        <div className='Progress-Indicators'>
         <div className='Indicator' style={{opacity:question == 1 ? 1 : 0.25}}/>
          <div className='Indicator' style={{opacity:question == 2 ? 1 : 0.25}} />
          <div className='Indicator' style={{opacity:question == 3 ? 1 : 0.25}}/>

        </div>
        <motion.h1 className='Card-Title'>{header}</motion.h1>
        <motion.h1 className='Card-Subtitle'>{subheader}</motion.h1>
        <div className='Inner-Card'>
        <div className='Traffic-Container'>
          <div className='Traffic-Light'>
            <motion.div onClick={() => {setColour('None');setColour('Green');setHoverColour('None')}} onHoverStart={() => {if (colour !== 'Green') setHoverColour('Green')}} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Green' ? 1 : 0.3}} whileHover={{opacity:1}} className='Green'></motion.div>
            <motion.div onClick={() => {setColour('None');setColour('Yellow');setHoverColour('None')}} onHoverStart={() => {if (colour !== 'Yellow') setHoverColour('Yellow')}} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Yellow' ? 1 : 0.3}} whileHover={{opacity:1}} className='Yellow'></motion.div>
            <motion.div onClick={() => {setColour('None');setColour('Red');setHoverColour('None')}} onHoverStart={() => {if (colour !== 'Red') setHoverColour('Red')}} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Red' ? 1 : 0.3}} whileHover={{opacity:1}} className='Red'></motion.div>
            
          </div>
          

        </div>
        <motion.div layout className='Text-Container'>
          <AnimatePresence>
            {colour == 'None' && 
            <motion.div animate={{opacity:1}} exit={{opacity:0}} className='Text-Top'>
            Please select the option that best aligns with your current perspective
          </motion.div>}
          </AnimatePresence>
          <div className='Text-Middle'>
          <AnimatePresence>
          {(hoverColour == 'None' && colour == 'None') && 
          <motion.div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:'20vh'}} initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} >
            Hover over a light to view an option
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Red' || colour == 'Red') && (hoverColour !== 'Green' && hoverColour !== 'Yellow'))&& 
          <motion.div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:OptionHasBeenSelected ? '20vh ': '30vh'}}  initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%',color:(colour !== 'None' && hoverColour == 'None') ? '#000000a2': 'black',fontSize:(colour === 'None' || hoverColour !== 'None') ? (laptop ? '14px':'20px'): (laptop ? '10px':'14px')}} >
            <motion.h1 style={{color:'red',fontSize:CardStateNotChosen ? (laptop ? '18px':'20px') : (laptop ? '18px':'34px')}}>Red
            {cardState !== 'None' && <FontAwesomeIcon style={{paddingLeft:5}} icon={cardState === 'Improving'
      ? faArrowUp
      : cardState === 'No change'
      ? faArrowsAltH
      : cardState === 'Getting worse'
      ? faArrowDown
      : faArrowUp}/>}
            </motion.h1>
            {redOption}
            
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Yellow' || colour == 'Yellow') && (hoverColour !== 'Red' && hoverColour !== 'Green')) && 
          <motion.div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:OptionHasBeenSelected ? '20vh ': '30vh'}}  initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%',color:(colour !== 'None' && hoverColour == 'None') ? '#000000a2': 'black',fontSize:(colour === 'None' || hoverColour !== 'None') ? (laptop ? '14px':'20px'): (laptop ? '10px':'14px')}} >
            <motion.h1 style={{color:'yellow',fontSize:CardStateNotChosen ? (laptop ? '18px':'20px') : (laptop ? '18px':'34px')}}>Yellow
            {cardState !== 'None' && <FontAwesomeIcon style={{paddingLeft:5}} icon={cardState === 'Improving'
      ? faArrowUp
      : cardState === 'No change'
      ? faArrowsAltH
      : cardState === 'Getting worse'
      ? faArrowDown
      : faArrowUp}/>}
            </motion.h1>
            {yellowOption}
           
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Green' || colour == 'Green') && (hoverColour !== 'Red' && hoverColour !== 'Yellow')) && 
          <motion.div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',height:OptionHasBeenSelected ? '20vh ': '30vh'}}  layout initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%',color:(colour !== 'None' && hoverColour == 'None') ? '#000000a2': 'black',fontSize:(colour === 'None' || hoverColour !== 'None') ? (laptop ? '14px':'20px'): (laptop ? '10px':'14px')}} >
            <motion.h1 style={{color:'green',fontSize:CardStateNotChosen ? (laptop ? '18px':'20px') : (laptop ? '18px':'34px')}}>Green 
              {cardState !== 'None' && <FontAwesomeIcon style={{paddingLeft:5}} icon={cardState === 'Improving'
      ? faArrowUp
      : cardState === 'No change'
      ? faArrowsAltH
      : cardState === 'Getting worse'
      ? faArrowDown
      : faArrowUp}/>}
            
            </motion.h1>
           {greenOption}
           
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {(hoverColour !== 'None' && (colour === 'None' || hoverColour !== colour))  && 
          <motion.div layout initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} >
            <h3 style={{color:'#000000a2',fontWeight:400,fontSize:'17px'}}>Click to select this option</h3>
          </motion.div>}
          </AnimatePresence>

          </div>
          <AnimatePresence>
          {((hoverColour === 'None' || hoverColour === colour) && colour !== 'None')  && 
          <motion.div style={{width:'100%'}} layout initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} >
            <AnimatePresence>
            {cardState == 'None' &&
              <motion.h3 
              layout
              exit={{opacity:0}}
              style={{
              color:(colour !== 'None' && hoverColour == 'None') ? 'black' :'#000000a2',
              fontWeight:400,
              fontSize:laptop ? '15px':'21px'
              }}>
                Do you feel this is improving, staying the same or getting worse?
              </motion.h3>
              }
              </AnimatePresence>
            <motion.div layout className='State-Row'>
              <motion.div onClick={() => setCardState('Improving')} whileHover={{scale:1.1}} className='State-Box'>
                <h1 style={{color:cardState === 'Improving' ? colour.toLowerCase() : 'black'}}>Improving</h1>
                <FontAwesomeIcon style={{color:cardState === 'Improving' ? colour.toLowerCase() : 'black'}} size={laptop?'1x':'2x'} icon={faArrowUp}/>
              </motion.div>
              <motion.div style={{color:cardState === 'No change' ? colour.toLowerCase() : 'black'}} onClick={() => setCardState('No change')} whileHover={{scale:1.1}} className='State-Box'>
                <h1>No change</h1>
                <FontAwesomeIcon style={{color:cardState === 'No change' ? colour.toLowerCase() : 'black'}} size={laptop?'1x':'2x'}  icon={faArrowsAltH}/>
              </motion.div>
              <motion.div style={{color:cardState === 'Getting worse' ? colour.toLowerCase() : 'black'}} onClick={() => setCardState('Getting worse')}  whileHover={{scale:1.1}} className='State-Box'>
                <h1>Getting worse</h1>
                <FontAwesomeIcon style={{color:cardState === 'Getting worse' ? colour.toLowerCase() : 'black'}}  size={laptop?'1x':'2x'} icon={faArrowDown}/>
              </motion.div>

            </motion.div>
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {(hoverColour === 'None' && colour !== 'None' && cardState !== 'None')  && 
          <motion.div style={{width:'100%'}} layout initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} >
            
              <motion.h3 
              layout
              exit={{opacity:0}}
              style={{
              color:'#000000a2',
              fontWeight:400,
              fontSize:laptop ? '13px':'18px',
              textAlign:'left',
              margin:0,
              padding:0,
              marginBottom:'5px',
              marginTop:'20px'
              }}>
                Additional Comments
              </motion.h3>
              
              <textarea style={{height:laptop ? '60px':'80px'}} value={additional} onChange={(e) => setAdditional(e.target.value)} placeholder='Write any additional information you wish to include here' className='Additional'/>
          </motion.div>}
          </AnimatePresence>
        </motion.div>

        </div>
        <div className='Submit-Row'>
        <motion.div onClick={() => {
          setGoingToNextQuestion(false)
          const temp = question - 1
          setQuestion(5)
          
          setTimeout(() => {
           setQuestion(temp)
          },1400)

        }} whileTap={{scale:0.9}} className='Submit'>
          Previous Question
        </motion.div>
        <motion.div onClick={() => {
          setGoingToNextQuestion(true)
          const temp = question + 1
          setTimeout(() => {
            setQuestion(5)
           },300)
          setTimeout(() => {
           setQuestion(temp)
          },1400)

        }} whileTap={{scale:0.9}} className='Submit'>
          Next Question
        </motion.div>
        </div>

        

      </motion.div>
    )
}

export default Card