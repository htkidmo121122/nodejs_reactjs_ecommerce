import React from 'react'
import MapSection from '../MapSection'
import SocialMediaSection from '../SocialMediaSection'
import InfoSection from '../InfoSection';
import ProductSection from '../ProductSection';
import { MDBContainer, MDBRow} from 'mdb-react-ui-kit';


const MainComposite = () => {
  return (
    <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <SocialMediaSection/>
            <ProductSection/>
            <MapSection/>
            <InfoSection/>
          </MDBRow>
        </MDBContainer>
      </section>
  )
}

export default MainComposite