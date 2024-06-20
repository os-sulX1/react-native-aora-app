import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'
type FormField={
  title:string,
  value:string
  placeholder?:string,
  handleChangeText?:(text: string) => void,
  otherStyles:string,
  keyboardType?:string
}

const SearchInput = ({title,handleChangeText ,otherStyles ,placeholder ,value,...props}:FormField) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
 
      <View className='w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary-100 items-center flex-row space-x-4'>
      <TextInput 
      className=' text-base mt-0.5 text-white flex-1 font-pregular'
      placeholder={placeholder}
      placeholderTextColor={'#7b7b8b'}
      onChangeText={handleChangeText}
      secureTextEntry={title=== 'Password' && !showPassword } />
      <TouchableOpacity>
        <Image source={icons.search}
        className='w-5 h-5' 
        resizeMode='contain'/>
      </TouchableOpacity>
   
      </View>
  )
}

export default SearchInput