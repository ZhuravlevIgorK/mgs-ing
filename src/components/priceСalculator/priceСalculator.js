import styles from "./priceСalculator.module.css";
import { DownloadTableExcel } from 'react-export-table-to-excel';
import { useRef } from "react";


const ourPrice = {
    hous: { ОВиК:{П:50, РД:108}, ЭОМ:{П:43, РД:86}, СС:{П:36, РД: 76}, В:{П:22, РД: 32}, К:{П:22, РД: 32}, ЭЭ:{П:40,}, НВК:{П:220, РД:330},ТП:{П:120, РД:180}, СетиС:{П:72, РД:110}, ЭС:{П:90, РД:130}},
    office: { ОВиК:{П:57, РД:122}, ЭОМ:{П:49, РД:97}, СС:{П:41, РД: 85}, В:{П:24, РД: 36}, К:{П:24, РД: 36}, ЭЭ:{П:42,}, НВК:{П:220, РД:330},ТП:{П:120, РД:180}, СетиС:{П:72, РД:110}, ЭС:{П:90, РД:130}},
    factory: { ОВиК:{П:54, РД:115}, ЭОМ:{П:46, РД:92}, СС:{П:38, РД: 80}, В:{П:23, РД: 34}, К:{П:23, РД: 34}, ЭЭ:{П:42,}, НВК:{П:220, РД:330},ТП:{П:120, РД:180}, СетиС:{П:72, РД:110}, ЭС:{П:90, РД:130}},
    warehouse: { ОВиК:{П:44, РД:95}, ЭОМ:{П:38, РД:76}, СС:{П:32, РД: 66}, В:{П:19, РД: 28}, К:{П:19, РД: 28}, ЭЭ:{П:40,}, НВК:{П:220, РД:330},ТП:{П:120, РД:180}, СетиС:{П:72, РД:110}, ЭС:{П:90, РД:130}},
}

export default function PriceСalculator(props) {
    const tableRef = useRef(null);
    let square = props.squareObject; 
    let type = props.typeObject;
    let meter = props.meter;

    let myPrice = 0;
    if (type == "hous") {
        myPrice = ourPrice.hous
    } else if (type == "office") {
        myPrice = ourPrice.office
    } else if (type == "factory") {
        myPrice = ourPrice.factory
    } else {
        myPrice = ourPrice.warehouse
    }
        
    return (
        <div className={styles.priceСalculator}>
            <div> 
                <DownloadTableExcel
                        filename="users table"
                        sheet="users"
                        currentTableRef={tableRef.current}                    
                    >
                        <button className={styles.button}>Скачать расчет</button>                 
                </DownloadTableExcel>
            </div>
            <table ref={tableRef}>
                <caption className={styles.titleTable}>Цена расчитывается автоматически, после введения исходных данных</caption>
                <thead>
                    <tr>
                        <th >№</th>
                        <th>Раздел проекта</th>
                        <th>Стадия П, стоимость, руб.</th>
                        <th>Стадия РД, стоимость, руб.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={4}>Внутренние инженерные сети</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Отопление, вентиляция и кондиционирование</td>
                        <td id="П"> {square*myPrice.ОВиК.П} </td>
                        <td id="РД"> {square*myPrice.ОВиК.РД} </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Водоснабжение</td>
                        <td id="П"> {square*myPrice.В.П} </td>
                        <td id="РД"> {square*myPrice.В.РД} </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Канализация</td>
                        <td id="П"> {square*myPrice.К.П} </td>
                        <td id="РД"> {square*myPrice.К.РД} </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>ЭОМ</td>
                        <td id="П"> {square*myPrice.ЭОМ.П} </td>
                        <td id="РД"> {square*myPrice.ЭОМ.РД} </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Слаботочные сети</td>
                        <td id="П"> {square*myPrice.СС.П} </td>
                        <td id="РД"> {square*myPrice.СС.РД} </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Энергоэфективность</td>
                        <td id="П"> {square*myPrice.ЭЭ.П} </td>
                        <td id="РД"> - </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>Наружные сети</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>НВК</td>
                        <td id="П"> {meter*myPrice.НВК.П} </td>
                        <td id="РД"> {meter*myPrice.НВК.РД} </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Теплосеть</td>
                        <td id="П"> {meter*myPrice.ТП.П} </td>
                        <td id="РД"> {meter*myPrice.ТП.РД} </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Электросеть</td>
                        <td id="П"> {meter*myPrice.ЭС.П} </td>
                        <td id="РД"> {meter*myPrice.ЭС.РД} </td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Сети связи</td>
                        <td id="П"> {meter*myPrice.СетиС.П} </td>
                        <td id="РД"> {meter*myPrice.СетиС.РД} </td>
                    </tr>

                </tbody>
            </table>          
            
        </div>      

    )
}