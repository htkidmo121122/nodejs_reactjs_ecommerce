import React from 'react'
import { MDBCol,MDBIcon  } from 'mdb-react-ui-kit';

const InfoSection = () => {
  return (
    <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
    <h6 className='text-uppercase fw-bold mb-4'>Liên Hệ</h6>
    <p>
      <MDBIcon color='secondary' icon='home' className='me-2' />
      10 QL22, Tân Xuân, Hóc Môn, Thành phố Hồ Chí Minh, Việt Nam
    </p>
    <p>
      <MDBIcon color='secondary' icon='envelope' className='me-3' />
      https://huflit.edu.vn
    </p>
    <p>
      <MDBIcon color='secondary' icon='phone' className='me-3' /> +84 0283 863 2052
    </p>
    <p>
      <MDBIcon color='secondary' icon='print' className='me-3' /> +84 0623 323 1123
    </p>
  </MDBCol>
  )
}

export default InfoSection