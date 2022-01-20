export interface Omdb {
	Response: string,
	Search: Film[],
	totalResult: string
}

export interface Film {
	Title: string,
	Year: string,
	imdbID: string,
	Type: string,
	Poster: string,
}