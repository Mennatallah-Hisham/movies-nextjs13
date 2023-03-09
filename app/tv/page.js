import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Titles from "../components/Titles";

export default async  function Movies (){

    const topRatedRes = await fetch (`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}`);
    const topRatedData = await topRatedRes.json();

    const nowPlayingRes = await fetch (`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}`);
    const nowPlayingData = await nowPlayingRes.json();



    return(
        <>
    <section>
  <Titles subtitle =" watch now"
  title="on_the_air"/>
  <Cards cards={topRatedData.results} type="tvShow"/>
</section>
        <Banner/>
    <section className="margin-t-l">
  <Titles subtitle =" watch now"
  title="top rated"/>
  <Cards cards={nowPlayingData.results} type="tvShow"/>
</section>

    
        
        </>
    )
}