import React from "react";

const Listing = ({ state, id, url, img, title, currency, price, quantity }) => {
  if (state === "removed") {
    return null;
  }

  const handleTitle = (title) =>
    title.length > 50 ? `${title.slice(0, 50)}...` : title;

  const handleCurrency = (currency) => {
    switch (currency) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      default:
        return "GBR ";
    }
  };

  const handleQuantity = (level) => {
    if (level < 10) {
      return "low";
    } else if (level <= 20) {
      return "medium";
    } else {
      return "high";
    }
  };

  return (
    <div key={id} className="item">
      <div className="item-image">
        <a href={url}>
          <img src={img} alt={title} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{handleTitle(title)}</p>
        <p className="item-price">
          {handleCurrency(currency)}
          {price}
        </p>
        <p className={`item-quantity level-${handleQuantity(quantity)}`}>
          {console.log(quantity)}
          {quantity} left
        </p>
      </div>
    </div>
  );
};

export default Listing;
