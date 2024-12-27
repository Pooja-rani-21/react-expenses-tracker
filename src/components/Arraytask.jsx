export default function Arraytask(){
    let array=[1,2,3,4,5,6]
    array.map(
        (i)=>{
            console.log(i)
        }
    )
let b=array.reduce(
        (c,d)=>c+d,0
    )
    console.log(b)

  let image="https://wallpapers.com/images/hd/google-best-1920-x-1080-4nbm3b5n3qv0usa1.jpg",height="500px";
  

  return(
    <div>
        
        <img src={image} alt="" height={height} />

    
    </div>
)
}