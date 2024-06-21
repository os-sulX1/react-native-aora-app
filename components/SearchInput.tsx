import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import images from '@/constants/images'
import icons from '@/constants/icons'
import { router, usePathname } from 'expo-router'
type FormField={
  title:string,
  value:string
  placeholder?:string,
  handleChangeText?:(text: string) => void,
  otherStyles:string,
  keyboardType?:string
}
//{title,handleChangeText ,otherStyles ,placeholder ,value,...props}:FormField

const SearchInput = ({initialQuery}:string | string[] | undefined) => {
  const pathname = usePathname()
  const [query, setQuery] = useState(initialQuery || '')
  return (
 
      <View className='w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-2xl focus:border-secondary-100 items-center flex-row space-x-4'>
      <TextInput 
      className=' text-base mt-0.5 text-white flex-1 font-pregular'
      placeholder='Search for a video topic'
      placeholderTextColor={'#CDCDE0'}
      onChangeText={(e) => setQuery(e)}
      value={query as string} 
      />  
      <TouchableOpacity onPress={()=>{
        if(!query){
          Alert.alert('Missing Query','Please input something to search result across database ')
        }
        if(pathname.startsWith('/search')){
          router.setParams({query})
        } else router.push(`/search/${query}`)
      }}>
        <Image source={icons.search}
        className='w-5 h-5' 
        resizeMode='contain'/>
      </TouchableOpacity>
   
      </View>
  )
}

export default SearchInput