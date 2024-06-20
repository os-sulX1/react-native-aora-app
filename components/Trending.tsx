import {
	View,
	Text,
	FlatList,
	TouchableOpacity,
	Image,
	ImageBackground,
	Modal,
} from "react-native";
import React, { useState } from "react";
//import * as Animatable from 'react-native-animatable'
const zoomIn = {
	0: {
		scale: 0.9,
	},
	1: {
		scale: 1,
	},
};

const zoomOut = {
	0: {
		scale: 1,
	},
	1: {
		scale: 0.9,
	},
};
{/** const TrendingItem = ({ activeItem , item }) => {
	const [paly, setPaly] = useState(false);
	return (
		<Animatable.View
			className="mr-5"
			animation={activeItem === item.$id ? zoomIn : zoomOut}
			duration={500}
		>
			{paly ? (
				<Text className="text-white">Playing</Text>
			) : (
				<TouchableOpacity
					className="relative justify-center items-center"
					activeOpacity={0.7}
					onPress={() => setPaly(true)}
				>
					<ImageBackground
						source={{ uri: item.thumbnail }}
						className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
						resizeMode="contain"
					/>
				</TouchableOpacity>
			)}
		</Animatable.View>
	);
};*/}



const Trending = ({ posts }) => {
	const [activeItem, setActiveItem] = useState(posts[0]);
	return (
		<FlatList
			data={posts ?? []}
			keyExtractor={(item) => item.$id}
			
			horizontal
		/>
	);
};

export default Trending;