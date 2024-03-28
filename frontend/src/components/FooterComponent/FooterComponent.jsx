import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { useState } from 'react'
import { useEffect } from 'react'
import * as ProductService from '../../services/ProductService'
import MainComposite from './Composite/CompositeSide/MainComposite';


export default function FooterComponent() {
  //Lọc sản phẩm
  const [typeProducts, setTypeProducts] = useState([])
  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res?.status === 'OK') {
      setTypeProducts(res?.data)
    }
  }
  const currentDate = new Date();

  useEffect(() => {
    fetchAllTypeProduct()
  }, [])
  return (
    
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{ fontSize: '15px'}}>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ color: '#fff', background:  '#eb3b4c', borderBottom: '5px solid black'}} >
        <div className='me-5 d-none d-lg-block'>
          <span style={{ paddingLeft: '95px'}} >CHÀO MỪNG ĐẾN VỚI HUFLIT PHONE</span>
        </div>

        <div style={{ paddingRight: '95px'}} >
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='light' fab icon='github' />
          </a>
        </div>
      </section>
      <MainComposite/>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © Copyright: 
      <a className='text-reset fw-bold' href='http://localhost:3000/'> huflitphone.com</a>
      </div>
    </MDBFooter>
  );
}