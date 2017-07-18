import React from 'react';
import { Image, ScrollView } from 'react-native';


const img1 = require('../../assets/NY1.jpg');
const img2 = require('../../assets/NY2.jpg');
const img3 = require('../../assets/NY3.jpg');

export default function SampleJsx() {
  const monComposant = (
    <Image source={img1} />
  );

  const images = [
    <Image key="1" source={img1} />,
    <Image key="2" source={img2} />,
    <Image key="3" source={img3} />,
    <Image key="4" source={img1} />,
    <Image key="5" source={img2} />,
    <Image key="6" source={img3} />,
  ];

  return (
    <ScrollView horizontal>
      {monComposant}
      {images}
    </ScrollView>
  );
}

