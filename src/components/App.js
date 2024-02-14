import { QuizProvider } from "../context/QuizContext";
import Header from "./Header";
import Main from "./Main";

export default function App() {
	return (
		<div className="app">
			<QuizProvider>
				<Header />
				<Main />
			</QuizProvider>
		</div>
	);
}
