import React, { useState } from 'react';
import './Header.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
  const [openBasic, setOpenBasic] = useState(false);
 
  return (
   <div className='row' >
    
   <MDBNavbar className=' py-4 mb-5' expand='lg' light bgColor='light'>
   <MDBContainer fluid>
   <a href="#" class="btn-shine" style={{fontSize:'35px'}}>Social </a>
   {/* <span><i class="fa fa-refresh" aria-hidden="true"></i><a class="btn-shine pt-5 mx-4 mt-1" >Sync.</a></span> */}
   <a class="btn-shine pt-5 mx-4 mt-1" >Sync.</a>
   



     <MDBNavbarToggler
       aria-controls='navbarSupportedContent'
       aria-expanded='false'
       aria-label='Toggle navigation'
       onClick={() => setOpenBasic(!openBasic)}
     >
       <MDBIcon icon='bars' fas />
     </MDBNavbarToggler>

     <MDBCollapse className='d-flex justify-content-center' navbar open={openBasic} style={{fontSize:'20px'}} >
       <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
         <MDBNavbarItem>
          <Link to={'/'}>
          <MDBNavbarLink className='nav' >
             Add Bot
           </MDBNavbarLink>
          </Link>
         </MDBNavbarItem>

         <Link to={'manageBot'}>
         <MDBNavbarItem>
           <MDBNavbarLink className='nav mx-5'>Manage Bot</MDBNavbarLink>
         </MDBNavbarItem>
         </Link>

         <Link to={'runHistory'}>
         <MDBNavbarItem>
           <MDBNavbarLink className='nav'>
             Run History
           </MDBNavbarLink>
         </MDBNavbarItem>
         </Link>
         
       </MDBNavbarNav>

     </MDBCollapse>
   </MDBContainer>
 </MDBNavbar>

   


  </div>
  );
}

export default Header