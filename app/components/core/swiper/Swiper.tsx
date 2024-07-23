'use client'

import styles from './Swiper.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { EffectCards, Pagination } from 'swiper/modules';

export function SwiperComponent () {
    return (
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards, Pagination]}
            className={styles.container}
            pagination={{
              clickable: true
            }}
          >
            <SwiperSlide className={styles.carrousel}>
            <h3>Fresiluche</h3>
              <h4>14.99€</h4>
              <div className={styles.imageContainer}>
                <Image className={styles.image} src="/images/merchandaising/peluche.jpeg" alt="peluche" fill sizes='500vh' />
                
              </div>
                
            </SwiperSlide>
            <SwiperSlide className={styles.carrousel}>
            <h3>FresiTaz</h3>
            <h4>9.99€</h4>
            <div className={styles.imageContainer}>
              <Image className={styles.image} src="/images/merchandaising/taza.jpeg" alt="taza" fill sizes='500vh' />
              
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.carrousel}>
            <h3>Fresialbornoz</h3>
            <h4>20.99€</h4>
            <div className={styles.imageContainer}>
              <Image className={styles.image} src="/images/merchandaising/toalla.jpeg" alt="toalla" fill sizes='500vh' />
              
              </div>
            </SwiperSlide>
          </Swiper> 
       
      );
}