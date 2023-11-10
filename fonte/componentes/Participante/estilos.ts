import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
	recipiente: {
		width: "100%",
		backgroundColor: "#1F1E25",
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
    marginBottom: 8
	},
	nome: {
		flex: 1,
		color: "#FFF",
		fontSize: 18,
		marginLeft: 16,
	},
	botaoTexto: {
		color: "#FFF",
		fontSize: 24,
	},
	botao: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#E23C44",
		alignItems: "center",
		justifyContent: "center",
	},
});
