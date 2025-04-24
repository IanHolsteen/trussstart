'use client'

import { Suspense } from 'react'
import DesignerProfilePageClient from './DesignerProfilePageClient'

export default function Page() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <DesignerProfilePageClient />
    </Suspense>
  )
}