import styled from "styled-components/native";
import React, { ReactNode } from "react";
import RestaurantCard from "./RestaurantCard";

const RecommendCard = () => {
  return (
    <RecommendCardContainer>
      <RestaurantCardRow>
        <RestaurantCard
          name={'이자와 숙대입구점'}
          adress={'서울특별시 강서구 양천로 47길 36'}
          rating={'4.0'}
          reviews={'130'}
          distance={'45'}
          type={2}
        />
        <RestaurantCard
          name={'이자와 숙대입구점'}
          adress={'서울특별시 강서구 양천로 47길 36'}
          rating={'4.0'}
          reviews={'130'}
          distance={'45'}
          type={2}
        />
      </RestaurantCardRow>
      <RestaurantCardRow>
        <RestaurantCard
          name={'이자와 숙대입구점'}
          adress={'서울특별시 강서구 양천로 47길 36'}
          rating={'4.0'}
          reviews={'130'}
          distance={'45'}
          type={2}
        />
        <RestaurantCard
          name={'이자와 숙대입구점'}
          adress={'서울특별시 강서구 양천로 47길 36'}
          rating={'4.0'}
          reviews={'130'}
          distance={'45'}
          type={2}
        />
      </RestaurantCardRow>
    </RecommendCardContainer>
  );
};


const RecommendCardContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 46px;
  align-self: stretch;
`;

const RestaurantCardRow = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  flex-direction: row;
`

export default RecommendCard;
