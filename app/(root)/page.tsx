"use client"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import HeroImage from "../../public/assets/Health-insurance.jpg"
import Individual from "../../public/assets/individual-benefits-health-check-up.svg"
import Family from "../../public/assets/covers-extended-family.svg"
import Data from "../../components/data.json"

import Link from "next/link"

//bg-[#08becd]
const page = () => {
  const [lang, setLang] = useState("English")
  const data = Data

  return (
    <div className="w-full min-h-screen">
      <header className="w-auto">
        <Navbar value={{ lang, setLang }} />
      </header>
      <Image src={HeroImage} alt="Health Insurance" className="h-80" />
      <main className="w-auto">
        <div className="whatisHealthInsurance bg-white p-3 rounded-md overflow-hidden mx-2">
          {/* <Image src={HeroImage2} alt="Image" /> */}
          <div className="title text-2xl text-center mt-5">
            {lang == "English"
              ? data[0].Question?.English
              : "" || lang == "Marathi"
              ? data[0].Question?.Marathi
              : "" || lang == "Hindi"
              ? data[0].Question?.Hindi
              : ""}
          </div>
          <div className="sub-title my-2 text-lg">
            <p>
              {lang == "English"
                ? data[0].Answer?.English.part1
                : "" || lang == "Marathi"
                ? data[0].Answer?.Marathi.part1
                : "" || lang == "Hindi"
                ? data[0].Answer?.Hindi.part1
                : ""}
            </p>
            <p>
              {lang == "English"
                ? data[0].Answer?.English.part2
                : "" || lang == "Marathi"
                ? data[0].Answer?.Marathi.part2
                : "" || lang == "Hindi"
                ? data[0].Answer?.Hindi.part2
                : ""}
            </p>
          </div>
        </div>
        <div className="individual-health bg-[#08Becd] rounded-2xl  p-3 my-5 overflow-hidden mx-2">
          <div className="image flex justify-center">
            <Image src={Individual} alt="Individual Insurance" />
          </div>
          <div className="title text-white text-xl text-center">
            {lang == "English"
              ? data[1].title?.English
              : "" || lang == "Marathi"
              ? data[1].title?.Marathi
              : "" || lang == "Hindi"
              ? data[1].title?.Hindi
              : ""}
          </div>
          <div className="sub-text1 px-2 text-white text-md my-5">
            {lang == "English"
              ? data[1]?.subtitle?.English
              : "" || lang == "Marathi"
              ? data[1]?.subtitle?.Marathi
              : "" || lang == "Hindi"
              ? data[1]?.subtitle?.Hindi
              : ""}
          </div>
          <div className="p-3">
            <div className="title text-white">
              {lang == "English"
                ? "Some key features of Individual Health Insurance"
                : "" || lang == "Marathi"
                ? "काही प्रमुख वैशिष्ट्ये इंडिव्हिज्युअल हेल्थ इन्श्युरन्स"
                : "" || lang == "Hindi"
                ? "इसकी कुछ प्रमुख विशेषताएं जानें इंडिविजुअल हेल्थ इंश्योरेंस"
                : ""}
            </div>
            <ul className="list-disc text-white mx-3 w-full">
              {lang == "English"
                ? data[1].features?.English.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                : "" || lang == "Marathi"
                ? data[1].features?.Marathi.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                : "" || lang == "Hindi"
                ? data[1].features?.Hindi.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                : ""}
            </ul>
          </div>
        </div>
        <div className="individual-health bg-[#08Becd] rounded-2xl  p-3 my-5 overflow-hidden mx-2">
          <div className="image flex justify-center">
            <Image src={Family} alt="Individual Insurance" />
          </div>
          <div className="title text-white text-xl text-center">
            {lang == "English"
              ? data[2].title?.English
              : "" || lang == "Marathi"
              ? data[2].title?.Marathi
              : "" || lang == "Hindi"
              ? data[2].title?.Hindi
              : ""}
          </div>
          <div className="sub-text1 px-2 text-white text-md my-5">
            {lang == "English"
              ? data[2]?.subtitle?.English
              : "" || lang == "Marathi"
              ? data[2]?.subtitle?.Marathi
              : "" || lang == "Hindi"
              ? data[2]?.subtitle?.Hindi
              : ""}
          </div>
          <div className="p-3">
            <div className="title text-white">
              {lang == "English"
                ? "Some key features of Individual Health Insurance"
                : "" || lang == "Marathi"
                ? "काही प्रमुख वैशिष्ट्ये इंडिव्हिज्युअल हेल्थ इन्श्युरन्स"
                : "" || lang == "Hindi"
                ? "इसकी कुछ प्रमुख विशेषताएं जानें इंडिविजुअल हेल्थ इंश्योरेंस"
                : ""}
            </div>
            <ul className="list-disc text-white mx-3 w-full">
              <ul className="list-disc text-white mx-3 w-full">
                {lang == "English"
                  ? data[2].features?.English.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  : "" || lang == "Marathi"
                  ? data[2].features?.Marathi.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  : "" || lang == "Hindi"
                  ? data[2].features?.Hindi.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  : ""}
              </ul>
            </ul>
          </div>
        </div>
        <div className="w-auto h-auto overflow-auto my-5">
          <table className="table-fixed border border-[#08Becd] overflow-x-hidden mx-5">
            <thead>
              <tr>
                <th>Plan Name</th>
                <th>Eligibility</th>
                <th>Sum Insured</th>
                <th>Key Features</th>
              </tr>
            </thead>
            <tbody>
              {data[3]?.tableHeading?.map((item: any) => (
                <>
                  <tr>
                    <td className="font-semibold">
                      {lang === "English"
                        ? item?.name?.English
                        : " " || lang === "Marathi"
                        ? item?.name?.Marathi
                        : " " || lang === "Hindi"
                        ? item?.name?.Hindi
                        : " "}
                    </td>
                    <td>
                      {lang === "English"
                        ? item?.Eligibility?.English
                        : " " || lang === "Marathi"
                        ? item?.Eligibility?.Marathi
                        : " " || lang === "Hindi"
                        ? item?.Eligibility?.Hindi
                        : " "}
                    </td>
                    <td>
                      {lang === "English"
                        ? item?.SumInsured?.English
                        : " " || lang === "Marathi"
                        ? item?.SumInsured?.Marathi
                        : " " || lang === "Hindi"
                        ? item?.SumInsured?.Hindi
                        : " "}
                    </td>
                    <td>
                      {lang === "English"
                        ? item?.KeyFeatures?.English
                        : " " || lang === "Marathi"
                        ? item?.KeyFeatures?.Marathi
                        : " " || lang === "Hindi"
                        ? item?.KeyFeatures?.Hindi
                        : " "}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <video width="100%" height="100%" controls className="my-5">
          <source
            src="https://res.cloudinary.com/dj524uqwc/video/upload/v1695202353/video_is7kdg.mp4"
            type="video/mp4"
          />
        </video>

        <div className="feedback-form text-center text-xl">
          Kindly fill the{" "}
          <span className="text-[#088ecd] underline">
            <Link
              href="https://surveyheart.com/form/650aacbfa58d9d52e2c2cd7e"
              target="_blank"
            >
              feedback form
            </Link>
          </span>
        </div>
      </main>
      <footer className="w-auto h-auto bg-[#08becd] flex items-center justify-center">
        <h1 className="my-5">
          Developed by{" "}
          <Link
            href="https://www.linkedin.com/in/aditya-mane-562b52269/"
            target="_blank"
            className="text-white"
          >
            Aditya Mane
          </Link>{" "}
          and{" "}
          <Link href="" target="_blank" className="text-white">
            Swapnil Devrukhar
          </Link>
        </h1>
      </footer>
    </div>
  )
}

export default page
