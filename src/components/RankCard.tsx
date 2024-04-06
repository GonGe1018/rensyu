import styled from "styled-components/native";
import React, { ReactNode } from "react";
import RestaurantCard from "./RestaurantCard";


const RankCard = () => {
  return (
    <RankCardContainer>
      <RestaurantCard
        name={'이자와 숙대입구점'}
        adress={'서울특별시 강서구 양천로 47길 36'}
        rating={'4.0'}
        reviews={'130'}
        distance={'45'}
        type={1}
      />
      <RestaurantCard
        name={'이자와 숙대입구점'}
        adress={'서울특별시 강서구 양천로 47길 36'}
        rating={'4.0'}
        reviews={'130'}
        distance={'45'}
        type={1}/>
      <RestaurantCard
        name={'이자와 숙대입구점'}
        adress={'서울특별시 강서구 양천로 47길 36'}
        rating={'4.0'}
        reviews={'130'}
        distance={'45'}
        type={1}/>
    </RankCardContainer>
  );
};

const RankCardContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;



//const Description
export default RankCard;
