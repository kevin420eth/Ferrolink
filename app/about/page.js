import './page.css'
import Image from 'next/image'
import company_photo from '@/assets/materials/company_photo.png'
import forging_photo from '@/assets/materials/x.png'

const page = () => {
  return (
    <main className="about_page">
      <h1 className='section_title'>About Us</h1>
      <section className='about_section'>

        <div className='company_info_container'>
          <p className='company_info_content'>
            Ferrolink Industries co., Ltd. was established in 1997. In the early stage, the company is
            specialized in various hot forging tools and manufacturing auto parts with accumulated more than
            50 years experience. The company has been devoted to perfect, practical and competitve products
            with continuous and active development and research. Our company is aimed at selling products in
            the Europe and the US market. Currently, our product quality is comparable to the required level
            of the advanced countries in Europe and America. Therefore, the customers can be more confident
            and reassuring in marketing, and creat a niche for sustainable business.
          </p>
          <div className='company_photo_container'>
            <Image className='company_photo' src={company_photo} alt='company_photo' />
          </div>
        </div>

        <div className='company_info_container'>
          <p className='company_info_content'>
            <h1 className='company_info_content_title'>Our Persitence</h1>
            We always uphold the business philosophy and operating principles of “Diligence and Integrity”,
            “International Quality”, “Technical Innovation”, “Just-in-time Delievery” and “Customer
            Satisfaction”. Also, we insist on the highest quality standards to all our products and
            Integrity as the foundation of the company&#39;s brand and image. With presistence and hard work,
            our practical and competitve products designed by our stong and professional R&D team have gained
            the trust of the industry and customers and have earned good reupation and model among the hand
            tools and horticulture industry. In the future, our company will continue to enhance our
            professional stength and competitveness. By creating integration service and linking
            manufacturing, services, content and access providers, the company can create virtual and
            integrated services for the goal of sustainable business.
          </p>
          <div className='company_photo_container'>
            <Image className='company_photo' src={forging_photo} alt='company_photo' />
          </div>
        </div>

      </section>
    </main>
  )
}

export default page