import React from 'react'
import Hero from '../hero/hero'
import Popular from '../popular/popular'
import Offers from '../offers/offers'
import New_collections from '../new_collections/new_collections'
import News_update from '../news_update/news_update'

const shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <New_collections />
      <News_update />
    </>
  )
}

export default shop