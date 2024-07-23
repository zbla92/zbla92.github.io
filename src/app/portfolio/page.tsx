/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import ImageLightbox from 'react-18-image-lightbox';

import styles from './Portfolio.module.css';

// Sample images
const vivantImages = [
  '/vivant/vivant1.webp',
  '/vivant/vivant2.webp',
  '/vivant/vivant3.webp',
  '/vivant/vivant4.webp',
  '/vivant/vivant5.webp',
  '/vivant/vivant6.jpg',
  '/vivant/vivant7.jpg',
  '/vivant/vivant8.jpg',
  '/vivant/vivant9.jpg',
  '/vivant/vivant10.jpg',
  '/vivant/vivant11.jpg',
  '/vivant/vivant12.jpg',
  '/vivant/vivant13.jpg',
  '/vivant/vivant14.jpg',
];

const sparwkImages = ['/vivant/sparwk1.jpg', '/vivant/sparwk2.jpg', '/vivant/sparwk3.jpg'];

const Portfolio = () => {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  const openLightbox = (images: string[], index: number) => {
    setPhotoIndex(index);
    setCurrentImages(images);
    setPhotoIndex(1);
    setTimeout(() => {
      setPhotoIndex(0);
    }, 100);
  };

  const closeLightbox = () => {
    setPhotoIndex(null);
  };

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>Vivant</h2>
        <p>
          Vivant is a React Native application used for video streaming content with WebRTC. It features a monorepo
          setup, custom hooks for shared logic between React and React Native, and is optimized for a smooth experience
          across various devices.
        </p>
        <div className={styles.gallery}>
          <img
            key={0}
            src={vivantImages[0]}
            alt={`Vivant Image `}
            onClick={() => openLightbox(vivantImages, 0)}
            className={styles.image}
          />
        </div>
        {photoIndex !== null && (
          <ImageLightbox
            key={1}
            mainSrc={currentImages[photoIndex]}
            nextSrc={currentImages[(photoIndex + 1) % currentImages.length]}
            prevSrc={currentImages[(photoIndex + currentImages.length - 1) % currentImages.length]}
            onCloseRequest={closeLightbox}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + currentImages.length - 1) % currentImages.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % currentImages.length)}
            onImageLoadError={() => {
              console.error('Image load error');
            }}
          />
        )}
      </section>

      {/* <section className={styles.section}>
        <h2>Sparwk</h2>
        <p>
          Sparwk is an MVP developed for the music industry, focused on artist credit claiming. It includes features
          like identity verification, push notifications, and deployment automation.
        </p>
        <div className={styles.gallery}>
          {sparwkImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Sparwk Image ${index + 1}`}
              onClick={() => openLightbox(sparwkImages, index)}
              className={styles.image}
            />
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Portfolio;
