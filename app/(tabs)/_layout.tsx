import { View, Text, Image, type ImageSourcePropType } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "@/constants";

type TabIcon = {
	icon: ImageSourcePropType | undefined;
	color: string;
	name: string;
	focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: TabIcon) => {
	return (
		<View className=" items-center justify-center gap-1">
			<Image source={icon} resizeMode="contain" tintColor={color} className="w-6 h-6" />
      <Text className={`${focused ? 'font-extrabold' : 'font-normal'}`}  style={{color:color}}>{name}</Text>
		</View>
	);
};

const TabsLayout = () => {
	return (
		<SafeAreaView className="h-full">
			<Tabs screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:'#FFA001',
        tabBarInactiveTintColor:'#CDCDE0',
        tabBarStyle:{
          backgroundColor:'#161622',
          borderTopColor:'#232533',
					borderWidth:1,
					height:84
        }
      }}>
        {/**tab screen 1 */}
				<Tabs.Screen
					name="home"
					options={{
						title: "Home",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.home}
								name="Home"
								color={color}
								focused={focused}
							/>
						),
					}}
				/>
          {/**tab screen 2 */}
				<Tabs.Screen
					name="bookmark"
					options={{
						title: "Bookmark",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.bookmark}
								name="Bookmark"
								color={color}
								focused={focused}
							/>
						),
					}}
				/>  {/**tab screen 3 */}
				<Tabs.Screen
					name="create"
					options={{
						title: "Create",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.plus}
								name="Create"
								color={color}
								focused={focused}
							/>
						),
					}}
				/>  {/**tab screen 1 */}
				<Tabs.Screen
					name="profile"
					options={{
						title: "Profile",
						headerShown: false,
						tabBarIcon: ({ color, focused }) => (
							<TabIcon
								icon={icons.profile}
								name="Profile"
								color={color}
								focused={focused}
							/>
						),
					}}
				/>
        
			</Tabs>
		</SafeAreaView>
	);
};

export default TabsLayout;
