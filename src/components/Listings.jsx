import React from "react";
import PropTypes from "prop-types";
import Listing from "./Listing";
import "../css/main.css";

const Listings = ({ data }) => {
  console.log(data);
  const listingsToRender = data.map(
    ({
      state,
      listing_id,
      url,
      MainImage,
      title,
      currency_code,
      price,
      quantity,
    }) => {
      if (state === "removed") return null;
      const { url_570xN: image } = MainImage;
      return (
        <Listing
          state={state}
          key={listing_id}
          url={url}
          img={image}
          title={title}
          currency={currency_code}
          price={price}
          quantity={quantity}
        />
      );
    }
  );
  return (
    <div className="wrapper">
      <div className="item-list">{listingsToRender}</div>
    </div>
  );
};

// Listings.propTypes = {
//   data: Object.isRequired,
// };

export default Listings;
