import React from "react"
import axios from "axios"
import Movie from "./Movie"
import "./App.css"
import "./Home.css"

// function App() {
//   useEffect(() => {
//     console.log("1234")
//   })
//   return <div className="App"></div>
// }

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    )
    this.setState({ movies, isLoading: false })
  }
  componentDidMount() {
    this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state
    return (
      <div className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((m) => {
              return (
                <Movie
                  className="movies"
                  key={m.id}
                  id={m.id}
                  year={m.year}
                  title={m.title}
                  summary={m.summary}
                  poster={m.medium_cover_image}
                  genres={m.genres}
                ></Movie>
              )
            })}
          </div>
        )}
      </div>
    )
  }
}

export default App
