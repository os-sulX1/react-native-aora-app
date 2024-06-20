import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";
import { Link, router } from "expo-router";
//import { getCurrentUser, signIn } from "@/lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";

const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:'',
  })
  const {setUser ,setIsLoggedIn} = useGlobalContext()

  const submit = async()=>{
  

  }
  const [isSubmitting, setIsSubmitting] = useState(false)

	return (
		<SafeAreaView className="bg-primary h-full">
			<ScrollView>
				<View className=" w-full min-h-[83vh] justify-center px-4 my-6">
					<Image
						source={images.logo}
						className="w-115px h-[35px]"
						resizeMode="contain"
					/>
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">Log in to Aora
          </Text>
          <FormField
          title='Email'
          value={form.email}
          handleChangeText={e=>setForm({...form,email:e})}
          otherStyles='mt-7'
          keyboardType='email-address' />
          <FormField
          title='Password'
          value={form.password}
          handleChangeText={e=>setForm({...form,password:e})}
          otherStyles='mt-7'
           />
           <CustomButton
           title="Sign in" 
           containerStyles="mt-7"
           handlePress={submit}
           isLoading={isSubmitting}
           textStyles=""
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-pregular">
                Don't have account?
              </Text>
    <Link href={'/sign-up'} className="text-lg font-psemibold text-secondary">Sing Up</Link>
            </View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SignIn;
