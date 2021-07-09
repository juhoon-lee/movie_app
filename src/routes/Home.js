import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import "./Home.css";
// 함수형 컴포넌트
// function App() {
//   return(
//     <h1>Movie App</h1>
//   );
// }

// 클래스형 컴포넌트
class Home extends React.Component {
  state= {
    isLoading : true,
    movies : [], // state에 데이터를 미리 선언하지 않아도 괜찮지만 체계적인 코드 정리를 위해선 미리 계획하는게 좋다.
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies : movies, isLoading: false}); // {movies:movies}를 {movies}라고 es6에서 쓰는게 더 좋다.
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){ // render 함수가 JSX를 리턴
    const {isLoading, movies} = this.state;
    return <section className="container">
      {isLoading
          ? <div className="loader">
              <span className="loader_text">Loading...</span>
            </div>
            :
            <div className="movies">
            {movies.map(movie => {
              return <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary} 
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  />
                })}
            </div>
    }</section>;
  }
}

export default Home
;
// https://yts-proxy.nomadcoders1.now.sh/list_movies.json