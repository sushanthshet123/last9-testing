import React from "react"
import { teamData } from "./data"

export default function TeamMembers() {
  return (
    <div>
      <div className="max-w-2xl mx-auto grid lg:grid-cols-3 grid-cols-2 gap-4 px-5 md:px-0">
        {teamData.map((data) => (
          <div key={data.name} className="mx-auto">
            <img src={data.image} />
            <div className="py-2">
              <h1 className="manrope-extrabold mt-2">{data.name}</h1>
              <h2 className="manrope-regular text-gray-500 mb-3 text-sm">
                {data.designation}
              </h2>
              <div className="flex">
                <a href={data.linkedIn} target="_blank" rel="noreferrer">
                  <img src="/teams/linkedIn.svg" className="pr-5" />
                </a>
                <a href={data.twitter} target="_blank" rel="noreferrer">
                  <img src="/teams/twitter.svg" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
