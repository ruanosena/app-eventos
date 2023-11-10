import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { estilos } from "./estilos";
import Participante from "../../componentes/Participante";

export default function Inicio() {
	function lidarAddParticipante() {
		console.log("Você clicou no botão adicionar");
	}
	// function lidarRemoverParticipante() {}

	return (
		<View style={estilos.recipiente}>
			<Text style={estilos.eventoNome}>Nome do Evento</Text>
			<Text style={estilos.eventoData}>{new Date().toLocaleDateString()}</Text>

			<View style={estilos.formulario}>
				<TextInput
					style={estilos.entrada}
					placeholder="Nome do participante"
					placeholderTextColor="#6b6b6b"
					keyboardType="default"
				/>

				<TouchableOpacity style={estilos.botao} onPress={lidarAddParticipante}>
					<Text style={estilos.botaoTexto}>+</Text>
				</TouchableOpacity>
			</View>

			<Participante name="Ruan O. Sena" />
			<Participante name="Luiza da Vila" />
			<Participante name="Maria do Bairro" />
		</View>
	);
}
