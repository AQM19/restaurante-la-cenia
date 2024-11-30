import OwnerPage from '@/components/pages/owner/OwnerPage'
import PresentationPage from '@/components/pages/presentation/PresentationPage'
import React from 'react'

const LandingPage = () => {
  return (
    <section>
      <PresentationPage />
      <OwnerPage />
    </section>
  )
}

export default LandingPage