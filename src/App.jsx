import { useState } from "react";

export default function App() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [isNext, setIsNext] = useState(false);

	const handleClick = function (i) {
		if (squares[i]) return;
		const nextSquare = squares.slice();
		nextSquare[i] = isNext ? "images/circle.png" : "images/cross.png";
		setSquares(nextSquare);
		setIsNext(!isNext);
	};

	return (
		<div className="bg-[#111B22] min-h-screen grid place-items-center">
			<h1 className="text-6xl text-white font-bold">
				Tic Tac Toe Game in <span className="text-[#56FFC8]">React</span>
			</h1>
			<div className="grid aspect-square grid-cols-3 w-max gap-2">
				{squares.map((value, i) => (
					<Square
						value={value}
						key={i}
						onSquareClick={handleClick.bind(squares, i)}
					/>
				))}
			</div>
			<button className="text-[#56FFC8] text-xl font-semibold bg-[#223541] px-10 py-3 rounded-full">
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
