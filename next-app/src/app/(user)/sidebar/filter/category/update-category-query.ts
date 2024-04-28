export function updateCategoriesQuery(
	currentRating: string,
	newRating: string
) {
	const ratingsArray = currentRating ? String(currentRating).split('|') : []

	const ratingIndex = ratingsArray.indexOf(newRating)

	if (ratingIndex === -1) ratingsArray.push(newRating)
	else ratingsArray.splice(ratingIndex, 1)

	return ratingsArray.join('|')
}
