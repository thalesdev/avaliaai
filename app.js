var app = angular.module('app',[]).service('store',function(){
	// pseudo processamento
	var Movies = filmes.filmes.map((movie) => {
		movie.rating = 0;
		return movie;
	}); // pog
	return {
	    getMovies: function () {
			return Movies;
		},
		setMovies: function(value) {
			Movies = value;
		}
	};	
});
