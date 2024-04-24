import React from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import './RunHistory.css'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';


function RunHistory() {
  return (
    <div className="container mb-2" style={{maxWidth:'1000px',marginTop:'80px'}}>

<MDBCard className='card3'>
      <MDBCardBody >
      <h4 className='text-center mt-4 mb-5' style={{textDecoration:'underline',fontWeight:'550'}}>RUN HISTORY</h4>

{/* search */}
<div className="searchbar mb-5 " style={{maxWidth:'400px'}}>
    <div className="searchbar-wrapper">
        <div className="searchbar-left">
            <div className="search-icon-wrapper">
                <span className="search-icon searchbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                    </svg>
                </span>
            </div>
        </div>

        <div className="searchbar-center" style={{maxWidth:'300px'}}>
            <div className="searchbar-input-spacer  "></div>

            <input type="text" className="searchbar-input"  placeholder="Search Bot by Name"/>
        </div>

        <div className="searchbar-right">
            <svg className="voice-search" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z">
                </path>
                <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
                <path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z">
                </path>
                <path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z">
                </path>
            </svg>
        </div>
    </div>
</div>

{/* table */}
<MDBTable bordered borderColor="black" border={2} className='bg-white mb-5' >
    <MDBTableHead>
      <tr>
        <th scope='col' className='text-center ' style={{fontSize:'18px',fontWeight:'900px',color:'#041f60'}}><b>Bot Name</b></th>
        <th scope='col' className='text-center ' style={{fontSize:'18px',fontWeight:'900px',color:'#041f60'}}><b>Bot Type</b></th>
        <th scope='col' className='text-center ' style={{fontSize:'18px',fontWeight:'900px',color:'#041f60'}}><b>Last Execution TimeStamp</b></th>
      </tr>
    </MDBTableHead>
    <MDBTableBody>
      <tr >
        <td className='py-5'><input type="text" placeholder='Type Here' className='form-control border border-primary' /></td>
        <td className='py-5'><input type="text" placeholder='Type Here' className='form-control border border-primary' /></td>
        <td className='py-5'><input type="text" placeholder='Type Here' className='form-control border border-primary' /></td>
      </tr>
      {/* <tr>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr> */}
    </MDBTableBody>
  </MDBTable>

      </MDBCardBody>
    </MDBCard>
   
  </div>
  )
}

export default RunHistory