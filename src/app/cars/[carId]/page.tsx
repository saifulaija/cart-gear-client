import Image from "next/image";
import React from "react";

const CarDetailsPage = async (props: any) => {
  const res = await fetch(
    `http://localhost:5000/api/products/get-single-product/${props.params.carId}`
  );
  const { data } = await res.json();
  console.log(data);

  return (
    <div className="max-w-600px container mx-auto">
     <div className="w-[400px] h-auto">
     <Image
        alt="Relaxing app background"
        className="z-0 w-full h-full  object-cover"
        height={200}
        width={200}
        src={data?.images[0]}
      />
     </div>
      <p>product Name: {data?.name}</p>

      <p>{data?.description}</p>
    </div>
  );
};


export async function  generateStaticParams() {
  const res= await fetch('http://localhost:5000/api/products',{
  next:{
    // revalidate:1,
    tags:['cars']
  }
  })
  const { data } = await res.json();
 
  return data.map((car:any) => ({
    carId: car._id,
  }))
}

export default CarDetailsPage;
