import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

type CustomButton = {
	title: string;
	handlePress: () => void;
	containerStyles: string;
	textStyles?: string;
	isLoading?: boolean;
};

const CustomButton = ({
	title,
	handlePress,
	containerStyles,
	textStyles,
	isLoading,
}: CustomButton) => {
	return (
		<TouchableOpacity
			onPress={handlePress}
			className={`bg-secondary-100 rounded-xl min-h-[62px] items-center justify-center ${containerStyles} ${isLoading ? "opacity-50" : ""}`}
			activeOpacity={0.7}
			disabled={isLoading}
		>
			<Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
