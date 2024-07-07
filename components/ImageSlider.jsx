import { View, Text } from 'react-native'
import React from 'react';
import Carousel,{ParallaxImage} from 'react-native-snap-carousel';
import { sliderImages } from '../constants';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Asset } from 'expo-asset';


export default function ImageSlider() {
  console.log(sliderImages);
  return (
    <Carousel
      data={sliderImages}
      loop={false}
      autoplay={true}
      renderItem={renderItem}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      itemWidth={wp(100) - 70}
      autoplayInterval={4000}
      slideStyle={{ display: 'flex', alignItems: 'center' }}
    />
  )
}

const renderItem = ({ item, index }, parallaxProps) =>{
  // console.log('item',item);
    return(
        <View style={{width: wp(100)-70,height: hp(25)}}>
            <ParallaxImage
          source={{ uri: item }}
          containerStyle={{ borderRadius: 30, flex: 1 }}
          style={{ resizeMode: 'contain' }}
          parallaxFactor={0.4} // Adjust parallaxFactor as per your requirement
          {...parallaxProps}
        />
        </View>
    )
}