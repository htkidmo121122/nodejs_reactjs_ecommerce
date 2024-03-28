import React from 'react'
import { MDBCol } from 'mdb-react-ui-kit';

const MapSection = () => {
  return (
    <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2900403237063!2d106.59805157506176!3d10.865530357543802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b088de30f3b%3A0xd2140740d360f705!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOZ2_huqFpIG5n4buvIC0gVGluIGjhu41jIFRQLiBIQ00gKEhVRkxJVCkgLSBDxqEgc-G7nyBIw7NjIE3DtG4!5e0!3m2!1svi!2s!4v1709315766030!5m2!1svi!2s'
        className='h-100 w-100'
        style={{ border: '0'}}
        loading='lazy'
      ></iframe>
    </MDBCol>
  )
}

export default MapSection
