import React from 'react'
import Product from '@/app/pageComponents/Product/page'
import Header from '../pageComponents/Header/page'

const Page = () => {
  return (
    <main>
      <Header />
      {/* Add margin to Product */}
      <div style={{ marginTop: '40px' }}> {/* Adjust value as needed */}
        <Product />
      </div>
    </main>
  )
}

export default Page
