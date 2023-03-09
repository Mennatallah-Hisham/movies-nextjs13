import PriceCard from "../components/PriceCard";
import Titles from "../components/Titles";


export default function Pricing(){
    return(
     <section>
        <Titles subtitle="get started now"
         title="choose a plan
         "/>
     
  

<div className="flex container">
<PriceCard title="1 month plan" amount="15"/>
    <PriceCard title="12 months plan" amount="6"/>
    <PriceCard title="6 months plan" amount="10"/>
</div>

        </section>
    )
    }