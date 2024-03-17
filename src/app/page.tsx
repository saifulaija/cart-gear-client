
import ButtonNew from "@/components/button/Button";
import Image from "next/image";

export default async function Home(props:any) {
  const res=await fetch("https://jsonplaceholder.typicode.com/posts")
  const data= await res.json()
  console.log(data)

  return (
    <div>

    <ButtonNew/>
    <p >this is main page</p>
    {
      data.map((item:any)=>{
        return <div key={item}>{item.title}</div>
      })
    }
    </div>
  )
 
  
 
}
