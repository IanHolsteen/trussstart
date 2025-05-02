'use client'

import { useState, useEffect } from 'react'
import Navbar from '../nav/Navbar'
import { useSearchParams } from 'next/navigation'
import { useTheme } from '../contexts/ThemeProvider'
import DesignerListView from './DesignerListView'
import SwipeableProfiles from './SwipeableProfiles'

export default function DesignerProfilePage() {
  const { theme } = useTheme()
  const searchParams = useSearchParams()
  const [designers, setDesigners] = useState([])
  const [filteredDesigners, setFilteredDesigners] = useState([])
  const [viewMode, setViewMode] = useState('swipe') // 'list' | 'swipe'
  const [isFiltered, setIsFiltered] = useState(false)
  const [resetKey, setResetKey] = useState(0)

  const filters = {
    location: searchParams.get('location')?.toLowerCase(),
    budget: parseInt(searchParams.get('budget') || '0'),
    projectType: searchParams.get('projectType')?.toLowerCase(),
  }

  useEffect(() => {
  fetch('/api/designer_profiles')
    .then(res => res.json())
    .then(data => {
      setDesigners(data)

      const matchLocation = filters.location ? (d) => d.location?.toLowerCase().includes(filters.location) : () => true
      const matchProjectType = filters.projectType ? (d) => d.bio?.toLowerCase().includes(filters.projectType) : () => true

      const filtered = data.filter(d => matchLocation(d) && matchProjectType(d))

      setFilteredDesigners(filtered)
      setIsFiltered(filtered.length !== data.length) // <- Set filter state here
    })
}, [filters.location, filters.budget, filters.projectType])

  return (
    <div className={`min-h-screen bg-gradient-to-b 
      ${theme === "light" ? "from-[#FAFAFA] to-[#E5E3CC]" : "from-[#0A0A0A] to-[#5FBB46] from-[40%]"}`}>
      
      <Navbar viewMode={viewMode} setViewMode={setViewMode} />
      
      {/* <div className="flex justify-center mb-4">
        <button
          onClick={() => setViewMode(viewMode === 'list' ? 'swipe' : 'list')}
          className="px-4 py-2 bg-blue-500 text-white rounded-full shadow"
        >
          Switch to {viewMode === 'list' ? 'Swipe' : 'List'} View
        </button>
      </div> */}
  
      {filteredDesigners.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-16 text-gray-500">
          <p className="text-xl font-semibold">No matching designers found.</p>
          <p className="text-sm mt-2">Try adjusting your search filters or explore all profiles below.</p>
          <button
            onClick={() => {
              setFilteredDesigners(designers)
              setIsFiltered(false)
              setResetKey(prev => prev + 1)
            }}
            className="mt-4 px-4 py-2 bg-black text-white rounded shadow"
          >
            Show All Designers
          </button>

        </div>
      ) : viewMode === 'list' ? (
        <DesignerListView designers={filteredDesigners} />
      ) : (
        <SwipeableProfiles profiles={filteredDesigners}
        onWidenSearch={() => {
          setFilteredDesigners(designers)
          setIsFiltered(false)
          setResetKey(prev => prev + 1)
        }}
        showWidenSearchButton={isFiltered}
        resetKey={resetKey}
         />
      )}
    </div>
  )
}