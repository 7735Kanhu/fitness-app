import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'expo-image';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from "react-native-vector-icons/Ionicons";
import { ScrollView } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function exerciseDetails() {
    const item =useLocalSearchParams();
    const router=useRouter();
    // console.log(item,'itemsss',router);
  return (
    <View className="flex flex-1">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image source={{uri:item?.gifUrl}} contentFit='cover' style={{width:wp(100),height:wp(100)}} className="rounded-b-[40]"/>
      </View>
      <TouchableOpacity onPress={()=>router.back()} className="mx-2 absolute rounded-full mt-4 right-0">
          <Ionicons name="close-circle-sharp" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>
      {/* details */}
      <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:60}}>
        <Animated.Text entering={FadeInDown.delay(100).duration(300).springify()} style={{fontSize:hp(3.5)}} className="font-semibold text-neutral-800 tracking-wide">
          {item.name}
        </Animated.Text>
        <Animated.Text entering={FadeInDown.duration(300).springify()} style={{fontSize:hp(2)}} className=" text-neutral-800 tracking-wide">
          Equipment <Text className="font-bold text-neutral-700">{item?.equipment}</Text>
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(200).duration(300).springify()} style={{fontSize:hp(1.5)}} className=" text-neutral-800 tracking-wide">
          Secondary Muscles <Text className="font-bold text-neutral-700">{item?.secondaryMuscles}</Text>
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(300).duration(300).springify()} style={{fontSize:hp(2)}} className=" text-neutral-800 tracking-wide">
          Target <Text className="font-bold text-neutral-700">{item?.target}</Text>
        </Animated.Text>
        <Animated.Text entering={FadeInDown.delay(400).duration(300).springify()} style={{fontSize:hp(3)}} className=" text-neutral-800 tracking-wide">
          Instructions
        </Animated.Text>
        {
          item.instructions.split(',').map((instruction,index)=>{
            return (
              <Animated.Text entering={FadeInDown.delay((index+6)*100).duration(300).springify()} key={instruction} style={{fontSize:hp(1.7)}} className="text-neutral-800">{instruction}</Animated.Text>
            )
          })
        }
      </ScrollView>
    </View>
  )
}