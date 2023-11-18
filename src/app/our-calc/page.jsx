'use client';
import style from "./ourCalc.module.css";
import GoHome from "../../components/goHome/goHome.jsx";
import PriceСalculator from "../../components/priceСalculator/priceСalculator.jsx";
import { useState } from "react";
import React from "react";
import TelegramBot from "../../components/telegramBot/telegramBot";

export default function Calculator() {  
    const [typeObject, setTypeObject] = useState('')
    const [squareObject, setSquareObject] = useState(1);
    const [meterObject, setMeterObject] = useState(0)   

    return (
    <div className={style.page}>
        <div className={style.background}></div>
        <div className={style.calculatorClass}>            
            <GoHome/>
            <div className={style.myPrice}>            
                <h2>Расчет стоимости проектирования</h2>         
                <div className={style.inputDate}>
                    <div className={style.calculatorClass}>Выберите назначение объекта:</div> 
                    <form>
                        <select 
                            name="calc" 
                            id="calc-select"
                            value={typeObject}
                            onChange={(e) => setTypeObject(e.target.value)}              
                        >
                            <option value=""> --Выберите тип объекта-- </option>
                            <option value="hous">Жилая недвижимость</option>
                            <option value="office">Офисная недвижимость</option>
                            <option value="factory">Производство</option>
                            <option value="warehouse">Складская недвижимость</option>
                        </select>             
                    </form>
                    
                    <div className={style.calculatorClass}>Введите площадь объекта, м2:</div>
                    <input 
                        id="squareObject"
                        type="number"  
                        value={squareObject} 
                        onChange={(e) => setSquareObject(e.target.value)}
                    />
                    <div className={style.calculatorClass}>Введите длинну наружных сетей, м.п.:</div>
                    <input 
                        id="meterObject"
                        type="number"  
                        value={meterObject} 
                        onChange={(e) => setMeterObject(e.target.value)}
                    /> 
                </div>  
            </div>       
            <div className={style.calc}>                            
                <PriceСalculator squareObject={squareObject} typeObject={typeObject} meter={meterObject} />
            </div> 
            <footer className={style.footer}>
                &copy; Все права защищены: 2022 - {new Date().getFullYear()} год.
                <TelegramBot/> 
            </footer>  
        </div>
    </div>    
    )
}