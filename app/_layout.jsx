import React from 'react'
import { Stack } from 'expo-router'
import { LogBox } from 'react-native'

export default function Layout() {
  LogBox.ignoreLogs(["Warning: Failed prop type"])
  return (
    <Stack screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name='exercises' options={{presentation:'fullScreenModal'}} />
      <Stack.Screen name='exerciseDetails' options={{presentation:'modal'}} />
    </Stack>
  )
}