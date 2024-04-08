"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import CardDataStats from "@/components/CardDataStats";
import React from "react";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useRouter } from "next/navigation";
const list = [
  {
    title: "Analytics",
    img: "/images/cover/cover-01.png",
    price: "",
    url: "/",
  },
  {
    title: "Hiring/ Recruitment",
    img: "/images/cover/cover-01.png",
    price: "",
    url: "/hiring",
  },
];

const Menu = () => {
  const router = useRouter();

  const handleCardClick = () => {
    // Redirect to another page
    router.push("/hiring");
  };
  return (
    <DefaultLayout>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <Card shadow="sm" key={index} isPressable onPress={handleCardClick}>
            <CardBody className="overflow-visible p-0">
              <Image
                width={140}
                height={140}
                alt={item.title}
                className="h-[140px] w-full object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small text-between justify-center bg-transparent">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default Menu;
