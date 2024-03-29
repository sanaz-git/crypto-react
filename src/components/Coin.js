import React from 'react';

//styles
import styles from '../components/Coin.module.css';

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt={name} />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.currentPrice}>$ {price.toLocaleString()}</span>
      <span
        className={
          priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange
        }
      >
        {Math.round(priceChange * 100) / 100}
      </span>
      <span className={styles.marketCap}>$ {marketCap.toLocaleString()}</span>
    </div>
  );
};

export default Coin;
