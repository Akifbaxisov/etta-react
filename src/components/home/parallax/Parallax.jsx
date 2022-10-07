import React from 'react'
import SectionTitle from '../sectiontitle/SectionTitle'

const Parallax = () => {
  return (
    <>
          <section className="parallax-section py-4 py-md-5" style={{backgroundImage : "url(" + "https://etta.az/storage/upload/homepage-content/parallax-1630489026.jpg" + ")"}}>
              <div className="container-xl">
                  <div className="section-title-wrap text-center text-white mb-4 mb-md-5 wow flipInX">
                      <SectionTitle subtitle='BİZDƏN ALMAQ' title='ÇOX SƏRFƏLİDİR'/>
                      <p className="text-white mb-0 mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur dolorum excepturi, id odit quo.
                      </p>
                  </div>
              </div>
          </section>
    </>
  )
}

export default Parallax