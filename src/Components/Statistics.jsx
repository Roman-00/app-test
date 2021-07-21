import React from 'react';

// Импортируем компоненты
import { Table } from './Table';

export const Statistics = ({ data }) => {

    // Вычисляем среднее
    const totalAverage = data.reduce((sum, el) => (sum + el.value), 0) / data.length;

    // Вычисляем медиану
    const medianSort = data.sort((a, b) => (a.value - b.value), 0);
    const median = medianSort.length % 2 ? medianSort[parseInt(medianSort.length / 2)].value : (medianSort[medianSort.length / 2].value + medianSort[medianSort.length / 2 - 1].value) / 2;

    return (
        <section className="statistics" id="statistics">
            <div className="container">
                <h2 className="section__title">Статистика</h2>
                
                <div className="table__wrapper">
                    <Table name="среднее">
                        {totalAverage}
                    </Table>
                    <Table name="стандартное отклонение">
                        4
                    </Table>
                    <Table name="мода">
                        6
                    </Table>
                    <Table name="медиана">
                        {median}
                    </Table>
                </div>

                <div className="statistics__result--block">
                    <div className="statistics__result--error">
                        <span className="statistics__result--error-text">Количество потерянных котировок:</span>
                        <span className="statistics__result--error-count">0</span>
                    </div>
                    <div className="statistics__result--time">
                        <span className="statistics__result--time-text">Время расчета:</span>
                        <span className="statistics__result--time-count">20s</span>
                    </div>
                </div>
            </div>
        </section>
    )
};