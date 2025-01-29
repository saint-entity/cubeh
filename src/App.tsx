import React, {useState, useEffect} from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { motion,AnimatePresence } from 'framer-motion';
import Clouds from './CloudsGif.gif';



function App() {
 const [hoverColour,setHoverColour] = useState('None')
 const [colour,setColour] = useState('None')
 const [question,setQuestion] = useState(1)

 useEffect(() => {
  setColour('None');
  if (question === 4) {
    setQuestion(1)
  }
  
 },[question])

 if (window.innerWidth < 1024) {
  return (
    <div className='App'>
      use a pc
    </div>
  )
 } 

  return (
    <div className='App'>
      <div style={{position:'absolute',height:'100%',width:'100%',zIndex:5,overflow:"hidden"}}>
        <img style={{height:'auto',width:'100%',objectFit:'contain'}} src={Clouds}/>
      </div>
      <AnimatePresence>
      {question == 1 && <motion.div initial={{x:'-150%',y:'200%'}} animate={{x:'0%',y:'0%',transition:{duration:1.5,bounce:0.8}}} transition={{duration:1.5}} exit={{x:'150%',y:'200%'}} className='Card'>
        <h1 className='Card-Title'>Delivering Value</h1>
        <h1 className='Card-Subtitle'>Do you feel your work as an individual is contributing value to the business?</h1>
        <div className='Inner-Card'>
        <div className='Traffic-Container'>
          <div className='Traffic-Light'>
            <motion.div onClick={() => {setColour('None');setColour('Green');setHoverColour('None')}} onHoverStart={() => setHoverColour('Green')} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Green' ? 1 : 0.3}} whileHover={{opacity:1}} className='Green'></motion.div>
            <motion.div onClick={() => {setColour('None');setColour('Yellow');setHoverColour('None')}} onHoverStart={() => setHoverColour('Yellow')} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Yellow' ? 1 : 0.3}} whileHover={{opacity:1}} className='Yellow'></motion.div>
            <motion.div onClick={() => {setColour('None');setColour('Red');setHoverColour('None')}} onHoverStart={() => setHoverColour('Red')} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Red' ? 1 : 0.3}} whileHover={{opacity:1}} className='Red'></motion.div>
            
          </div>
          

        </div>
        <div className='Text-Container'>
          <div className='Text-Top'>
            Please select the option that best aligns with your current perspective
          </div>
          <AnimatePresence>
          {(hoverColour == 'None' && colour == 'None') && 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            Hover over a light to view an option
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Red' || colour == 'Red') && (hoverColour !== 'Green' && hoverColour !== 'Yellow'))&& 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            <h1 style={{color:'red'}}>Red</h1>
            I currently feel that my contributions are not directly aligned with the business objectives, or I’m unclear about how my work impacts the company. I need more clarity on priorities and how I can better add value.
            <h3 style={{color:'#000000a2',fontWeight:400,fontSize:'17px'}}>Click to select this option</h3>
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Yellow' || colour == 'Yellow') && (hoverColour !== 'Red' && hoverColour !== 'Green')) && 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            <h1 style={{color:'#d4d400'}}>Yellow</h1>
            I feel my work is contributing to the business in some ways, but there is room for improvement in aligning my efforts with strategic goals. With more support or feedback, I could add more value and increase my impact.
            <h3 style={{color:'#000000a2',fontWeight:400,fontSize:'17px'}}>Click to select this option</h3>
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Green' || colour == 'Green') && (hoverColour !== 'Red' && hoverColour !== 'Yellow')) && 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            <h1 style={{color:'green'}}>Green</h1>
            I feel confident that my work is meaningfully contributing to the business. I can see clear results or feedback indicating my efforts are aligned with the company’s goals and creating value.
            <h3 style={{color:'#000000a2',fontWeight:400,fontSize:'17px'}}>Click to select this option</h3>
          </motion.div>}
          </AnimatePresence>
            
        </div>

        </div>

        <motion.div onClick={() => {
          const temp = question + 1
          setQuestion(0)
          setTimeout(() => {
           setQuestion(temp)
          },1000)

        }} whileTap={{scale:0.9}} className='Submit'>
          Submit
        </motion.div>

      </motion.div>}
      </AnimatePresence>
      <AnimatePresence>
      {question == 2 && <motion.div initial={{x:'-150%',y:'200%'}} animate={{x:'0%',y:'0%',transition:{duration:1.5,bounce:0.8}}} transition={{duration:1.5}} exit={{x:'150%',y:'200%'}} className='Card'>
        <h1 className='Card-Title'>Tools and Resources</h1>
        <h1 className='Card-Subtitle'>Do you feel you have the tools and resources to do your job effectively?</h1>
        <div className='Inner-Card'>
        <div className='Traffic-Container'>
          <div className='Traffic-Light'>
            <motion.div onClick={() => {setColour('None');setColour('Green');setHoverColour('None')}} onHoverStart={() => setHoverColour('Green')} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Green' ? 1 : 0.3}} whileHover={{opacity:1}} className='Green'></motion.div>
            <motion.div onClick={() => {setColour('None');setColour('Yellow');setHoverColour('None')}} onHoverStart={() => setHoverColour('Yellow')} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Yellow' ? 1 : 0.3}} whileHover={{opacity:1}} className='Yellow'></motion.div>
            <motion.div onClick={() => {setColour('None');setColour('Red');setHoverColour('None')}} onHoverStart={() => setHoverColour('Red')} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Red' ? 1 : 0.3}} whileHover={{opacity:1}} className='Red'></motion.div>
            
          </div>
          

        </div>
        <div className='Text-Container'>
          <div className='Text-Top'>
            Please select the option that best aligns with your current perspective
          </div>
          <AnimatePresence>
          {(hoverColour == 'None' && colour == 'None') && 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            Hover over a light to view an option
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Red' || colour == 'Red') && (hoverColour !== 'Green' && hoverColour !== 'Yellow'))&& 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            <h1 style={{color:'red'}}>Red</h1>
            I often struggle due to a lack of tools, resources, or support required for my role. This makes tasks harder and impacts my ability to meet expectations. Addressing this would improve my productivity and morale.
            <h3 style={{color:'#000000a2',fontWeight:400,fontSize:'17px'}}>Click to select this option</h3>
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Yellow' || colour == 'Yellow') && (hoverColour !== 'Red' && hoverColour !== 'Green')) && 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            <h1 style={{color:'#d4d400'}}>Yellow</h1>
            I have access to some of the tools and resources I need, but there are noticeable gaps. These gaps occasionally slow me down or force me to find workarounds. With additional support, I could perform more effectively.
            <h3 style={{color:'#000000a2',fontWeight:400,fontSize:'17px'}}>Click to select this option</h3>
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Green' || colour == 'Green') && (hoverColour !== 'Red' && hoverColour !== 'Yellow')) && 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            <h1 style={{color:'green'}}>Green</h1>
            I feel I have all the tools, resources, and support needed to excel in my role. This enables me to focus on delivering quality work without unnecessary obstacles. Overall, I feel set up for success.
            <h3 style={{color:'#000000a2',fontWeight:400,fontSize:'17px'}}>Click to select this option</h3>
          </motion.div>}
          </AnimatePresence>
            
        </div>

        </div>

        <motion.div onClick={() => {
          const temp = question + 1
          setQuestion(0)
          setTimeout(() => {
           setQuestion(temp)
          },1000)

        }} whileTap={{scale:0.9}} className='Submit'>
          Submit
        </motion.div>

      </motion.div>}
      </AnimatePresence>
      <AnimatePresence>
      {question == 3 && <motion.div initial={{x:'-150%',y:'200%'}} animate={{x:'0%',y:'0%',transition:{duration:1.5,bounce:0.8}}} transition={{duration:1.5}} exit={{x:'150%',y:'200%'}} className='Card'>
        <h1 className='Card-Title'>Appreciation in the workplace</h1>
        <h1 className='Card-Subtitle'>Do you feel your contributions are recognized and appreciated?</h1>
        <div className='Inner-Card'>
        <div className='Traffic-Container'>
          <div className='Traffic-Light'>
            <motion.div onClick={() => {setColour('None');setColour('Green');setHoverColour('None')}} onHoverStart={() => setHoverColour('Green')} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Green' ? 1 : 0.3}} whileHover={{opacity:1}} className='Green'></motion.div>
            <motion.div onClick={() => {setColour('None');setColour('Yellow');setHoverColour('None')}} onHoverStart={() => setHoverColour('Yellow')} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Yellow' ? 1 : 0.3}} whileHover={{opacity:1}} className='Yellow'></motion.div>
            <motion.div onClick={() => {setColour('None');setColour('Red');setHoverColour('None')}} onHoverStart={() => setHoverColour('Red')} onHoverEnd={() => setHoverColour('None')} initial={{opacity:0.3}} animate={{opacity:colour =='Red' ? 1 : 0.3}} whileHover={{opacity:1}} className='Red'></motion.div>
            
          </div>
          

        </div>
        <div className='Text-Container'>
          <div className='Text-Top'>
            Please select the option that best aligns with your current perspective
          </div>
          <AnimatePresence>
          {(hoverColour == 'None' && colour == 'None') && 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            Hover over a light to view an option
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Red' || colour == 'Red') && (hoverColour !== 'Green' && hoverColour !== 'Yellow'))&& 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            <h1 style={{color:'red'}}>Red</h1>
            I rarely receive recognition or feedback on my contributions, which can be demotivating. It feels like my efforts go unnoticed, and I sometimes question my impact. More consistent acknowledgment would help me feel valued.
            <h3 style={{color:'#000000a2',fontWeight:400,fontSize:'17px'}}>Click to select this option</h3>
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Yellow' || colour == 'Yellow') && (hoverColour !== 'Red' && hoverColour !== 'Green')) && 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            <h1 style={{color:'#d4d400'}}>Yellow</h1>
            I feel my contributions are occasionally acknowledged, but it’s not consistent or specific enough. Recognition happens sometimes, but it could improve with more regular feedback. Knowing my work is appreciated would boost my motivation.
            <h3 style={{color:'#000000a2',fontWeight:400,fontSize:'17px'}}>Click to select this option</h3>
          </motion.div>}
          </AnimatePresence>
          <AnimatePresence>
          {((hoverColour == 'Green' || colour == 'Green') && (hoverColour !== 'Red' && hoverColour !== 'Yellow')) && 
          <motion.div initial={{opacity:0,y:'-10%'}} animate={{opacity:1,y:'0%'}} className='Text-Middle'>
            <h1 style={{color:'green'}}>Green</h1>
            I feel my contributions are regularly recognized and appreciated by my team and leadership. The feedback I receive helps me understand my value to the company. This motivates me to keep putting in my best effort.
            <h3 style={{color:'#000000a2',fontWeight:400,fontSize:'17px'}}>Click to select this option</h3>
          </motion.div>}
          </AnimatePresence>
            
        </div>

        </div>

        <motion.div onClick={() => {
          const temp = question + 1
          setQuestion(0)
          setTimeout(() => {
           setQuestion(temp)
          },1000)

        }} whileTap={{scale:0.9}} className='Submit'>
          Submit
        </motion.div>

      </motion.div>}
      </AnimatePresence>
      
      
    </div>
  );
}

export default App;
