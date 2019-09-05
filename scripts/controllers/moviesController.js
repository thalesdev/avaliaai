app.controller('moviesController', function ($scope,  store) {
    $scope.getMovies = () => {
		return store.getMovies();
    };
    console.log($scope.getMovies());

    $scope.order = false;
    $scope.query = "";
    $scope.stars = [1,2,3,4,5];

    $scope.removeMovie = ($movie) => {
        var tempMovies = store.getMovies().filter((el) =>{
            return el.titulo != $movie.titulo;
        });
        store.setMovies(tempMovies);
    };
    $scope.setOrder = (state) => {
        $scope.order = state;
    };
    $scope.setRating = (rating, movie) => {
        console.log(rating);
        var tempMovies = $scope.getMovies().filter((m) => {
            if (m.titulo == movie.titulo) {
                movie.rating = rating; 
            }
            return movie;
        })
        store.setMovies(tempMovies);
    };
    //console.log(store.getMovies());
});