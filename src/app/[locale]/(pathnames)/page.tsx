import GeopositionPage from '@/components/pages/geoposition/GeopositionPage'
import MenuPage from '@/components/pages/menu/MenuPage'
import OwnerPage from '@/components/pages/owner/OwnerPage'
import PresentationPage from '@/components/pages/presentation/PresentationPage'
import React from 'react'

const LandingPage = () => {
  return (
    <section>
      <PresentationPage />
      <OwnerPage />
      <MenuPage />
      <GeopositionPage />
    </section>
  )
}

export default LandingPage