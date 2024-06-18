import { Image, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import { Raleway_700Bold } from "@expo-google-fonts/raleway";
import { Nunito_400Regular, Nunito_700Bold } from "@expo-google-fonts/nunito";
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "@/styles/onBoarding/onBoard";
import { router } from "expo-router";

export default function OnBoardingScreen() {
	let [fontsLoaded, fontError] = useFonts({
		Raleway_700Bold,
		Nunito_400Regular,
		Nunito_700Bold,
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<LinearGradient colors={["#E5ECF9", "#F6F7F9"]} style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<View style={styles.firstContainer}>
				<View>
					<Image style={styles.logo} source={require("@/assets/logo.png")} />
					<Image source={require("@/assets/onboarding/shape_9.png")} />
				</View>
				<View style={styles.titleWrapper}>
					<Image style={styles.titleTextShape1} source={require("@/assets/onboarding/shape_3.png")} />
					<Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>Start Learning with</Text>
					<Image style={styles.titleTextShape2} source={require("@/assets/onboarding/shape_2.png")} />
				</View>
				<View>
					<Image style={styles.titleTextShape3} source={require("@/assets/onboarding/shape_6.png")} />
					<Text style={[styles.titleText, { fontFamily: "Raleway_700Bold" }]}>Learny</Text>
				</View>
				<View style={styles.dscWrapper}>
					<Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>Explore a variety of interactive lesson,</Text>
					<Text style={[styles.dscpText, { fontFamily: "Nunito_400Regular" }]}>videos, quizzes & Assignments</Text>
				</View>
				<TouchableOpacity style={styles.buttonWrapper} onPress={() => router.push("/(routes)/welcome-intro")}>
					<Text style={[styles.buttonText, { fontFamily: "Nunito_700Bold" }]}>Getting Started</Text>
				</TouchableOpacity>
			</View>
		</LinearGradient>
	);
}
