import { Text, TouchableOpacity, View } from "react-native";
import { estilos } from "./estilos";

type ParticipanteProps = {
	name: string;
};

export default function Participante({ name }: ParticipanteProps) {
	return (
		<View style={estilos.recipiente}>
			<Text style={estilos.nome}>{name}</Text>

			<TouchableOpacity style={estilos.botao}>
				<Text style={estilos.botaoTexto}>-</Text>
			</TouchableOpacity>
		</View>
	);
}
