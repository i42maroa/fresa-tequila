import { PRODUCTS_LIST } from "@/app/data/products.data";
import { SwiperComponent } from "../../core/swiper/Swiper";
import styles from './Merchandaising.module.css'
import { Product } from "./product/Product";

export function MerchandaisingSection () {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>Colección verano</h1>
{/* 
            <div className={styles.swiperContainer}>
                <SwiperComponent />
            </div>     */}

            <div className={styles.productContainer}>
                {
                    PRODUCTS_LIST.map((p, index) => <Product product={p} key={index}></Product>)
                }

            </div>

        </section>
    )
}