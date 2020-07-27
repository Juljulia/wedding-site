import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardStyled = styled.div`
    margin: 10px;
    width: 400px;
    min-height: 525px;
    background-color: #FBFAF8;
    border-radius: 4px;

    img {
        width: 100%;
        height: 300px;
        display: block;
        object-fit: cover;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    .text-content {
      padding: 20px;
      letter-spacing: 0.5px;
      line-height: 24px;
    }
  `;

const Card = (props) => {
  return (
    <CardStyled {...props}>
      <img src={props.image} alt="" />
      <div className="text-content">
        <h2>{props.title}</h2>
        {props.text}
      </div>
    </CardStyled>
  );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.array,
  };

export default Card;
