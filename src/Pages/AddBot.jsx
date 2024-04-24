import React, { useState } from 'react'
import { MDBInput ,MDBBtn} from 'mdb-react-ui-kit';
import './AddBot.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRadio
} from 'mdb-react-ui-kit';

function AddBot() {

  const [visible,setVisible]=useState(false);

  return (

    <div className="container mt-5 mb-2" style={{maxWidth:'1000px'}}>
      <MDBCard className='card'>
      <MDBCardBody>

   <h4 className='text-center mt-4 ' style={{textDecoration:'underline',fontWeight:'550'}}>ADD NEW BOT</h4>

<form >
 <div className="row mt-5 " style={{marginLeft:'50px',marginRight:'50px'}}>
   <div className="col-6 mb-3 ">
   <MDBInput className='bg-white'  style={{border:'2px solid blue'}} label="Enter Bot Name" id="formControlLg" type="text" size="lg" />
   {/* <MDBInput className='bg-white' label="Example label" type="text" id="formWhite" contrast /> */}
   </div>
   <div className="col-6">
   <select className='form-control p-2 ' name="" id="" style={{border:'1px solid blue'}}>
     <option value="" hidden>Select Bot Type</option>
     <option value="">one</option>
     <option value="">two</option>
     <option value="">three</option>
   </select>
   </div>


   <form className='my-3'>
   <div className='box border border-primary px-5 py-5'>

     <h5 className='text-center' style={{textDecoration:'underline'}} ><b>CREDENTIALS</b></h5>
     <div className="row mt-4 ">
       <div className="col-6">
       <MDBInput className='mb-3 bg-white' label="UserName" id="formControlLg" type="text" size="lg" />
       <MDBInput className='bg-white' label="API Key" id="formControlLg" type="text" size="lg" />
       </div>
       <div className="col-6">
       <MDBInput label="Password" className='mb-3 bg-white'  id="formControlLg" type="password" size="lg" />
       <MDBInput className='bg-white' label="Secret Key" id="formControlLg" type="password" size="lg" />
       </div>
     </div>
      
   <div className='d-flex mt-4 text-black'>
     <label className='mx-4'><b>EXECUTION :</b></label>
     <MDBRadio  onClick={()=>setVisible(false)} name='flexRadioDefault' id='flexRadioDefault1' label='Now'  />
      <MDBRadio className='mx-2'  onClick={()=>setVisible(true)} name='flexRadioDefault' id='flexRadioDefault2' label='Schedule' />
   </div>

   { visible &&
   <div className='mt-5'>
      <h5 className='text-center'style={{textDecoration:'underline'}} ><b>SCHEDULE  DETAILS</b></h5>
     <div className="row mt-4">
       <div className="col-6">
       <MDBInput className='mb-3 bg-white' label="Start Date" id="formControlLg" type="date" size="lg" />
       <MDBInput className='bg-white' label="Interval" id="formControlLg" type="text" size="lg" />
       </div>
       <div className="col-6">
       <MDBInput label="Stop Date" className='mb-3 bg-white'  id="formControlLg" type="date" size="lg" />
       <MDBInput className='bg-white' label="Time" id="formControlLg" type="time" size="lg" />
       </div>
     </div>
      
   </div>
   }
   </div>
   </form>


   <div className='d-flex mb-4 mt-3 text-black'>
   <label ><b>TOPICS:</b></label><input  type="text" className='form-control' style={{marginLeft:'20px',border:'1px solid blue'}} />
 </div>
 </div>
 </form>

<div className='d-flex justify-content-end mb-5 mt-3' style={{marginRight:'60px'}}>
<button className='btn1 mx-3 px-5'>Save</button>
<button className='btn2 px-5'>Cancel</button>
</div>
 
      </MDBCardBody>
    </MDBCard>
      
    </div>
  )
}

export default AddBot