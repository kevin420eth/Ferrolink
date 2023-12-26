import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <section className='home__section'>
      <div className='home__container'>
        <div className='showcase__container'>
          {/* <video className='showcase__video' src={video} muted autoPlay loop></video> */}
          <p>Video placement</p>
        </div>
        <div className='home__title'>
          {/* <HomeTypewriter /> */}
          <p>Typewriter placement</p>
        </div>
      </div>
    </section>
  )
}
