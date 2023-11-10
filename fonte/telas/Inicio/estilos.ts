import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
	recipiente: {
		flex: 1,
		backgroundColor: "#334477",
		padding: 24,
	},
	eventoNome: { color: "#fdfcfe", fontWeight: "bold", fontSize: 24, marginTop: 48 },
	eventoData: { color: "#CCC", fontSize: 18 },
	entrada: {
		flex: 1,
		height: 56,
		backgroundColor: "#1F1E25",
		borderRadius: 5,
		color: "#FFF",
		padding: 16,
		fontSize: 18,
		marginRight: 12,
	},
	botaoTexto: {
		color: "#FFF",
		fontSize: 24,
	},
	botao: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: "#31CF67",
		alignItems: "center",
		justifyContent: "center",
	},
	formulario: {
		width: "100%",
		flexDirection: "row",
		marginTop: 36,
		marginBottom: 42,
	},
});
