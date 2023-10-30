import Link from "next/link"
import styles from "./aboutUs.module.css"
import GoHome from "../goHome/goHome.js";
import Image from "next/image";

const staff = [
  {name: "Igor Zhuravlev", src: "/staff/IgorZ.jfif", post: "HVAC design engineer"},
  {name: "Vadim Minakov", src: "/staff/VadimM.jpg", post: "Electrical design engineer"},
  {name: "Igor Mikhalev", src: "/staff/IgorM2.jpg", post: "Engineer designer of low-current networks"},
  {name: "Ilya Korol", src: "/staff/IlyaK.PNG", post: "Engineer designer of water supply and sewerage"},
  {name: "Sergey Berezhnoy", src: "/staff/SergeyB.PNG", post: "HVAC design engineer"},  
]


export default function AboutUs() {
    return (
        <div className={styles.aboutUs}>          

          <div className={styles.goHomeButton}>            
            <GoHome />
          </div>            
          <h1 className={styles.brendy1}>
            НАША
          </h1>

          <h1 className={styles.brendy2}>
            КОМАНДА
          </h1>
          

          <div className={styles.letters}>
            <span className={styles.letters2}>МГС</span><span className={styles.letters3}>инжиниринг</span>
          </div>

          <div className={styles.ourStaffImages}>
            {staff.map((e) => { 
              return (               
                <figure key="figureMy" className={styles.figureStaff}>        
                  <Image className={styles.img} src={e.src} width={250} height={260} alt="фото"/>
                  <figcaption className={styles.figcaptionImg}> {e.name} <br/>{e.post} </figcaption>
                </figure>
              )
            })}
          </div> 
        </div>         
      )
};