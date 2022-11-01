import React from 'react';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as s from '../styles/404.module.css';
import { Link } from 'gatsby';
import { BiChevronRight } from 'react-icons/bi';
import { StaticImage } from 'gatsby-plugin-image';
import useWindowResize from '../hooks/useWindowResize';

const NotFoundPage = function () {
  const width = useWindowResize();
  const { t } = useTranslation();
  const { oops, title, text, button } = t('404', { returnObjects: true });

  return (
    <section className={s.section}>
      {width < 768 ? (
        <StaticImage
          src="../images/404/FrameS.jpg"
          formats={['auto', 'webp', 'avif']}
          alt=""
          className={'block h-full w-full'}
          placeholder="blurred"
        />
      ) : width > 1280 ? (
        <StaticImage
          src="../images/404/FrameX.png"
          formats={['auto', 'webp', 'avif']}
          alt=""
          className={'block h-full w-full'}
          placeholder="blurred"
        />
      ) : (
        <StaticImage
          src="../images/404/FrameM.jpg"
          formats={['auto', 'webp', 'avif']}
          alt=""
          className={'block h-full w-full'}
          placeholder="blurred"
        />
      )}

      <div className={s.wrapper}>
        <h1 className={s.title}>
          {oops} <br /> {title}
        </h1>
        <p className={s.text}>{text}</p>
        <Link to="/" className={s.button}>
          <span className="mr-4">{button}</span>
          <BiChevronRight className={s.iconArrow} alt="home" />
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;

export const notFoundQuery = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
