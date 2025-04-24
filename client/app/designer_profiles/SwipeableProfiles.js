'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function SwipeableProfiles({ profiles }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePass = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, profiles.length - 1))
  }

  const handleConnect = () => {
    console.log('Connected with', profiles[currentIndex]?.name)
    setCurrentIndex((prev) => Math.min(prev + 1, profiles.length - 1))
  }

  const current = profiles[currentIndex]

  // const API_BASE_URL = 'http://localhost:3000'
  if (!current) return <div className="text-center mt-20">No more profiles 💤</div>

  const photoUrl = `/api/${current.photo_url}`
  const coverUrl = `/api/${current.cover_photo_url}`

  return (
    <div className="flex flex-col items-center justify-between p-6">
      <div className="w-full max-w-sm mx-auto bg-[#f5f0e6] border border-black rounded-lg shadow-lg overflow-hidden">

        {/* Profile Header */}
        <div className="p-4 flex items-center border-b border-black">
          <div className="relative">
            <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-white">
              <Image
                src={photoUrl}
                alt={`${current.name}'s profile`}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <span className="absolute bottom-0 right-0 bg-blue-500 text-white text-xs rounded-full px-1">✓</span>
          </div>

          <div className="ml-4 flex-1">
            <div className="font-bold uppercase">{current.name}</div>
            <div className="text-sm">Licensed Architect</div>
            <div className="text-sm text-gray-700">{current.location}</div>

            <div className="flex space-x-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i}>{i < current.star_rating ? "★" : "☆"}</span>
              ))}
            </div>

            <div className="text-lg mt-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < current.price_range ? "" : "text-gray-400"}>
                  $
                </span>
              ))}
            </div>
          </div>

          <div className="w-5 h-full border-l border-black ml-2" />
        </div>

        {/* Cover Photo */}
        <div className="relative w-full h-60 overflow-hidden">
          <div className="absolute w-full h-full transform -skew-y-3 origin-top-left">
            <Image
              src={coverUrl}
              alt="Cover"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Identity Tags */}
        <div className="px-4 py-2 border-t border-black flex justify-between flex-wrap gap-2 text-xs font-medium">
          <div>👍 6+ Liked Project</div>
          {current.lgbtq_owned && <div>🌈 LGBTQ+ Owned</div>}
          {current.fluent_in_spanish && <div>🗣️ Fluent in Spanish</div>}
          {current.minority_owned && <div >⚥ Minority Owned</div>}
        </div>

        {/* Swipe Buttons */}
        <div className="flex justify-between items-center p-4">
          <button onClick={handlePass} className="text-3xl">❌</button>
          <div className="w-8 h-8 border-b-4 border-yellow-500 border-t-4 border-transparent" />
          <button onClick={handleConnect} className="text-3xl">✔️</button>
        </div>
      </div>
    </div>
  )
}