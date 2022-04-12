export const QuoteCard = ({ quote, character, image }) => {
	return (
		<div>
			<p>{quote}</p>
			<h6>- {character}</h6>
			<img src={image} alt={character} />
		</div>
	);
};

export default QuoteCard;
