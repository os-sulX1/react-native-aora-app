import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "@/components/SearchInput";
import EmptyState from "@/components/EmptyState";
import {  getUserPosts, searchPosts } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import VideoCard from "@/components/VideoCard";
import { useLocalSearchParams } from "expo-router";
import { useGlobalContext } from "@/context/GlobalProvider";
import { icons } from "@/constants";
import InfoBox from "@/components/infoBox";

const Profile = () => {
  const {user ,  isLoggedIn ,setUser} = useGlobalContext()
  const { data: posts } = useAppwrite(()=>getUserPosts(user?.$id))

  const logout = ()=>{}
  


	return (
		<SafeAreaView className="bg-primary h-full">
			<FlatList
				data={posts}
				keyExtractor={(item) => item.$id}
				renderItem={({ item }) => (
					<VideoCard video={item} />
				)}
				ListHeaderComponent={() => (
					<View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity className="w-full mb-10 items-end" onPress={logout}>
              <Image source={icons.logout}  resizeMode="contain" className="w-6 h-6" />
            </TouchableOpacity>
            <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
<Image source={{uri: user.avatar}} className="w-[90%] h-[90%] rounded-lg" resizeMode="cover" />
            </View>
            <InfoBox 
            title={user?.username}
            containerStyle="mt-5"
            titleStyle="text-lg"
             />
            <View className="flex-row items-center justify-center">
            <InfoBox 
            title={posts?.length || 0}
            subtitle="Posts"
            containerStyle="mr-10"
            titleStyle="text-xl"
             />
               <InfoBox 
            title={'3.2k'}
            subtitle="Followers"
            titleStyle="text-xl"
             />
            </View>
          </View>
				)}
        ListEmptyComponent={()=>(
         <EmptyState subtitle="No Videos Found for this search query" title="No Videos Found "/>
        )}
       
			/>
		</SafeAreaView>
	);
};

export default Profile;
