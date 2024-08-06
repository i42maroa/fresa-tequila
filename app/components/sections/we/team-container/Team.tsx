import { MEMBERS } from '@/app/data/team.data'
import styles from './Team.module.css'
import Image from 'next/image'

export function TeamContainer(){
    
    return (
        <div>
            <h2>Nuestro equipo</h2>

            <div className={styles.membersContainer}>
                {   
                    MEMBERS.map(data => 
                        <div key={data.name}  className={styles.member}>
                             <div className={styles.memberImage}>
                             <Image  alt={data.name} src={data.url} fill sizes='500vh' /> 
                             </div>
                            
                            <h3>{data.name}</h3>
                            <h4>{data.puesto}</h4>
                            <p>{data.description}</p>
                        </div>
                    )
                }

            </div>
        </div>
    )
}