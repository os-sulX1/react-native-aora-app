import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'
type FormField={
  title:string,
  value:string
  placeholder?:string,
  handleChangeText:(text: string) => void,
  otherStyles:string,
  keyboardType?:string
}

const FormField = ({title,handleChangeText ,otherStyles ,placeholder ,value,...props}:FormField) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>
      {title}
      </Text>
      <View className='w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary-100 items-center flex-row'>
      <TextInput 
      className='flex-1 text-white font-psemibold text-base w-full'
      placeholder={placeholder}
      placeholderTextColor={'#7b7b8b'}
      onChangeText={handleChangeText}
      secureTextEntry={title=== 'Password' && !showPassword } />

      {title === 'Password' && (
        <TouchableOpacity 
        onPress={()=>setShowPassword
          (!showPassword)
         } >
          <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-' resizeMode='contain' />
         </TouchableOpacity>
      )}
      </View>
    </View>
  )
}

export default FormField