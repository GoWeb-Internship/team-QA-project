import React from 'react'
import home from '../images/Home.svg'
import homeGray from '../images/HomeGray.svg'
import next from '../images/Next.svg'
import nextGray from '../images/NextGray.svg'

const Breadcrumb = ({ title, name }) => {
  return (
    <div className="flex items-baseline font-inter font-medium text-sm text-stone-900">
      {name ? (
        <>
          <a href="/">
            <img src={homeGray} width="18" height="18" alt="home" />
          </a>
          <img
            className="ml-2"
            src={nextGray}
            width="6"
            height="9"
            alt="next"
          />
        </>
      ) : (
        <>
          <a href="/">
            <img src={home} width="18" height="18" alt="home" />
          </a>
          <img className="ml-2" src={next} width="6" height="9" alt="next" />
        </>
      )}
      {name && (
        <>
          <span className="ml-2 text-[#B3B3B3]">{name}</span>
          <img
            className="ml-2"
            src={nextGray}
            width="6"
            height="9"
            alt="next"
          />
          <span className="ml-2">{title}</span>
        </>
      )}
    </div>
  )
}

export default Breadcrumb
