import Image from 'next/image';
import styles from './single.module.css'


const SinglePostPage = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src='/nextjs.png' alt='' fill/>
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src='/nextjs.png' alt=''  width={50} height={50}/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Sandeep</span>
                    </div>
                    <div className={styles.detailText}>
                        <div className={styles.detailTitle}>Published</div>
                        <div className={styles.detailValue}>01.01.2024</div>
                    </div>
                </div>
                <div className={styles.content}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo, amet quasi dolor sequi nisi ipsum, possimus maiores quaerat mollitia excepturi quos quis aspernatur incidunt magni iusto cum quia obcaecati qui.
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage;