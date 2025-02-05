import React from "react";
import "./DescriptionBox.scss";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiStar } from "react-icons/ci";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const renderStars = (rating, color) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;

  return (
    <>
      {Array(fullStars)
        .fill()
        .map((_, index) => (
          <FaStar key={`full-${index}`} color={color} />
        ))}
      {Array(emptyStars)
        .fill()
        .map((_, index) => (
          <FaRegStar key={`empty-${index}`} color={color} />
        ))}
    </>
  );
};

const DescriptionBox = ({ description, features, review, reviewDetail }) => {
  const starColor = "#808080";
  const [activeState, setActiveState] = useState(1);

  const activeTab = (index) => {
    setActiveState(index);
  };
  return (
    <div id="description-box">
      <div className="description-navigator">
        <div
          className={
            activeState === 1
              ? "description-nav-box active-tabs"
              : "description-nav-box"
          }
          onClick={() => activeTab(1)}
        >
          <HiOutlineDotsHorizontal />
          <p>Details</p>
        </div>
        <div
          className={
            activeState === 2
              ? "description-nav-box active-tabs"
              : "description-nav-box"
          }
          onClick={() => activeTab(2)}
        >
          <CiStar />
          <p>Reviews</p>
        </div>
      </div>

      <div
        className={
          activeState === 1
            ? "description-features active-content"
            : "description-features"
        }
      >
        <h5>Detail</h5>
        <div className="description-features-wrapper">
          <div className="description-box-description">{description}</div>
          {features && (
            <div className="description-box-features">
              {features.map((feature, index) => (
                <p key={index} className="features-box">
                  {feature}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* <div
        className={
          activeState === 2
            ? "reviews-content active-content"
            : "reviews-content"
        }
      >
        <h5>Reviews</h5>
        <div className="review-detail-wrapper"></div>
      </div> */}
      <div
        className={
          activeState === 2
            ? "reviews-content active-content"
            : "reviews-content"
        }
      >
        <h5>Reviews</h5>
        <div className="review-detail-wrapper">
          {review ? (
            <>
              <div className="review-scores">
                <h2 className="review1">{review.review1}</h2>
                <p className="review2">- {review.review2}</p>
              </div>
              <Link to="">
                {" "}
                <div className="review-cta">Write a review</div>
              </Link>
              <div className="review-sort">
                <p>
                  SORT BY{" "}
                  <span>
                    {" "}
                    <IoIosArrowDown />
                  </span>
                </p>
              </div>
              {reviewDetail && reviewDetail.length > 0 ? (
                reviewDetail.map((detail, index) => (
                  <div className="review-details-container">
                    <div className="review-details">
                      <div className="shortname">
                        <p className="reviewer-shortname">{detail.shortName}</p>
                      </div>
                      <div className="reviewer-detail">
                        <p className="reviewer-name">{detail.reviewerName}</p>
                        <p className="review-time">{detail.time}</p>
                        <p className="review-text">{detail.reviewText}</p>
                      </div>
                    </div>
                    <div className="reviewer-ratings">
                      {renderStars(detail.rating, starColor)}
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-reviews">No detailed reviews available.</p>
              )}
            </>
          ) : (
            <p className="no-reviews">Not yet rated.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
