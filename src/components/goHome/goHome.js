import Link from "next/link";
import styles from "./goHome.module.css";

export default function Contact() {
    return (
        <div className={styles.goHome}>            
            <Link className={styles.goHomeText} href="/">
                <div >
                     &lArr; НАЗАД
                </div>                
            </Link>             
            
        </div>
    )
};