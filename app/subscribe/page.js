import PriceCard from "../components/PriceCard";
import Film from "../icons/Film";

export default function Subscribe (){
    return(
     <section>
        <p className="txt--sub upper txt-center">get started now</p>
    <h1 className="heading--primary margin-b-l">choose a plan

</h1>

<div className="flex container">
<PriceCard title="1 month plan" amount="15"/>
    <PriceCard title="12 months plan" amount="6"/>
    <PriceCard title="6 months plan" amount="10"/>
</div>

        </section>
    )
    }