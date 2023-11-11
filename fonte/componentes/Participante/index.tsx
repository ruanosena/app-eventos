import { Text, TouchableOpacity, View } from "react-native";
import { estilos } from "./estilos";

type ParticipanteProps = {
	nome: string;
	aoRemover: () => void;
};

export default function Participante({ nome, aoRemover }: ParticipanteProps) {
	return (
		<View style={estilos.recipiente}>
			<Text style={estilos.nome}>{nome}</Text>

			<TouchableOpacity style={estilos.botao} onPress={aoRemover}>
				<Text style={estilos.botaoTexto}>-</Text>
			</TouchableOpacity>
		</View>
	);
}
