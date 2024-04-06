import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  useColorScheme,
} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";
import Header from './src/components/Header';
import Section from "./src/components/Section";
import RankCard from "./src/components/RankCard";
import MoreButton from "./src/components/MoreButton";
import styled from "styled-components/native";
import FoodSelect from "./src/components/FoodSelect";
import RecommendCard from "./src/components/RecommendCard";

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#FFFFFF',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header/>
      <SectionGroup contentContainerStyle={{
        gap : 38,
        paddingTop : 32
      }}>

        <Section title={'우리 동네 인기 식당 TOP 3'} description={'내 변에 이런 곳도 있었어?\n' +
          '내 주변 식당을 찾아보세요'}>
          <RankCard/>
          <MoreButton/>
        </Section>

        <DivideBar/>

        <Section title={'우리 동네 식당'} description={'뭘 먹을지 모르겠다고요? \n'+
          '지금 가장 핫한 식당을 살펴보세요!'}>
          <FoodSelect/>
          <RecommendCard/>
        </Section>

        <DivideBar/>

      </SectionGroup>
    </SafeAreaView>
  );
}

const SectionGroup = styled.ScrollView`
  display: flex;
  width: 390px;
  flex-direction: column;
`;

const DivideBar = styled.View`
  height: 8px;
  width: 100vw;
  background: #F1F1F5;
`;

export default App;
