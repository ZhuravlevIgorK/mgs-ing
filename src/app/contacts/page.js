'use client';
import styles from "@/app/contacts/cont.module.css";
import GoHome from "../../components/goHome/goHome.js";
import Image from "next/image.js";
import TelegramBot from "../../components/telegramBot/telegramBot.js";

export default function Contact() {
    return (       
           
        <div className={styles.contact}> 
            <div className={styles.head}>      
                <GoHome/>
                <div></div>
                <Image className={styles.image} src="/МГС Инж.png" alt="МГС" width={160} height={180}/>
            </div>    
            <h1>КОНТАКТЫ</h1>

            <div className={styles.mapsAndTel}>
                <div className={styles.contacts}>
                    <div className={styles.contactMy}>Наш офис:</div>
                    <div  className={styles.contactText}>
                        Московская область
                        <br/>г.Королев
                        <br/>ул.Нестеренко  д.25
                        <br/>tel +7 (926)567-93-30
                        <br/>fax +7 (499)849-71-21   
                    </div>             
                </div>
                <div>
                    <h3>Мы на карте</h3>
                    <div className={styles.map1}>                 
                    <a href="https://yandex.ru/maps/?um=constructor%3A64c2cc8b5387373147ae9ca99c7fdc4a7c95c8ca33ed8fa826dce5f076d44534&amp;source=constructorStatic" target="_blank"><img src="https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A64c2cc8b5387373147ae9ca99c7fdc4a7c95c8ca33ed8fa826dce5f076d44534&amp;width=600&amp;height=450&amp;lang=ru_RU" alt="" style={{borderRadius: '15px'}} /></a>
                    </div>
                </div>
            </div> 

            <footer className={styles.Footer}>
                &copy; Все права защищены: 2022 - {new Date().getFullYear()} год.
                <TelegramBot/> 
            </footer>              
            
        </div>
       
    )
};


