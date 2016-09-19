const Main = React.createClass({

  getInitialState(){
    return {
      movies: []
    }
  },

  addMovie(event) {
    let newMovie = {}
    console.log('I am event: ', event)
    event.preventDefault()
    let { movieTitle, movieImage } = this.refs
    if(!movieImage.value){
      let miniDB = [
        '//s-media-cache-ak0.pinimg.com/564x/b3/b6/2b/b3b62b106f21bd191bf14260ceb20bc3.jpg',
        '//onairpk.com/wp-content/gallery/movies-2016/1.jpg',
        'http://webneel.com/daily/sites/default/files/images/daily/01-2016/22-cranium-intel-animation-movie-list-2016.jpg'
      ]
    newMovie = {
        movieID: uuid(),
        title: movieTitle.value,
        image: miniDB[Math.floor(Math.random() * miniDB.length)],
        votes: 0,
      }
    } else {
       newMovie = {
        movieID: uuid(),
        title: movieTitle.value,
        image: movieImage.value,
        votes: 0,
      }
    }
    console.log('I am newMovie: ', newMovie)
    let someVar = [...this.state.movies, newMovie]
    console.log('I am someVar: ', someVar)
    this.setState( {movies: someVar} )
    console.log('I am the movies state: ', this.state.movies)
  },

  upVote(event){
    console.log('Upvote', event.currentTarget.value)
  },

  downVote(event){
    console.log('downVote key', event.target.id)
  },

  // deleteToHere

  render(){

    return (
      <div className='container'>
        <div className="input-movie row">
          <div className="form-container">
            <form onSubmit={this.addMovie}>
              <div className="form-group">
                <label htmlFor="movieTitle">Movie Title:</label>
                <input ref='movieTitle' type="text" className='form-control' id='movieTitle' required/>
              </div>
              <div className="form-group">
                <label htmlFor="movieImage">Movie Image</label>
                <input ref='movieImage' type="text" className='form-control' id='movieImage'/>
              </div>
              <button  ref='addMovie' id="addMovie" className='btn btn-danger'>Add Movie</button>
            </form>
          {/* FORM-CONTAINER */}
          </div>  
        </div>
        {this.state.movies.map(movie => {
          //could just wrap with parenthesis
          return (
            <div className="singleMovie col-sm-3" key={uuid()} id={movie.id}>
              <img src={movie.image} alt=""></img>
              <h2 className="movieTitle">{movie.title}</h2>
              <span className="votes" >Votes: {movie.votes}</span>
              <button onClick={this.upVote} value={movie.id} id={movie.id} className="btn btn-sm btn-success">+</button>
              <button id={movie.id} value={movie.id} onClick={this.downVote} className="btn btn-sm btn-danger">-</button>
            </div> 

            
          )
        })}
      </div>
    )
  }
})

const Movie = React.createClass({

  render(){

    let thisThing = 'hello'

    return (
      <div>
        <h2>secondary </h2>
      </div>
    )
  }
})

ReactDOM.render (<div className='main-app'>
  <Main />
  </div>,
  document.getElementById('root')
)