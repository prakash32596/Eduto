import React from 'react';
// import {
//   Direction,
//   FloatMenuItemButton,
//   FloatingGroup,
//   Size,
// } from 'react-motion-float-button';
// import { Share } from '@emotion-icons/ShareAlt';
// import { Facebook, Instagram} from '@emotion-icons/remix-fill';
import { Container, Button, Link, lightColors, darkColors  } from 'react-floating-action-button'

import './FoatButton.css'



const FloatButton = () => {
  // const handleButton = (s) => {
  //   console.log(s);
  // }

  return (
    <div className="FloatBtn">
    <Container>
            <Link href="#"
                tooltip="Compare"
                styles={{backgroundColor: 'white',color:'black' }}
               > <img src={require('../../assets/images/noun_Share_896160.svg').default}/></Link>
               <Link href="#"
                tooltip="Share"
                styles={{backgroundColor: 'white',color:'black' }}
               > <img src={require('../../assets/images/noun_Compare_3133212.svg').default}/></Link>
               <Link href="#"
                tooltip="Download Brochure"
                styles={{backgroundColor: 'white',color:'black' }}
               > <img src={require('../../assets/images/noun_Download_1560897.svg').default}/></Link>
                
            <Button
                rotate={true}
                styles={{backgroundColor: '#0178ff',color:'white' }}
                onClick={() => console.log('FAB Rocks!')} >
                  <img src={require('../../assets/images/noun_Download_1560897.svg').default}/>
                </Button>
        </Container>
    </div>

  );
}

export default FloatButton;