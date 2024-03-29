// Presentational Component
import React from 'react'
import SliderComponent from '../../../components/SliderComponent/SliderComponent'
import TypeProduct from '../../../components/TypeProduct/TypeProduct'
import CardComponent from '../../../components/CardComponent/CardComponent'
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from '../style'
import slider1 from '../../../assets/images/slider1.webp'
import slider2 from '../../../assets/images/slider2.webp'
import slider3 from '../../../assets/images/slider3.webp'


const HomePagePresentation = ({ typeProducts, products, isPreviousData, isLoading, loading, onSetLimit }) => (
  <div>
    <div style={{ width: '1270px', margin: '0 auto', borderBottom: '2px solid red' }}>
      <WrapperTypeProduct>
        {typeProducts.map((item) => <TypeProduct name={item} key={item} />)}
      </WrapperTypeProduct>
    </div>
    <div className='body' style={{ width: '100%', paddingBottom: '10px'}}>
      <div id="container" style={{ height: 'auto', width: '1270px', margin: '0 auto' }}>
        <SliderComponent arrImages={[slider1, slider2, slider3]} height={'500px'} />
        <div style={{ width: '100%', paddingTop: '20px', fontWeight: 'bold', fontSize: '20px', borderBottom: '4px solid red'}}>
          Sản Phẩm Mới Nhất
        </div>
        <WrapperProducts>
          {products?.data?.map((product) => (
            <CardComponent
              key={product._id}
              countInStock={product.countInStock}
              description={product.description}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
              type={product.type}
              selled={product.selled}
              discount={product.discount}
              id={product._id}
            />
          ))}
        </WrapperProducts>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <WrapperButtonMore
            textbutton={isPreviousData ? 'Đang Tải' : "Xem thêm"}
            type="outline"
            styleButton={{
              border: `2px solid ${products?.total === products?.data?.length ? '#f5f5f5' : '#fd5555'}`,
              color: `${products?.total === products?.data?.length ? '#f5f5f5' : '#fd5555'}`,
              width: '240px', height: '38px', borderRadius: '4px'
            }}
            disabled={products?.total === products?.data?.length || products?.totalPage === 1}
            styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
            onClick={onSetLimit}
          />
        </div>
        <div style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: '20px', marginTop: '20px', borderBottom: '4px solid red'}}>
          Đại Lý Phân Phối Chính Hàng APPLE
        </div>
        <div className="ratio ratio-21x9" style={{margin : '20px 0px 20px 0px', aspectRatio: "50%"}}>
          <iframe
            src="https://www.youtube.com/embed/IY4x85zqoJM?si=YSg_9_fH52QzUh5H"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
);

export default HomePagePresentation;