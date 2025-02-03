import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck , FaUndo  } from "react-icons/fa";
import Text from '../Text';
const Guarantee = () => {
  return (
    <div className='border-b-2 py-8'>
    <Container>
        <Flex className={'justify-between'}>
            <div className='w-1/3'>
               <Flex className={'gap-x-2 items-center justify-start'}>
                <PiNumberTwoBold className={'text-[22px]'}/>
                <Text as={'p'} className={'text-[16px] text-[#6D6D6D]'} text={'Two years warranty'}/>
               </Flex>
            </div>
            <div className='w-1/3'>
               <Flex className={'gap-x-3 items-center justify-center'}>
                <FaTruck className={'text-[22px]'}/>
                <Text as={'p'} className={'text-[16px] text-[#6D6D6D]'} text={'Free Shipping'}/>
               </Flex>
            </div>
            <div className='w-1/3'>
               <Flex className={'gap-x-3 items-center justify-end'}>
                <FaUndo   className={'text-[22px]'}/>
                <Text as={'p'} className={'text-[16px] text-[#6D6D6D]'} text={'Return policy in 30 days'}/>
               </Flex>
            </div>
        </Flex>
    </Container>
</div>
  )
}

export default Guarantee
