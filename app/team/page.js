import './page.css'
import ceo from '@/assets/materials/pfp/ceo.png'
import manager from '@/assets/materials/pfp/manager.png'
import accountant from '@/assets/materials/pfp/accountant.png'
import staff_1 from '@/assets/materials/pfp/staff_1.png'
import staff_2 from '@/assets/materials/pfp/staff_2.png'
import staff_3 from '@/assets/materials/pfp/staff_3.png'
import staff_4 from '@/assets/materials/pfp/staff_4.png'

import kevin from '@/assets/materials/kevin.png'
import Image from 'next/image'

const page = () => {
    return (
        <main className='team_page'>
            <h1 className='section_title'>Our Team</h1>
            <div className='profile_section'>
                <div className='profile_container'>
                    <div className='profile_photo_container'>
                        <Image className='profile_photo' src={ceo} alt='kevin' />
                    </div>
                    <h1 className='profile_name'>David Hsu</h1>
                    <h1 className='profile_title'>CEO</h1>
                </div>
                <div className='profile_container'>
                    <div className='profile_photo_container'>
                        <Image className='profile_photo' src={manager} alt='kevin' />
                    </div>
                    <h1 className='profile_name'>Arthur Yu</h1>
                    <h1 className='profile_title'>Manager</h1>
                </div>
                <div className='profile_container'>
                    <div className='profile_photo_container'>
                        <Image className='profile_photo' src={accountant} alt='kevin' />
                    </div>
                    <h1 className='profile_name'>Fat Meng</h1>
                    <h1 className='profile_title'>Accountant</h1>
                </div>
                <div className='profile_container'>
                    <div className='profile_photo_container'>
                        <Image className='profile_photo' src={staff_1} alt='kevin' />
                    </div>
                    <h1 className='profile_name'>A-Bu</h1>
                    <h1 className='profile_title'>Team Leader</h1>
                </div>
                <div className='profile_container'>
                    <div className='profile_photo_container'>
                        <Image className='profile_photo' src={staff_4} alt='kevin' />
                    </div>
                    <h1 className='profile_name'>A Di-A</h1>
                    <h1 className='profile_title'>Worker</h1>
                </div>
                <div className='profile_container'>
                    <div className='profile_photo_container'>
                        <Image className='profile_photo' src={staff_3} alt='kevin' />
                    </div>
                    <h1 className='profile_name'>Goo-Ro</h1>
                    <h1 className='profile_title'>Worker</h1>
                </div>
            </div>
        </main>
    )
}

export default page