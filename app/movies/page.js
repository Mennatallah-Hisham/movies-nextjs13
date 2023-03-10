
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Titles from "../components/Titles";

export default async  function Movies (){

    const topRatedRes = await fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}`);
    const topRatedData = await topRatedRes.json();

    const nowPlayingRes = await fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}`);
    const nowPlayingData = await nowPlayingRes.json();



    return(
        <>
    <section>
  <Titles subtitle =" watch now"
  title="now playing"/>
  <Cards cards={topRatedData.results} type="movie"/>
</section>
        <Banner/>
    <section className="margin-t-l">
  <Titles subtitle =" watch now"
  title="top rated"/>
  <Cards cards={nowPlayingData.results} type="movie"/>
</section>

    
        
        </>
    )
}