import React from 'react';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={styles.loadMoreBtn} onClick={onClick} type="button">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
