import React, { useCallback, useState } from "react";
import "./Product.css";
import Progressbar from "../ProgressBar";
import buttonIcon from "../../images/chevron.svg";

const Product = (props) => {
  const { title, cardImg, type, codes, count } = props;
  const [isShowList, setShowList] = useState(false);

  const handleShowList = useCallback(() => {
    setShowList((prevState) => !prevState);
  }, []);
  return (
    <div className="product">
      <ul className="product-container">
        <li className="product-container__item">
          <img src={cardImg} alt={title} className="product-container__image" />
          <h4 className="product-container__title">
            {title}
            <span className="product-container__param">{type}</span>
          </h4>
          <span className="product-container__count">
            <Progressbar value={1} maxValue={count} type="goods" />
          </span>
          {codes.length <= 1 ? (
            <button className="product-container__barcode">{codes[0]}</button>
          ) : (
            <button
              type="button"
              onClick={handleShowList}
              className="product-container__barcode"
            >
              Свернуть
              <span>
                <img
                  className={
                    isShowList
                      ? "product-container__barcode-icon"
                      : "product-container__barcode-icon product-container__barcode-icon_active"
                  }
                  src={buttonIcon}
                  alt=""
                />
              </span>
            </button>
          )}
        </li>
      </ul>
      {isShowList && codes.length > 1 && (
        <ul className="product-container__barcode-list">
          <li className="product-container__item product-container__barcode-list-item">
            <span className="product-container__count product-container__count_separate">
              <Progressbar value={1} maxValue={1} type="goods" />
            </span>
            <button className="product-container__barcode">{codes[1]}</button>
          </li>
          <li className="product-container__barcode-list-item">
            <span className="product-container__count product-container__count_separate">
              <Progressbar value={0} maxValue={1} type="goods" />
            </span>
            <button className="product-container__barcode">{codes[2]}</button>
          </li>
          <li className="product-container__barcode-list-item">
            <span className="product-container__count product-container__count_separate">
              <Progressbar value={0} maxValue={1} type="goods" />
            </span>
            <button className="product-container__barcode">{codes[3]}</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Product;