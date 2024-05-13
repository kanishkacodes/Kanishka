import React from "react";
import Header from '@/components/Header';
import Image from "next/legacy/image";
import Link from 'next/link';


function Page() {

  const internships = [
    {
        imageurl: "https://example.com/image1.jpg",
        heading: "Internship 1",
        paragraph: "This is the description for internship 1."
    },
    {
        imageurl: "https://example.com/image2.jpg",
        heading: "Internship 2",
        paragraph: "This is the description for internship 2."
    },
    {
        imageurl: "https://example.com/image3.jpg",
        heading: "Internship 3",
        paragraph: "This is the description for internship 3."
    }
];

  return (
    <>
    <Header/>
      <div>
        <div>
          <div><div></div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
