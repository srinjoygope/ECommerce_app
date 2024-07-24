import React from 'react'

const breadcum = (props) => {
    const {product} = props

  return (
    <>
        <div className="breadcum">
            {product?.name}
        </div>
    </>
  )
}

export default breadcum