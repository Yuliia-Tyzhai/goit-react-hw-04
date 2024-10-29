import React from 'react';
import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ImageGallery = ({ images, isLoading, isError, onImageClick }) => {
  return (
    <div className={styles.photoPage}>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ul className={styles.list}>
        {images !== null &&
          images.map(item => {
            return (
              <li
                className={styles.listItem}
                key={item.id}
                className={styles.listItem}
              >
                <ImageCard image={item} onImageClick={onImageClick} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageGallery;
