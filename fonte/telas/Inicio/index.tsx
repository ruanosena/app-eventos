import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { estilos } from "./estilos";
import Participante from "../../componentes/Participante";

export default function Inicio() {
	const participantes = ["Rodrigo", "Vini", "Diego", "Biro", "Ana", "Isa", "Jack", "Mayk", "João"];

	function lidarAddParticipante() {
		console.log("Você clicou no botão de adicionar");
	}
	function lidarRemoverParticipante(nome: string) {
		Alert.alert("Remover", `Você deseja remover ${nome}?`, [
			{ text: "Não", style: "cancel" },
			{ text: "Sim", onPress: () => Alert.alert("Removido!") },
		]);
	}

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

			<FlatList
				data={participantes}
				keyExtractor={(item) => item}
				renderItem={({ item }) => <Participante nome={item} aoRemover={() => lidarRemoverParticipante(item)} />}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text style={estilos.listaVaziaTexto}>
						Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença!
					</Text>
				)}
			/>
		</View>
	);
}
