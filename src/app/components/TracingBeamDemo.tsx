"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative  mb-20">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge("text-xl mb-4")}>{item.title}</p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Identify Places and Dishes from Images:",
    description: (
      <>
        <p>
          Integrates image recognition technology so users can take a photo and
          identify the specific location or dish being displayed in the image.
        </p>
        <p>
          When users take photos, the system will use AI and Machine Learning
          algorithms to identify objects in the image and return results about
          the corresponding location or dish.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/shoes-shop-bb21d.appspot.com/o/Screenshot%202024-05-30%20at%2005.59.30.png?alt=media&token=da2d9c02-ef6f-487d-97f3-02dfa8e597e9",
  },
  {
    title: "Display Detailed Information:",
    description: (
      <>
        <p>
          After successful identification, the application will display detailed
          information about the place or dish including description, reviews,
          ratings, history, and related cultural information .
        </p>
        <p>
          This information will help users better understand the place or dish
          they are interested in.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/shoes-shop-bb21d.appspot.com/o/Screenshot%202024-05-30%20at%2006.02.54.png?alt=media&token=467e445b-8627-4ab1-883e-9e182b197c4f",
  },
  {
    title: "Directions:",
    description: (
      <>
        <p>
          When users are interested in a specific location, they can request
          directions from their current location to that location.
        </p>
        <p>
          The app will use a mapping service like Google Maps to provide
          detailed instructions on how to get to the desired location.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/shoes-shop-bb21d.appspot.com/o/Screenshot%202024-05-30%20at%2006.05.12.png?alt=media&token=66ee24fd-e23e-47ff-bfdc-dc7e23dd06f2",
  },
  {
    title: "Create a Personalized Itinerary:",
    description: (
      <>
        <p>
          Based on the user`s current location, preferences and interests, the
          application will recommend suitable places to visit and restaurants,
          helping them create a personalized travel itinerary and diversity.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/shoes-shop-bb21d.appspot.com/o/Screenshot%202024-05-30%20at%2006.09.19.png?alt=media&token=57ee8ae8-d4c7-4e88-94f7-6d03846e0450",
  },
  {
    title: "Language Translation:",
    description: (
      <>
        <p>
          To help users communicate easily in communication situations with
          native speakers, the application provides a voice-to-text conversion
          feature, then translates the text into the local language.
        </p>
        <p>
          This helps improve user`s communication experience when they travel.
        </p>
      </>
    ),
    badge: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/shoes-shop-bb21d.appspot.com/o/Screenshot%202024-05-30%20at%2006.13.03.png?alt=media&token=22031652-5e27-454e-bb34-ddb1d01daac2",
  },
];
