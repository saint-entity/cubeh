import React, {useState, useEffect} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowsAltH, faArrowUp, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { motion,AnimatePresence } from 'framer-motion';
import Clouds from './CloudsGif.gif';
import Card from './Card';



function App() {
 const [hoverColour,setHoverColour] = useState('None')
 const [colour,setColour] = useState('None')
 const [question,setQuestion] = useState(1)
 const [goingToNextQuestion,setGoingToNextQuestion] = useState(true)
 const [currentlyDisplaying,setCurrentlyDisplaying] = useState('')
 const [dropdownActive,setDropdownActive] = useState(false)
 const [displayOptions,setDisplayOptions] = useState(false) 
 const [animationState, setAnimationState] = useState('initial');
 const [selectedOption, setSelectedOption] = useState('Select');
 const [additional,setAdditional] = useState('')
 const [cardState, setCardState] = useState('None')
 const laptop = window.innerWidth < 1500;

 useEffect(() => {
  setColour('None');
  setCardState('None')
  setAdditional('')
  if (question === 4) {
    setQuestion(1)
  }

  if (question === 0) {
    setQuestion(3)
  }
  
 },[question])

 const CardStateNotChosen = (colour !== 'None' && hoverColour == 'None')

 const iconToUse = () => {

  const iconToUse = (() => {
    if (cardState === 'Improving') {
      return faArrowUp;
    } else if (cardState === 'Staying the same') {
      return faArrowsAltH;
    } else if (cardState === 'Getting worse') {
      return faArrowDown;
    } else {
      return faArrowUp;
    }
  })();
  if (cardState !== 'None'){
  return (
    <FontAwesomeIcon icon={iconToUse} />
  );} else {
  return (
    <></>
  )
  }
};

 const ballVariants = {
  initial: {
    y: '0%',
    width: 150,
    height: 150,
    borderRadius: '50%',
    transition: { duration: 0.5,}
  },
  drop: {
    y: '130%',
    transition: { duration: 1, type: 'spring', bounce: 0.2 },
  },
  expand: {
    y: '80%',
    width: '300px',
    height: '300px',
    borderRadius: '10px',
    transition: { duration: 0.5}
   
  },
};

 if (window.innerWidth < 1024) {
  return (
    <div className='App'>
      use a pc
    </div>
  )
 }

 if (currentlyDisplaying == 'Team Dropdown') {
   return (
    <div style={{
      alignItems:laptop ? 'flex-start' : 'center'
    }} className='App'>
      <div onClick={() => {
        if (animationState === 'initial') {
          setAnimationState('drop');
        } else {
          setAnimationState('initial')
          setDisplayOptions(false);
        }
      }} className='Dropdown'>
        <AnimatePresence>
          {animationState == 'expand' &&
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='Chevron'>
            <FontAwesomeIcon color='black' size='3x' icon={faChevronUp}/>
            </motion.div>
          }
        </AnimatePresence>
        
        <AnimatePresence>
          {animationState == 'initial' &&
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className='Chevron'>
            <FontAwesomeIcon color='black' size='3x' icon={faChevronDown}/>
            </motion.div>
          }
        </AnimatePresence>
        
       
        <motion.h1 style={{fontWeight:500,color:selectedOption !== 'Select' ? 'black':'#00000080'}}>{selectedOption}</motion.h1>
        <motion.div className='ball'
          
           variants={ballVariants}
           initial="initial"
           animate={animationState}
           onAnimationComplete={() => {
             if (animationState === 'drop') {
              setTimeout(() => {
                setAnimationState('expand');
              },1000)
              setTimeout(() => {
                setDisplayOptions(true);
              },1200)
               
             }
           }}
          >
            {displayOptions && 
            <motion.div className='Selection-Options' initial={{opacity:0}} animate={{opacity:1}}>
              <motion.h1 onClick={
                () => {
                  setSelectedOption('Cosmic')
                  setAnimationState('initial')
                  setDisplayOptions(false);

                }
              } whileHover={{backgroundColor:'navy',color:'white'}} style={{fontWeight:400,color:'black',borderBottom:"2px rgba(0, 0, 0, 0.33)solid",margin:0,padding:0,paddingBottom:'5px',fontSize:"22px",width:'140px',textAlign:'center'}}>Cosmic</motion.h1>
              <motion.h1 onClick={
                () => {
                  setSelectedOption('Spartan')
                  setAnimationState('initial')
                  setDisplayOptions(false);

                }
              } whileHover={{backgroundColor:'navy',color:'white'}} style={{fontWeight:400,color:'black',borderBottom:"2px rgba(0, 0, 0, 0.33) solid",margin:0,padding:0,paddingBottom:'5px',paddingTop:'5px',fontSize:"22px",width:'140px',textAlign:'center'}}>Spartan</motion.h1>
              <motion.h1 onClick={
                () => {
                  setSelectedOption('Melrose')
                  setAnimationState('initial')
                  setDisplayOptions(false);
                }
              } whileHover={{backgroundColor:'navy',color:'white'}} style={{fontWeight:400,color:'black',borderBottom:"2px rgba(0, 0, 0, 0.33) solid",margin:0,padding:0,paddingBottom:'5px',paddingTop:'5px',fontSize:"22px",width:'140px',textAlign:'center'}}>Melrose</motion.h1>
              <motion.h1 onClick={
                () => {
                  setSelectedOption('Gala')
                  setAnimationState('initial')
                  setDisplayOptions(false);
                }
              } whileHover={{backgroundColor:'navy',color:'white'}} style={{fontWeight:400,color:'black',borderBottom:"2px rgba(0, 0, 0, 0.33) solid",margin:0,padding:0,paddingBottom:'5px',paddingTop:'5px',fontSize:"22px",width:'140px',textAlign:'center'}}>Gala</motion.h1>
              <motion.h1 onClick={
                () => {
                  setSelectedOption('Android')
                  setAnimationState('initial')
                  setDisplayOptions(false);
                }
              } whileHover={{backgroundColor:'navy',color:'white'}} style={{fontWeight:400,color:'black',borderBottom:"2px rgba(0, 0, 0, 0.33) solid",margin:0,padding:0,paddingBottom:'5px',paddingTop:'5px',fontSize:"22px",width:'140px',textAlign:'center'}}>Android</motion.h1>
              <motion.h1 onClick={
                () => {
                  setSelectedOption('Chromecast')
                  setAnimationState('initial')
                  setDisplayOptions(false);
                }
              } whileHover={{backgroundColor:'navy',color:'white'}} style={{fontWeight:400,color:'black',fontSize:"22px",width:'140px',textAlign:'center',margin:0,padding:0,paddingTop:'5px'}}>Chromecast</motion.h1>
            </motion.div>
            }
          </motion.div>
      </div>
    </div>
   )
 }


  if (currentlyDisplaying == 'Cards')
  {
    return (
    <div className='App'>
      <div style={{position:'absolute',height:'100%',width:'100%',zIndex:5,overflow:"hidden"}}>
<img style={{height:'auto',width:'100%',objectFit:'contain'}} src={Clouds}/> 
      </div>
      <AnimatePresence>
      {question == 1 && <Card
        goingToNextQuestion={goingToNextQuestion}
        setGoingToNextQuestion={setGoingToNextQuestion}
        colour={colour}
        setColour={setColour}
        hoverColour={hoverColour}
        setHoverColour={setHoverColour}
        cardState={cardState}
        setCardState={setCardState}
        question={question}
        setQuestion={setQuestion}
        laptop={laptop}
        CardStateNotChosen={CardStateNotChosen}
        additional={additional}
        setAdditional={setAdditional}
        header='Delivering Value'
        subheader='Do you feel your work as an individual is contributing value to the business?'
        redOption="I currently feel that my contributions are not directly aligned with the business objectives, or I'm unclear about how my work impacts the company. I need more clarity on priorities and how I can better add value."
        yellowOption=" I feel my work is contributing to the business in some ways, but there is room for improvement in aligning my efforts with strategic goals. With more support or feedback, I could add more value and increase my impact."
        greenOption="I feel confident that my work is meaningfully contributing to the business. I can see clear results or feedback indicating my efforts are aligned with the company's goals and creating value."
      />}
      </AnimatePresence>
      <AnimatePresence>
      {question == 2 && <Card
        goingToNextQuestion={goingToNextQuestion}
        setGoingToNextQuestion={setGoingToNextQuestion}
        colour={colour}
        setColour={setColour}
        hoverColour={hoverColour}
        setHoverColour={setHoverColour}
        cardState={cardState}
        setCardState={setCardState}
        question={question}
        setQuestion={setQuestion}
        laptop={laptop}
        CardStateNotChosen={CardStateNotChosen}
        additional={additional}
        setAdditional={setAdditional}
        header='Tools and Resources'
        subheader='Do you feel you have the tools and resources to do your job effectively?'
        redOption="I often struggle due to a lack of tools, resources, or support required for my role. This makes tasks harder and impacts my ability to meet expectations. Addressing this would improve my productivity and morale."
        yellowOption="I have access to some of the tools and resources I need, but there are noticeable gaps. These gaps occasionally slow me down or force me to find workarounds. With additional support, I could perform more effectively."
        greenOption="I feel I have all the tools, resources, and support needed to excel in my role. This enables me to focus on delivering quality work without unnecessary obstacles. Overall, I feel set up for success."
      />}
      </AnimatePresence>
      <AnimatePresence>
      {question == 3 && <Card
        goingToNextQuestion={goingToNextQuestion}
        setGoingToNextQuestion={setGoingToNextQuestion}
        colour={colour}
        setColour={setColour}
        hoverColour={hoverColour}
        setHoverColour={setHoverColour}
        cardState={cardState}
        setCardState={setCardState}
        question={question}
        setQuestion={setQuestion}
        laptop={laptop}
        CardStateNotChosen={CardStateNotChosen}
        additional={additional}
        setAdditional={setAdditional}
        header='Appreciation in the workplace'
        subheader='Do you feel your contributions are recognized and appreciated?'
        redOption="I rarely receive recognition or feedback on my contributions, which can be demotivating. It feels like my efforts go unnoticed, and I sometimes question my impact. More consistent acknowledgment would help me feel valued."
        yellowOption="I feel my contributions are occasionally acknowledged, but it's not consistent or specific enough. Recognition happens sometimes, but it could improve with more regular feedback. Knowing my work is appreciated would boost my motivation."
        greenOption="I feel my contributions are regularly recognized and appreciated by my team and leadership. The feedback I receive helps me understand my value to the company. This motivates me to keep putting in my best effort."
      />}
      </AnimatePresence>
      
      
    </div>
  );}


  return (
    <div className='App'>
      <div className='Selection-Row'>
        <motion.div onClick={() => setCurrentlyDisplaying('Cards')} whileHover={{scale:1.2,boxShadow:'0px 20px 20px 20px rgba(255,255,255,0.75)'}}  whileTap={{scale:0.9}} >
          Health Check Cards
        </motion.div>
        <motion.div onClick={() => setCurrentlyDisplaying('Team Dropdown')} whileHover={{scale:1.2,boxShadow:'0px 20px 20px 20px rgba(255,255,255,0.75)'}}  whileTap={{scale:0.9}} >
          Team Dropdowns
        </motion.div>
      </div>
    </div>
  )
}

export default App;
