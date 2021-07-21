import React from 'react';

// Импортируем компонеты
import { Header } from '../Components/Header';
import { Statistics } from '../Components/Statistics';

// Импортируем подключение к серверу 
import { getData } from '../services/api';

export const Home = () => {

    //Создаем стейт в котором будем хранить данные
    const [data, setData] = React.useState({});

    // Создаем хук useEffect
    React.useEffect(() => {
        // Получаем данные с api
        getData()
            .catch((error) => {
                console.log(error);
            })
            .then((res) => {
                if (res.response.status === 200) {
                    setData(res.obj);
                } else {
                    console.log('Ошибка');
                }
            });
    }, []);

    return (
        <>
            <Header />
            {!data.length 
                ? 
                <div className="container">
                    Загрузка...
                </div>
                : 
                <Statistics data={data}/>}
        </>
    )
};