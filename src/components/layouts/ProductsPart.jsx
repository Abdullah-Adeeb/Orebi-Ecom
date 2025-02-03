import React from 'react'
import Container from '../Container'
import Text from '../Text'
import Flex from '../Flex'
import Product from '../Product'

const ProductsPart = () => {
  return (
    <div className='pt-[65px] pb-[50px]'>
      <Container>
        <div>
            <Text as={'h1'} className={'text-[40px] text-[#262626] font-bold pb-20'} text={'New Arrivals'}/>
        </div>
        <div className=''>
            <Flex className={'justify-between'}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </Flex>
            <div className='pt-[230px] pb-[65px]'>
            <Flex className={'justify-between'}>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </Flex>
                </div>

        </div>
      </Container>
    </div>
  )
}

export default ProductsPart
