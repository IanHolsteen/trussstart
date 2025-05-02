'use client'

import { Suspense } from 'react'
import DesignerProfilePage from './DesignerProfilePage'

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <DesignerProfilePage />
    </Suspense>
  )
}