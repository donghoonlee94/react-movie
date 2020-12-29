import React from "react"
import axios from "axios"
import Movie from "./Movie"

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
      <div className="App">
        {isLoading
          ? "loading..."
          : movies.map((m) => {
              return (
                <Movie
                  key={m.id}
                  id={m.id}
                  year={m.year}
                  title={m.title}
                  summary={m.summary}
                  poster={m.medium_cover_image}
                ></Movie>
              )
            })}
      </div>
    )
  }
}

export default App
