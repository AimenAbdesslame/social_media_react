import { Box, Button } from '@mui/material'
import DehazeIcon from '@mui/icons-material/Dehaze';
import Post from "./Post" ; 
import Sidebar from './Sidebar' ; 

import React, { useState } from 'react'


const Feed = () => {
 
  const [Showside , SetShowside] = useState(false) ;    
  
  
  return (
    <>
    <Box flex={4}>
      
      {/*// for the sidebar in mobile devices :*/} 
          <Button 
             sx ={{display: {xs : "block" , md : "none"} , position : "fixed" , left: 0 }}
             onClick = {() => {SetShowside(Showside => !Showside) ; console.log(Showside)}}
          >
             <DehazeIcon />
          </Button>

          {Showside? (
             <Sidebar />) 
             : 
          (
            <>
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
              <Post />
            </>
          )}
          
    </Box>
</>
  )
}

export default Feed 