'use client';
import Image from 'next/image';
import MenuComponent from "../components/menuComponent/menuComponent";
import Slider from "../components/slider/slider"
import styles from './page.module.css';
import React from 'react';
import TelegramBot from "../components/telegramBot/telegramBot";


export default function Home() {
  return (
    <main>
      <div className={styles.homePage}>
        <div className={styles.videoWrapper}>        
            <video id='bgvideo' className={styles.video} loop autoPlay muted poster='/fonMain.png'>
              <source src="/myWorkSp.mp4" type="video/mp4"></source>
              {/* <source src="/myWorkSpWEBm.webm" type="video/webm"></source> */}
              Your browser does not support the video tag.              
            </video>           
        </div>   
          
        <div className={styles.titleMainPage}>
          <Image className={styles.image} src="/МГС Инж.png" alt="МГС" width={160} height={180}/>
          <div className={styles.textNameCompany}>            
            <h2>Проектное бюро &laquo;МГС Инжиниринг&raquo;</h2> 
            <p>Создаем иновационные решения</p>            
          </div>
          <div className={styles.emptyDiv}></div>          
        </div>

        <nav className={styles.navMenu} >   
          <MenuComponent nameLink="Расчет стоимости проекта" addressLinK="our-calc" />          
          <MenuComponent nameLink="Наша команда" addressLinK="aboutUs" />    
          <MenuComponent nameLink="Контакты" addressLinK="contacts" />              
        </nav>           

        <div className={styles.ourObject}>
           <Slider/>
        </div>

        <footer className={styles.footer}>
          &copy; Все права защищены: 2022 - {new Date().getFullYear()} год.
          <TelegramBot/> 
        </footer>  
          
      </div>          
    </main>
  )
}

