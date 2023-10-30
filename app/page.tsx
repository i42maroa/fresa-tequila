import { LogoSection } from './components/sections/logo/Logo'
import { WeSection } from './components/sections/we/we'
import { SongsSection } from './components/sections/songs/Songs'
import { GiraSection } from './components/sections/gira/Gira'
import { FansSection } from './components/sections/fans/Fans'

export default function Home() {
  return (
    <main >
      <LogoSection></LogoSection>
      <WeSection></WeSection>
      <SongsSection></SongsSection>
      <GiraSection></GiraSection>
      <FansSection></FansSection>
    </main>
  )
}
