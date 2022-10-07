import React from 'react'

const SectionTitle = ({subtitle, title}) => {
  return (
    <>
    <div className='section-title-wrap text-center mb-4 mb-md-5'>
        <h2 className='section-title font-weight-bold text-uppercase mb-0'>
           <strong>
            <span className='text-special'>{subtitle} </span>
            {title}
           </strong>
        </h2>
    </div>
    </>
  )
}

export default SectionTitle