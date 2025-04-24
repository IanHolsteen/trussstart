'use client'

import DesignerCard from './designerCard'

export default function DesignerListView({ designers }) {
  return (
    <div className="grid grid-cols-1 gap-6">
      {designers?.map((designer, index) => (
        <DesignerCard key={index} designer={designer} />
      ))}
    </div>
  )
}