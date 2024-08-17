import { NEWS } from '@/app/data/new.data'
import { NewContainer } from './new/New'
import styles from './News.module.css'

export function NewsSection () {
    return (
        <div className={styles.container}>
            <h2>Últimas noticias</h2>

            <div className={styles.newsContainer}>
            {
                NEWS.map(value => <NewContainer key={value.title} value={value}/> )
            }
            </div>      
        </div>)
    }