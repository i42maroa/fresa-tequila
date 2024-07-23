import { GiraSection } from './components/sections/gira/Gira'
import { FansSection } from './components/sections/fans/Fans'
import { MerchandaisingSection } from './components/sections/merchandaising/Merchandaising'
import { NewsSection } from './components/sections/news/News'

export default function Home() {
  return (
    <main >
      <GiraSection></GiraSection>
      <NewsSection></NewsSection>
    </main>
  )
}
