import ViewDetails from "@/components/viewDetails/ViewDetails";
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const CarsPage = async (props: any) => {
  const res = await fetch("http://localhost:5000/api/products");
  const { data } = await res.json();
  console.log(data);
  return (
    <div className="container mx-auto mt-20">
      <div className="flex justify-center items-center gap-6">
        {data.map((item: any) => {
          return (
            <Card
              key={item._id}
              isFooterBlurred
              className="w-full h-auto col-span-12 sm:col-span-7"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-gray-700 uppercase font-bold">
                  {item?.name}
                </p>
                <h4 className="text-green-400 font-medium text-xl">
                  {item.tag}
                </h4>
              </CardHeader>
              <Image
                alt="Relaxing app background"
                className="z-0 w-full h-full  object-cover"
                height={450}
                width={450}
                src={item?.images[0]}
              />

            <ViewDetails productId={item._id}/>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CarsPage;
