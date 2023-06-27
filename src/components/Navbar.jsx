import React, { useState } from 'react';
import {AppBar, InputBase, Toolbar , Typography ,Box , Badge ,Avatar , Menu , MenuItem} from "@mui/material" ;
import { styled } from '@mui/material/styles';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FacebookIcon from '@mui/icons-material/Facebook';
import SearchIcon from '@mui/icons-material/Search';
import user1 from "../assets/95098921.jpeg";

// our Toolbar component : 
const StyledToolbar = styled(Toolbar)({
   display : "flex" , 
   justifyContent : "space-between" ,
});

// our Search bar component :
const Search = styled("div") (({theme}) => ({
  display : "flex" , 
  alignItems :"center" ,
  gap : "10px" ,
  backgroundColor : "white" ,
  padding:"0 10px" , 
  borderRadius : theme.shape.borderRadius ,
  width : "40%" ,  
}));


// our Icons container : // for extra xs devices : 
const Icons = styled(Box)(({theme}) => ({
 alignItems: "center" ,
 justifyContent:"flex-start",
 gap : "20px",
 
})) ;


// our User Box : 
const UserBox = styled(Box)(({theme}) => ({
alignItems: "center" ,
justifyContent:"flex-start",
gap : "10px",

})) ;

const Navbar = () => {
   const [open , setOpen] = useState(false) ;
  
  return (
    <>
       <AppBar position='sticky'>
           <StyledToolbar>
            {/*LOGO start  */}
            <Typography
               variant="h6"
               noWrap
               component="div"
               sx={{ display: { xs: 'none', sm: 'block' } }}
            >
               Facebook
            </Typography>
            <FacebookIcon 
                sx={{ display: { xs: 'block', sm: 'none' }  , width:"35px" ,height:"35px" }}
            />
            {/*LOGO end */ }

            {/*SEARCH START */ }
               <Search>
                  <SearchIcon sx={{color : "black"}}/>
                  <InputBase placeholder='Search...'/>
               </Search>
            {/*SEARCH END */ }
            
            {/*ICONS START */}
              <Icons sx = {{display : {xs : "none" , md : "flex"}}}>
                 <Badge badgeContent={4} color="error">
                      <MailIcon color="white" />
                 </Badge>
                 <Badge badgeContent={4} color="error">
                      <NotificationsIcon color="white" />
                 </Badge>
                 <Badge>
                 <Avatar
                    alt="Aimen Abdesselam"
                    src={user1}
                    onClick = {e => setOpen (open => true)}
                 />
                 </Badge>
              </Icons>
            {/*ICONS END */}

            {/*USERBOX START for mobile devices */}
            <UserBox sx = {{display : {md : "none" , xs : 'flex'}}}> 
                 <Avatar
                    alt="Aimen Abdesselam"
                    src={user1}
                    onClick = {e => setOpen (open => true)}
                 /> 
                <Typography variant='span' > 
                  Aimen
                </Typography>
            </UserBox>
            {/*USERBOX END for mobile devices */}
           </StyledToolbar>

           <Menu
               id="demo-positioned-menu"
               aria-labelledby="demo-positioned-button"
               open={open}
               onClose = {e => setOpen(false)}
               anchorOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
               transformOrigin={{
                 vertical: 'top',
                 horizontal: 'right',
               }}
           >
               <MenuItem onClick = {e => setOpen (open => false)}>Profile</MenuItem>
               <MenuItem onClick = {e => setOpen (open => false)}>My account</MenuItem>
               <MenuItem onClick = {e => setOpen (open => false)}>Logout</MenuItem>
           </Menu> 
        
       </AppBar>
    </>
  )
}

export default Navbar