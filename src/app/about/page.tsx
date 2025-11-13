import CommitmentSection from '@/components/CommitmentSection/CommitmentSection'
import CommunitySection from '@/components/CommunitySection/CommunitySection'
import ContactSection from '@/components/ContactSection/ContactSection'
import TeamSection from '@/components/TeamSection/TeamSection'
import TriGardeningHero from '@/components/TriGardeningHero/TriGardeningHero'
import React from 'react'

export default function AboutPage() {
  return (
    <div>
      <TriGardeningHero />
      <TeamSection />
      <CommitmentSection />
      <CommunitySection />
      <ContactSection />
    </div>
  )
}
