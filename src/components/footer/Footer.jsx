import styles from './footer.module.css'

const Footer = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.logo}>NextDev</div>
            <div className={styles.text}>NextDev Creative Thoughts © All rights reserved.</div>
        </div>
        );
}

export default Footer;