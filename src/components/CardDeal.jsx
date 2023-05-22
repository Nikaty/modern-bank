import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'



const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Fine a better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Odio adipisci in nostrum similique eveniet officiis orem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quas? Ipsam accusamus quo dolor,  molestiae possimus ea non nesciunt animi consequatur dolores neque.</p>
      <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal