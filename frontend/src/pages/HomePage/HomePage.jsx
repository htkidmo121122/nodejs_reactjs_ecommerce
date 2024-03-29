import React from 'react'

import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Loading from '../../components/LoadingComponent/Loading'
import { useDebounce } from '../../hooks/useDebounce'
import { useEffect } from 'react'
import HomePagePresentation from './ContainerPresentational/HomePagePresentational'

const HomePage = () => {
  const searchProduct = useSelector((state) => state?.product?.search)
  const searchDebounce = useDebounce(searchProduct, 500)
  const [loading, setLoading] = useState(false)
  const [limit, setLimit] = useState(12)
  const [typeProducts, setTypeProducts] = useState([])
  
  const fetchProductAll = async (context) => {
    const limit = context?.queryKey && context?.queryKey[1]
    const search = context?.queryKey && context?.queryKey[2]
    const res = await ProductService.getAllProduct(search, limit)

    return res

  }

  const fetchAllTypeProduct = async () => {
    const res = await ProductService.getAllTypeProduct()
    if(res?.status === 'OK') {
      setTypeProducts(res?.data)
    }
  }
  

  const { isLoading, data: products, isPreviousData } = useQuery(['products', limit, searchDebounce], fetchProductAll, { retry: 3, retryDelay: 1000, keepPreviousData: true })

  useEffect(() => {
    fetchAllTypeProduct()
  }, [])

  const handleSetLimit = () => {
    setLimit((prev) => prev + 6);
  };


  return (
    <Loading isLoading={isLoading || loading}>
<<<<<<< HEAD
      {/* <div style={{ width: '1270px', margin: '0 auto', borderBottom: '2px solid red' }}>
=======
  
      <div style={{ width: '1270px', margin: '0 auto', borderBottom: '2px solid red'  }}>
>>>>>>> 06c589bd4062e3a6cf748457d1a4ef0b58940ad0
        <WrapperTypeProduct>
          {typeProducts.map((item) => {
            return (
              <TypeProduct name={item} key={item}/>
            )
          })}
        </WrapperTypeProduct>
      </div>
      <div className='body' style={{ width: '100%', paddingBottom: '10px'}}>
        <div id="container" style={{ height: 'auto', width: '1270px', margin: '0 auto' }}>
          <SliderComponent arrImages={[slider1, slider2, slider3]} height={'500px'} />
          <div style={{ width: '100%', paddingTop: '20px', fontWeight: 'bold', fontSize: '20px', borderBottom: '4px solid red'}}>
                Sản Phẩm Mới Nhất
          </div>
          <WrapperProducts>
            {products?.data?.map((product) => {
              return (
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
              )
            })}
          </WrapperProducts>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperButtonMore
              textbutton={isPreviousData ? 'Đang Tải' : "Xem thêm"} type="outline" styleButton={{
                border: `2px solid ${products?.total === products?.data?.length ? '#f5f5f5' : '#fd5555'}`, color: `${products?.total === products?.data?.length ? '#f5f5f5' : '#fd5555'}`,
                width: '240px', height: '38px', borderRadius: '4px'
              }}
              disabled={products?.total === products?.data?.length || products?.totalPage === 1}
              styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
              onClick={() => setLimit((prev) => prev + 6)}
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
<<<<<<< HEAD
      </div> */}
      <HomePagePresentation
        typeProducts={typeProducts}
        products={products}
        isPreviousData={isPreviousData}
        isLoading={isLoading}
        loading={loading}
        onSetLimit={handleSetLimit}
      />
=======
      </div>
 
      
>>>>>>> 06c589bd4062e3a6cf748457d1a4ef0b58940ad0
    </Loading>
  )
}

export default HomePage