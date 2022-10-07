
import React from 'react'
import blogdetalimg from '../../../images/blogdetail.png'

const BlogDetailContent = () => {
  return (
    <> 
          <section className="container-xl p-2 px-sm-3 py-sm-3 pb-lg-0 pt-lg-4">
              <div className="article detail bg-white shadow-sm rounded-lg overflow-hidden">
                  <figure className="embed-responsive embed-responsive-16by9 m-0">
                      <img src={blogdetalimg} alt="Bədən losyonu,bədən yağı,yoxsa hər ikisi?" width="285"
                          height="215" className="embed-responsive-item" />
                  </figure>

                  <header className="p-3 p-md-5 text-center mx-md-5">
                      <h1 className="article-title font-weight-bold">
                          Bədən losyonu,bədən yağı,yoxsa hər ikisi?
                      </h1>
                  </header>

                  <aside className="row no-gutters border-top border-bottom px-3 px-md-5 mx-md-5">
                      <div className="col-6 pt-2 pt-md-3">
                          <span className="mr-2">
                              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye mr-2" fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd"
                                      d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z" />
                                  <path fillRule="evenodd"
                                      d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                              </svg>
                              4
                          </span>
                      </div>
                      <div className="col-6 py-2 py-md-3 text-right">
                          <span className="ml-2">
                              01.09.2022 / 11:26
                              <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar-event ml-2"
                                  fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd"
                                      d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                  <path
                                      d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                              </svg>
                          </span>
                      </div>
                  </aside>

                  <div className="article-body p-3 p-md-4 px-md-5 mx-md-5">
                      <p className="description font-weight-bold">
                          <p>Əgər bədən nəmləndirilməsindən danışsaq, bunu etmək &uuml;&ccedil;&uuml;n parlaq yağlardan krem yağlarına qədər bir &ccedil;ox variant var. Məhsul se&ccedil;imi edərkən də hamının ağlında eyni fikirlərin olduğunu d&uuml;ş&uuml;n&uuml;r&uuml;k; "quruluğu aradan qaldırmaq, yumşaq tekstura, sağlam və canlı dəriyə sahib olmaq✨</p>
                          <p>&nbsp;</p>
                          <p>Nəmləndirici bədən kremlərinin əksəriyyəti iki n&ouml;və b&ouml;l&uuml;n&uuml;r: losyonlar və yağlar.&nbsp;</p>
                          <p>&nbsp;</p>
                          <p>▫️Su bədənə tez hopduğundan losyonlar dərinin səthini tez nəmləndirir və onun alt təbəqələrə dərindən n&uuml;fuz edir.</p>
                          <p>&nbsp;</p>
                          <p>▫️Bədən yağlarının isə losyonlardan fərqli olaraq tərkibində su yoxdur. Su tez bir zamanda məsamələrə n&uuml;fuz etdiyi &uuml;&ccedil;&uuml;n yağların b&ouml;y&uuml;k molekulları dəriyə hopmaq &uuml;&ccedil;&uuml;n daha &ccedil;ox vaxt tələb edir. Yağlar, həm&ccedil;inin dəriyə parıltı efekti bəxş etdiyi &uuml;&ccedil;&uuml;n cansız və quru dərini dərhal bərpa edir.&nbsp;</p>
                          <p>&nbsp;</p>
                          <p>Bəs sən hansından istifadə edirsən?👇🏼</p>
                      </p>
                  </div>
              </div>
          </section>
    </>
  )
}

export default BlogDetailContent