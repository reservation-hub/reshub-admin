import React from 'react'
import MainTemplate from '@components/common/layout/MainTemplate'
import Section from '@components/common/layout/Section'
import CenterBox from '@components/common/layout/CenterBox'
import { BsQuestion } from 'react-icons/bs'

const Error = () => {
  return (
    <MainTemplate>
      <Section>
        <CenterBox classes='text-center text-[1.6rem] grid text-primary-dark left-[55%]'>
          <BsQuestion className='w-[12rem] h-[12rem] mx-auto' />
          <span className='text-[3.2rem]'>404 NOT FOUND</span>
          <span>お探しのページまたはコンテンツは見つかりませんでした。</span>
        </CenterBox>
      </Section>
    </MainTemplate>
  )
}

export default Error
