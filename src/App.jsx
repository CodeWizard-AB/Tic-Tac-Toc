import { useState } from "react";

export default function App() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isNext, setIsNext] = useState(false);
	const [winner, setWinner] = useState(null);

	const calcWinner = function (squares) {
		const winningPatterns = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		winningPatterns.forEach((pattern) => {
			const [pos1, pos2, pos3] = pattern;
			if (
				squares[pos1] &&
				squares[pos1] === squares[pos2] &&
				squares[pos1] === squares[pos3]
			) {
				return squares[pos1];
			}
		});
		return null;
	};

	const handleClick = function (i) {
		if (squares[i]) return;
		const nextSquares = squares.slice();
		nextSquares[i] = isNext ? "images/circle.png" : "images/cross.png";
		setSquares(nextSquares);
		setIsNext(!isNext);
	};

	return (
		<div className="bg-[#111B22] min-h-screen grid place-items-center">
			{winner ? (
				"Player Won"
			) : (
				<h1 className="text-6xl text-white font-bold">
					Tic Tac Toe Game in <span className="text-[#56FFC8]">React</span>
				</h1>
			)}
			<div className="grid aspect-square grid-cols-3 w-max gap-2">
				{squares.map((value, i) => (
					<Square
						value={value}
						key={i}
						onSquareClick={handleClick.bind(squares, i)}
					/>
				))}
			</div>
			<button
				className="text-[#56FFC8] text-xl font-semibold bg-[#223541] px-10 py-3 rounded-full"
				onClick={setSquares.bind(squares, Array(9).fill(null))}
			>
				Reset
			</button>
		</div>
	);
}

function Square({ value, onSquareClick }) {
	return (
		<button
			onClick={onSquareClick}
			className="bg-[#223541] aspect-square w-40 rounded-md grid place-content-center"
		>
			<img src={value} />
		</button>
	);
}
