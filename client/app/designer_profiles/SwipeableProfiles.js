'use client'

import { useState , useEffect } from 'react'
import Image from 'next/image'
import { MdCheck, MdClear } from "react-icons/md";

export default function SwipeableProfiles({ profiles: initialProfiles, onWidenSearch, showWidenSearchButton, resetKey }) {
  const [profiles, setProfiles] = useState(initialProfiles)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [matched, setMatched] = useState(false)


  useEffect(() => {
    setCurrentIndex(0)
    setProfiles(initialProfiles)
  }, [initialProfiles, resetKey])

  const handlePass = () => {
    setProfiles(prev => prev.slice(1))
  }

 const handleConnect = () => {
  setMatched(true)
  setTimeout(() => {
    setMatched(false)
    setProfiles(prev => prev.slice(1))
  }, 1500) // Match message shown for 1.5 seconds
}


  const current = profiles[0]

  // const API_BASE_URL = 'http://localhost:3000'
  if (!current) {
    return (
      <div className="text-center mt-20 space-y-4">
        <p>No more profiles for now!</p>
        <button
          className="px-4 py-2 bg-black text-white rounded"
          onClick={() => setProfiles(initialProfiles)}
        >
          Start Over
        </button>
        
        {showWidenSearchButton && (
          <div>
            <h1 className='pb-2'>or</h1>
        <button
          className="px-4 py-2 bg-black text-white rounded"
          onClick={onWidenSearch}
        >
          Widen Search
        </button>
        </div>
      )}
      </div>
    )
  }

  const photoUrl = `\${current.photo_url}`
  const coverUrl = `\${current.cover_photo_url}`

  

  return (
    <div className="flex flex-col items-center justify-between p-6">
      <div className="w-full max-w-sm mx-auto bg-[#f5f0e6] border border-black overflow-hidden">

        {/* Profile Header */}
        <div className="flex border-b border-black text-sm bg-[#f5f0e6]">
          {/* Left: Profile Photo */}
          <div className="border-r border-black flex items-center justify-center w-20">
            <div className="relative">
            <div className="relative w-18 h-18 rounded-full overflow-hidden">
              <Image
                src={photoUrl}
                alt={`${current.name}'s profile`}
                layout="fill"
                objectFit="cover"
              />
              {/* <span className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs rounded-full px-1 border border-white">
                ✓
              </span> */}
            </div>
            <span className="absolute bottom-1 left-1 hexagon-wrapper">
              <span className="hexagon bg-[#395CAA] text-white text-[10px] border border-white">
              <MdCheck />
              </span>
            </span>
              </div>
          </div>

          {/* Middle: Text Info */}
          
          <div className={`flex-1 border-r border-black `}>
            <div className="border-b px-1">
              <div className="flex space-x-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < current.star_rating ? "★" : "☆"}</span>
                ))}
              </div>
              <div className="">{current.name}</div>
            </div>
            <div className="px-1 ">
              <div className="text-xs">Licensed Architect</div>
              <div className="text-xs text-gray-700">{current.location}</div>
              <div className="text-base text-xs">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < current.price_range ? "" : "text-gray-400"}>
                    $
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Match Message */}
          
          {/* Right: Barcode or ID Strip */}
          <div className="w-12 flex items-center justify-center">
            {/* You can swap this with a real barcode later */}
            <div className=" w-4 bg-gradient-to-b from-black via-white to-black" />
          </div>
        </div>

  {/* Scrollable container */}
  <div className="relative w-full h-[500px] overflow-hidden">
  {matched && (
    <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-10 text-4xl text-black transition-opacity duration-700">
      It’s a Match!
    </div>
  )}
  <div className={`overflow-y-auto h-full transition-opacity duration-700 ${matched ? 'opacity-0' : 'opacity-100'}`}>
    

    {/* Cover photo */}
    <div className="relative w-full h-60">
      <Image
        src={coverUrl}
        alt="Cover"
        layout="fill"
        objectFit="cover"
        className="object-cover p-1"
      />
    </div>

    {/* Identity Tags */}
    <div className="px-4 py-2 border-t border-black flex justify-between flex-wrap gap-2 text-xs font-medium">
      <div>👍 6+ Liked Project</div>
      {current.lgbtq_owned && <div>🌈 LGBTQ+ Owned</div>}
      {current.fluent_in_spanish && <div>🗣️ Fluent in Spanish</div>}
      {current.minority_owned && <div>⚥ Minority Owned</div>}
    </div>

    {/* Bio */}
    <div className="px-4 py-2 text-sm">
      <p>{current.bio}</p>
    </div>

    {/* Specialties */}
    <div className="px-4 py-2 text-sm">
      <h3 className="font-semibold mb-1">Specialties</h3>
      <ul className="list-disc list-inside space-y-1">
        {current.specialties?.map((spec, idx) => (
          <li key={idx}>{spec}</li>
        ))}
      </ul>
    </div>
  </div>
  
</div>
        {/* Swipe Buttons */}
        <div className="fixed bottom-6 flex justify-between inset-x-0 mx-auto max-w-screen text-black text-5xl px-12 py-4">
        <button
          onClick={handlePass}
          className="focus:outline-none"
        >
          <MdClear />
        </button>
        <button
          onClick={handleConnect}
          className="focus:outline-none"
        >
          <MdCheck />
        </button>
      </div>
      </div>
      </div>

  )
}