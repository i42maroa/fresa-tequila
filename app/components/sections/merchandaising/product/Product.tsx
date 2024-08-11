import Image from "next/image";
import styles from './Product.module.css'
import { ProductInterface } from "@/app/data/products.data";

export function Product ({product}:{product:ProductInterface}) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardImage}>
                <Image  className={styles.image} src={product.image} alt="peluche" fill sizes='500vh'></Image>  
            </div>
           <div className={styles.tagContainer}>
                <span className={styles.tag}>Novedad</span>
                <span className={styles.tag}>Edición exclusiva</span>
           </div>
           <div className={styles.cardContent}>
            <h3 className={styles.name}>{product.name}</h3>
            <span className={styles.prize}>{product.prize} €</span>
           </div>
        </div>
    )
}