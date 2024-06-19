import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const _layout = () => {
  return (
    <View
    className='mt-40'>
      <Text className='text-center text-3xl'>Welcom to Aora app</Text>
      <StatusBar style='auto' />
      <Link href={'/home'} className='text-center mt-7 text-xl'>Go to hOME</Link>
    </View>
  )
}

export default _layout