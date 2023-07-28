import "./ProductBanner.css"
function ProBan() {
    const Pro_Det=
    [
        {
            id:1,
            Title:"FootBall",
            Con:"View our wide range of football products",
            url:require("../Assets/Foot_Ban.jpg")
        },
        {
            id:2,
            Title:"Cricket",
            Con:"View our wide range of Cricket products",
            url:require("../Assets/ab.jpg")
        },
    ]
    return ( <>
    <hr color="grey"/>
    <h2 className="pro_ban_h2">Shop By Sport</h2>
   {Pro_Det.map((prod)=> (
            <div className="Foot_ban">
                <img src={prod.url} width={1400}/>
                <div className="textt_ft">
                <h2>{prod.Title}</h2>
                <p style={{color:42423}}>View our wide range of football products</p>
        
                <a class="bttnn" href="#!">Shop Now</a>
                </div>
            </div>
         ))}
    
    </> );
}

export default ProBan;  