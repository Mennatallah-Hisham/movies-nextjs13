


import Header from './components/Header';
import Banner from './components/banner';
import Titles from './components/Titles';
import Cards from './components/Cards';


export default async function Home() {

  const response1= await fetch (`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
 let movies = await response1.json();

  const response2= await fetch (`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`);
 let tv = await response2.json();

  return (
    <main>

      <Header/>
<section>
  <Titles subtitle =" watch now"
  title="popular movies"/>
  <Cards cards={movies.results} type="movie"/>
</section>

<section><Titles subtitle =" watch now"
  title="popular tv shows"/>
  <Cards cards={tv.results} type="tvShow"/>


</section>
      <Banner/>

    </main>
  )
}
