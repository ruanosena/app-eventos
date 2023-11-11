import { StatusBar } from "react-native";
import Inicio from "./fonte/telas/Inicio";

export default function App() {
	return (
		<>
			<StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
			<Inicio />
		</>
	);
}
