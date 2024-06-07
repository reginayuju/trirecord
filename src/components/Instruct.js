import React, { useState, useEffect } from "react";
import './index.css';
import { Table } from 'antd'
// import type { TableColumnsType } from 'antd';
import { Image } from "antd";
import { Carousel, Button } from 'antd';
import A1 from "../images/S__69984357_0.jpg"
import A2 from "../images/S__69984356_0.jpg"
import dayjs from "dayjs";

// // interface DataType {
//     key: React.Key;
//     比賽名稱: string;
//     日期: string;
//     跑步時間: string;
//     單車時間: string;
//     游泳時間: string;
//     description: string;
// }


// const columns: TableColumnsType<DataType> = [
//     { title: '比賽名稱', dataIndex: 'name', key: 'name' },
//     Table.EXPAND_COLUMN,
//     { title: '日期', dataIndex: 'age', key: 'age' },
//     Table.SELECTION_COLUMN,
//     { title: '跑步時間', dataIndex: 'address', key: 'address' },
//     Table.SELECTION_COLUMN,
//     { title: '單車時間', dataIndex: 'address', key: 'address' },
//     Table.SELECTION_COLUMN,
//     { title: '游泳時間', dataIndex: 'address', key: 'address' },
// ];

// const data: DataType[] = [
//     {
//         key: 1,
//         比賽名稱: '2024台東三鐵',
//         日期: '2024-04-28',
//         跑步時間: '1:14:00',
//         單車時間: '00:00:00',
//         游泳時間: '00:00:00',
//         description: '00:00:00',

//     },
//     {
//         key: 2,
//         比賽名稱: '2024台東三鐵',
//         日期: '2024-04-28',
//         跑步時間: '1:14:00',
//         單車時間: '00:00:00',
//         游泳時間: '00:00:00',
//         description: '00:00:00',
//     },
//     {
//         key: 3,
//         比賽名稱: '2024台東三鐵',
//         日期: '2024-04-28',
//         跑步時間: '1:14:00',
//         單車時間: '00:00:00',
//         游泳時間: '00:00:00',
//         description: '00:00:00',
//     },
// ];

// const App: React.FC = () => (
//     <Table
//         columns={columns}
//         rowSelection={{}}
//         expandable={{
//             expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
//         }}
//         dataSource={data}
//     />
// );

// const Instruct = () => {

//     const [curTime, setCurTime] = useState(0);

//     useEffect(() => {
//         console.log(curTime)
//     }, [curTime])

//     const onChangeButton = () => {
//         setCurTime(curTime + 1)
//     }

//     const [curTime, setCurTime] = useState(0);

//     useEffect(() => {

//         const interval = setInterval(() => {

//             setCurTime(curTime + 1)

//         }, 1000)
//         return () => clearInterval(interval);

//     }, [curTime])


    function calulateTimeLeft() {
        // let currentTime = new Date().toLocaleString();
        // console.log(currentTime.split(" "));
        let year = new Date().getFullYear();
        let month = new Date().getMonth();

        let different = null;
        let timeLeft = {};

        // 如果已經超過10月，則算到下一年
        if (month > 10) {
            different = new Date(`${12}/${25}/${year + 1}`) - new Date();
        } else {
            different = new Date(`${12}/${25}/${year}`) - new Date();
        }

        if (different > 0) {
            timeLeft = {
                days: Math.floor(different / (1000 * 60 * 60 * 24)),
                hours: Math.floor((different / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((different / (1000 * 60)) % 60),
                seconds: Math.floor((different / 1000) % 60)
            };
        }

        return timeLeft;
    }

    // 以 calulateTimeLeft 回傳值 初始化距離 10/10 剩下的時間


    // const [nextDate, setNextDate] = useState()
    // setNextDate(dayjs('2018-08-08'))
    const nnnn = dayjs('2018-08-08')
    const [timeLeft, setTimeLeft] = useState(calulateTimeLeft());

    // useEffect 處理 timer
    useEffect(() => {
        let id = setInterval(() => {
            setTimeLeft(calulateTimeLeft());
        }, 1000);
        return function () {
            clearInterval(id);
        };
    }, [timeLeft]);


    return (

        <div class="container">
            {nnnn}

            <h1>

                <br />倒數計時器
            </h1>
            <p>
                距離 下場比賽 還有{timeLeft.days}天 {timeLeft.hours}時 {timeLeft.minutes}分{" "}
                {timeLeft.seconds}秒
            </p>
            {/* <button onClick={}>暫停計時</button> */}


            <div class="header">
                {/* <img src="images/S__69984357_0.jpg" alt="你的照片" class="profile-pic"> */}
                <Carousel autoplay>
                    <Image width="30%" height="10%" src={A1} />
                    <Image width="30%" height="10%" src={A2} />
                    <Image width="30%" height="10%" src={A1} />
                    <Image width="30%" height="10%" src={A2} />
                </Carousel>

                {/* <Button onClick={onChangeButton}>按我 </Button> */}

                <h1>{ }</h1>
                <h2>不務正業的寵物美容師</h2>
                <p>這是一段關於你的自我介紹，介紹你的背景、興趣和專長。</p>
            </div>

            <div class="section">
                <h3>下一場比賽資訊</h3>
                <p>比賽名稱：TWB 雙塔520</p>
                <p>比賽日期：<span id="race-date">2024-11-02T00:00:00</span></p>
                <div class="countdown">
                    <p>距離比賽還有：</p>
                    <p id="countdown-timer"></p>
                </div>
            </div>


            <div class="section table-container">
                <h3>歷史比賽成績</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>比賽名稱</th>
                            <th>日期</th>
                            <th>跑步時間</th>
                            <th>游泳時間</th>
                            <th>單車時間</th>
                            <th>總時間</th>
                            <th>名次</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2024 Challenge Taiwan in Taitung</td>
                            <td>2024-04-28</td>
                            <td>1:04:39</td>
                            <td>0:38:11</td>
                            <td>1:31:09</td>
                            <td>7:26:35</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>2023台北半程馬拉松</td>
                            <td>2023-12-17</td>
                            <td>1:57:48</td>
                            <td>-</td>
                            <td>-</td>
                            <td>1:57:48</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>2022台北半程馬拉松</td>
                            <td>2022-12-17</td>
                            <td>2:05:39</td>
                            <td>-</td>
                            <td>-</td>
                            <td>2:05:39</td>
                            <td>-</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div >




    )
// }
export default Instruct;