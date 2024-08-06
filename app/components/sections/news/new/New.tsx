'use client'

import { NewInterface } from "@/app/data/new.data";
import styles from'./New.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { EffectCards, Pagination } from 'swiper/modules';

export function NewContainer ({value}:{value:NewInterface}) {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h3 className={styles.title}>{value.title}</h3>
                <p>{value.description}</p>
            </div>  
                        <Swiper                         
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards, Pagination]}
                            className={styles.swipperContainer}
                            pagination={{ clickable: true }}
                        >
                            {
                             value.images.map(src => 
                                <SwiperSlide key={src} className={styles.carrousel}>
                                    <Image className={styles.image} src={src} alt="peluche" fill sizes='500vh' />
                                </SwiperSlide>)
                            }
                        </Swiper>           
        </div>)
    }