import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
	firstContainer: {
		alignItems: "center",
		marginTop: 50,
	},
	logo: {
		width: wp("40%"),
		height: hp("30%"),
	},
	titleWrapper: {
		flexDirection: "row",
	},
	titleTextShape1: {
		position: "absolute",
		left: -28,
		top: -20,
	},
	titleTextShape2: {
		position: "absolute",
		right: -40,
		top: -20,
	},
	titleTextShape3: {
		position: "absolute",
		left: 60,
	},
	titleText: {
		fontSize: hp("4%"),
		textAlign: "center",
	},
	dscWrapper: {
		marginTop: 20,
	},
	dscpText: {
		textAlign: "center",
		color: "#575757",
		fontSize: hp("2%"),
	},
	buttonWrapper: {
		backgroundColor: "#2467EC",
		width: wp("92%"),
		paddingVertical: 13,
		borderRadius: 4,
		marginTop: 40,
	},
	buttonText: {
		color: "white",
		textAlign: "center",
	},
});
