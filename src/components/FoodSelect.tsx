import styled from "styled-components/native";
import React, { ReactNode, useState } from "react";
import HoduIcon from "../assets/food_icon/hodu.svg"
import SusiIcon from "../assets/food_icon/susi.svg"
import ToastIcon from "../assets/food_icon/toast.svg"
import CoffeeIcon from "../assets/food_icon/coffee.svg"
import SandwichIcon from "../assets/food_icon/sandwich.svg"
import CornIcon from "../assets/food_icon/corn.svg"
import PeperoniIcon from "../assets/food_icon/peperoni.svg"
import PizzaIcon from "../assets/food_icon/pizza.svg"


interface FoodButtonProps{
  name:string;
  children:React.ReactNode;
}

const FoodSelect = () => {

  const [currentCategory, setCurrentCategory] = useState('일식');

  const FoodButton = ({name,children}:FoodButtonProps) => {

    const ButtonColor = (currentCategory == name) ? '#F1F1F5' : '#FFFFFF';
    const TextColor = (currentCategory == name) ? '#111' : '#767676'

    return(
      <FoodButtonContainer style={{ backgroundColor : ButtonColor }} onPress={ () => setCurrentCategory(name) }>
        {children}
        <FoodButtonText style={{ color : TextColor }} >{name}</FoodButtonText>
      </FoodButtonContainer>
    );
  };

  return (
    <FoodSelectContainer>
      <ButtonRow>
        <FoodButton name={'한식'}>
          <HoduIcon/>
        </FoodButton>
        <FoodButton name={'일식'}>
          <SusiIcon/>
        </FoodButton>
        <FoodButton name={'중식'}>
          <ToastIcon/>
        </FoodButton>
        <FoodButton name={'카페'}>
          <CoffeeIcon/>
        </FoodButton>
      </ButtonRow>
      <ButtonRow>
        <FoodButton name={'분식'}>
          <SandwichIcon/>
        </FoodButton>
        <FoodButton name={'치킨'}>
          <CornIcon/>
        </FoodButton>
        <FoodButton name={'양식'}>
          <PeperoniIcon/>
        </FoodButton>
        <FoodButton name={'피자'}>
          <PizzaIcon/>
        </FoodButton>
      </ButtonRow>
    </FoodSelectContainer>
  );
};


const FoodSelectContainer = styled.View`
  display: flex;
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

const ButtonRow = styled.View`
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  flex-direction: row;
`;

const FoodButtonContainer = styled.TouchableOpacity`
  display: flex;
  padding: 8px 23px;
  align-items: center;
  border-radius: 10px;
`

const FoodButtonText = styled.Text`
  color: #767676;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.35px;
`;


export default FoodSelect;
