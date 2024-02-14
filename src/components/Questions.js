import { useQuiz } from "../context/QuizContext";
import Options from "./Options";

function Questions() {
	const { questions } = useQuiz();

	return (
		<div>
			<h4>{questions.question}</h4>
			<Options />
		</div>
	);
}

export default Questions;
