import React from "react";
import { SafeAreaView } from "react-native";
import { Button, Text } from "react-native-paper";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text variant="headlineLarge">Headline Large</Text>
      <Text variant="headlineMedium">Headline Medium</Text>
      <Text variant="headlineSmall">Headline Small</Text>
      {/* Insert other components and layout here */}
      <Text>welcome to our kenyanet app</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
