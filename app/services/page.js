import './page.css'
import Image from 'next/image'
import icon1 from '@/assets/materials/icon1.png'
import icon2 from '@/assets/materials/icon2.png'
import icon3 from '@/assets/materials/icon3.png'

import cnc from '@/assets/materials/cnc2.png'
import z from '@/assets/materials/z.png'
import qq from '@/assets/materials/qq.png'

const page = () => {
  return (
    <main className="about_page">
        <h1>Our Services</h1>
      <section className="service_section">
        <div className="service__container">

          <div className="service__block">
            <h3 className='service__block__title'>Custom Tool Design</h3>
            <div className="service__block__content">
              <p className='service__block__content__text'>Customize hand tools for your specific needs, creating the perfect tools you want with our experienced engineer.</p>
            </div>
            <Image className='icon__image' src={qq} alt='icon_1' />
          </div>

          <div className="service__block">
            <h3 className='service__block__title'>Precision Machining</h3>
            <div className="service__block__content">
              <p className='service__block__content__text'>Produce every part of tools that meets the highest standards of quality and accuracy with precision machining.</p>
            </div>
            <Image className='icon__image' src={cnc} alt='icon_1' />
          </div>

          <div className="service__block">
            <h3 className='service__block__title'>Forging Engineering</h3>
            <div className="service__block__content">
              <p className='service__block__content__text'>Shape the tools with high strength and durability. We work with a variety of metals, including carbon steel, alloy steel, stainless steel, aluminum and brass.</p>
            </div>
            <Image className='icon__image' src={z} alt='icon_1' />
          </div>

        </div>
      </section>
    </main>
  )
}

export default page