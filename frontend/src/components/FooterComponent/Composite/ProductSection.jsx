import React from 'react'
import { MDBCol,MDBIcon ,MDBBtn  } from 'mdb-react-ui-kit';

const ProductSection = () => {
  return (
    <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
    <h6 className='text-uppercase fw-bold mb-4'>Sản Phẩm</h6>
    {/* <p>
      <a href='#!' className='text-reset'>
        Angular
      </a>
    </p>
    <p>
      <a href='#!' className='text-reset'>
        React
      </a>
    </p>
    <p>
      <a href='#!' className='text-reset'>
        Vue
      </a>
    </p>
    <p>
      <a href='#!' className='text-reset'>
        Laravel
      </a>
    </p> */}
    {/* <p style={{display: 'flex', flexDirection: 'column',gap: '0px', textAlign: 'left', flexWrap: 'wrap'}}>
      {typeProducts.map((item) => {
          return (
          <TypeProduct name={item} key={item}/>
          )
      })}
      </p> */}
     
<p className='d-flex justify-content-center align-items-center'>
  <span className='me-3'>Register for free</span>
  <MDBBtn type='button' outline color="black" rounded>
    Sign up!
  </MDBBtn>
</p>
  </MDBCol>
  )
}

export default ProductSection