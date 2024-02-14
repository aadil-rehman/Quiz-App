import { useQuiz } from "../context/QuizContext";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";

function Main() {
	const { status } = useQuiz();

	return (
		<main className="main">
			{status === "loading" && <Loader />}
			{status === "error" && <Error />}
			{status === "ready" && <StartScreen />}
			{status === "active" && (
				<>
					<Progress />
					<Questions />
					<Footer>
						<Timer />
						<NextButton />
					</Footer>
				</>
			)}
			{status === "finished" && <FinishScreen />}
		</main>
	);
}

export default Main;
