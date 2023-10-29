'use client';
import { useState } from "react";
import styles from "./slider.module.css"
import Image from "next/image";

const data = [
    {title: "Слайдер 1", src: "/object/TEVA.jpg", object: "Офис фармацевтической кампании “TEVA”", description: "Проектирование внутренних инженерных систем"},
    {title: "Слайдер 2", src: "/object/БК“Главный”.jpg", object: "Бильярдный клуб “Главный”", description: "Проектирование и монтаж внутренних инженерных систем",},
    {title: "Слайдер 3", src: "/object/ЖК“Шоколад”.jpg", object: "ЖК “Шоколад”", description: "Проектирование внутренних инженерных систем"},
    {title: "Слайдер 4", src: "/object/Ресторанный синдикат.jpg", object: "Ресторан на Патриарших",description: "Проектирование и монтаж ОВиК и ВК"},
    {title: "Слайдер 5", src: "/object/ЖК “Дмитрослав”.jpg", object: "ЖК “Дмитрослав”", description: "Проектирование внутренних и наружных инженерных систем"},
    {title: "Слайдер 6", src: "/object/УВД ЮАО.jpg", object: "Здание УВД ЮАО", description: "Проектирование внутренних инженерных систем"},    
    {title: "Слайдер 7", src: "/object/Триумф-Палас.jpg", object: "Аппартаменты ЖК “Триумф-Палас”" , description: "Проектирование систем ОВиК, ВК, ЭОМ и СС"},    
];

export default function Slider() { 
    const [image, setImage] = useState(0);
    let numbImage = image;
   
    return (
        <div className={styles.sliderBox}> 
             
            <div className={styles.sliderName}>                              
                <h2>Наши объекты</h2>
                <div className={styles.text}>Проектирование и монтаж инженерных сетей</div>                
            </div>

            <p className={styles.text}>{data[numbImage].object}</p>
            {/* <p>{data[numbImage].description}</p> */}
                      
            <div className={styles.elem}>
                <button className={styles.button}
                    onClick={(e) => {
                        if (image > 0 ) {
                            setImage(image - 1);
                        } else {setImage(data.length-1)}                                         
                    }}
                >&lang;
                </button> 

                <Image className={styles.image} src={data[numbImage].src} height={290} width={600} alt={"img object"}/>          
            
                <button className={styles.button}
                        onClick={(e) => { 
                            if (image < data.length-1 ) {
                                setImage(image + 1);
                            } else {setImage(0)}
                        }}
                    >&rang;
                </button>
            </div>
                
            
        </div>     
    )
}
