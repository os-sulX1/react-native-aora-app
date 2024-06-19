import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const TabsLayout = () => {
  return (
   <SafeAreaView className='h-full'>
    <Tabs>
      <Tabs.Screen name='home'/>

    </Tabs>
   </SafeAreaView>
  )
}

export default TabsLayout