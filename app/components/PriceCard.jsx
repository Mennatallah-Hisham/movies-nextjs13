import Film from "../icons/Film";


export default function PriceCard({amount ,title}){
    return(
        <>
        <article className="price-card card">
            <Film/>
            <p class="txt--lg upper"> {title}</p>
            <div>
            <p className="price__amount">$ {amount}</p>
            <p class="txt--sm txt-center"> per month</p>
            </div>
           
            <button className="btn--secondary">get started</button>
        </article>
        </>
    )
}