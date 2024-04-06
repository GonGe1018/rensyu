import styled from "styled-components/native";
import React, { ReactNode } from "react";
import RatingStartIcon from "../assets/rating_star_icon.svg"
import MarkerIcon from "../assets/marker_icon.svg"
import { StyleSheet, Text } from "react-native";


interface Props
{
  name:string;
  adress:string;
  rating:string;
  reviews:string;
  distance:string;
  type:number;
}

const RestaurantCard = ({name,adress,rating,reviews,distance,type}:Props) => {


  return (
    <CardContainer
      style={(type == 1) ? cardStyles.v1 : cardStyles.v2}
    >
      <Thumbnail
        style={(type == 1) ? thumbnailStyles.v1 : thumbnailStyles.v2}
        source={require('../assets/gyukatsu.png')}/>
      <DescriptionGroup>
        <NameText>{name}</NameText>
        <AdressText>{adress}</AdressText>
        <RationgGroup>
          <RatingStartIcon/>
          <RatingText>{rating}점</RatingText>
          <ReviewsText>({reviews})</ReviewsText>
        </RationgGroup>
        <PositionGroup>
          <MarkerIcon/>
          <PositionText>{distance}m</PositionText>
        </PositionGroup>
      </DescriptionGroup>
    </CardContainer>
  );
};

const cardStyles = StyleSheet.create({
  v1: {
    gap: 20,
    flexDirection: 'row',
  },
  v2: {
    gap: 16,
    flexDirection: 'column',
  },
});

const thumbnailStyles = StyleSheet.create({
  v1: {
    width: 110,
    height: 110,
  },
  v2: {
    width: '100%',
    height: 163,
  },
});


const CardContainer = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  flex-direction: row;
  flex: 1 0 0;
  
  //flex-direction: column;
  //gap: 16px;
`

const Thumbnail = styled.Image`
  width: 110px;//height: 163px;
  height: 110px;//width: 100%;
  border-radius: 12px;
`;

const DescriptionGroup = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1 0 0;
`;

const NameText = styled.Text`
  color: #222;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 21.6px */
  letter-spacing: -0.45px;
`
const AdressText = styled.Text`
  color: #767676;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 16.8px */
  letter-spacing: -0.35px;
`;

const RationgGroup = styled.View`
  display: flex;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  flex-direction: row;
`;

const RatingText = styled.Text`
  color: #3DAB55;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.35px;
`;

const ReviewsText = styled.Text`
  color: #767676;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.35px;
`;

const PositionGroup = styled.View`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-direction: row;
`;

const PositionText = styled.Text`
  color: #8D8D8D;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.35px;
`;

export default RestaurantCard;
