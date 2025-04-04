import React from "react";
import { Link } from "react-router-dom";
import Quest from "./Quest";

function MainPage() {
    return(
        <div className="App">
          <header>
        <nav>
            <ul className="menu">
                <li className="element_nav"><a href="#timeline">Хронология событий</a></li>
                <li className="element_nav"><a href="#main_event">Важнейшие события</a></li>
                <li className="element_nav"><a href="">Ещё инфа</a></li>
                <li className="element_nav"><a href="">Ещё инфа</a></li>
                <li className="element_nav"><a href="">Ещё инфа</a></li>
                <li className="element_nav"><a href="#sources">Источники</a></li>
            </ul>
        </nav>
        <div className="header_bg">
            <h1>ничто не забыто</h1>
            <hr className="vertical"/>
            <p>никто не забыт</p>
        </div>

        <button><a href="#timeline">Узнать больше</a></button>
    </header>

      <section>
        <div className="timeline" id="timeline">
          <h1 className="timeline_text">Хронология событий</h1>
          <h1 className="info_strong">Соотношение сил сторон</h1>
          <div className="tml">
            <div className="outer">
              <div className="card">
                <h3 className="title">Первый (июнь 1941-ноябрь 1942)</h3>
                <ul className="submenu">
                  <li>
                    <div className="info">
                      <p>Прорыв немецких войск через советскую границу. Захват Германией Прибалтики, Белоруссии, большей части Украины, юга России. Блокада Ленинграда. Поражение немцев под Москвой</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3 className="title">Второй (ноябрь 1942-декабрь 1943)</h3>
                <ul className="submenu">
                  <li>
                    <div className="info">
                      <p>Победа советских войск в крупных сражениях: Сталинградской, Курской и битве за Днепр. Потеря Германией стратегической инициативы</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3 className="title">Третий (январь 1944-май 1945)</h3>
                <ul className="submenu">
                  <li>
                    <div className="info">
                      <p>Отвоевание Союзом своих земель. Освобождение Восточноевропейских стран от фашистских захватчиков. Поражение Германии</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3 className="title">Международные конференции</h3>
                <ul className="submenu">
                  <li>
                    <div className="info">
                      <p>После подписания Акта о капитуляции Германии, летом 1945 года, в Потсдаме собрались лидеры стран-победительниц. Союзники выработали общие принципы ведения новой мировой политики и определили новые границы в Европе и мире.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="info_timeline">
              <div className="strong">
                <div className="red_army">
                  <div className="red_title">
                    <img src="../img/icon/serp.png" alt="" className="img_red" />
                    <h2 className="red_army_title">Красная армия</h2>
                  </div>
                  <hr />
                  <div className="red_army_block">
                    <div className="content">
                      <img src="../img/icon/hat.png" alt="" className="img_hat" />
                      <p>Кол-во дивизий: 190</p>
                    </div>
                    <div className="content">
                      <img src="../img/icon/hat.png" alt="" className="img_hat" />
                      <p>Личный состав: 3 262 851</p>
                    </div>
                    <div className="content">
                      <img src="../img/icon/hat.png" alt="" className="img_hat" />
                      <p>Танки и штурмовые орудия: 15 687</p>
                    </div>
                  </div>
                </div>

                <div className="vermaht">
                  <div className="red_title">
                    <img src="../img/icon/krest.png" alt="" className="img_red" />
                    <h2 className="vermaht_title">Вермахт</h2>
                  </div>
                  <hr />
                  <div className="red_army_block">
                    <div className="content">
                      <img src="../img/icon/hat.png" alt="" className="img_hat" />
                      <p>Кол-во дивизий: 190</p>
                    </div>
                    <div className="content">
                      <img src="../img/icon/hat.png" alt="" className="img_hat" />
                      <p>Личный состав: 3 262 851</p>
                    </div>
                    <div className="content">
                      <img src="../img/icon/hat.png" alt="" className="img_hat" />
                      <p>Танки и штурмовые орудия: 15 687</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="main_event" id="main_event">
          <h1>Важнейшие события</h1>
          <div className="event">
            <img src="../img/middle/one.png" alt="" />
            <div className="event_text">
              <h2 className="obr1">Этап I.</h2>
              <h2 className="obr2">Оборонительный</h2>
              <h3>Основные события:</h3>
              <ul>
                <li>22 июня 1941 года. Начало Великой Отечественной войны. Нападение Германии и её союзников на СССР — операция «Барбаросса»;</li>
                <li>22 июня — конец июля 1941 года. Оборона Брестской крепости;</li>
                <li>10 июля — 30 сентября 1941 года. Ленинградская операция; Начало блокады Ленинграда (8 сентября 1941 года);</li>
                <li>30 сентября — 5 декабря 1941 года. Битва за Москву;</li>
              </ul>
            </div>
          </div>

          <hr className="separator" />

          <div className="event_2">
            <img src="../img/middle/two.png" alt="" />
            <div className="event_text_2">
              <h2 className="obr1">Этап II.</h2>
              <h2 className="obr2">Наступательный</h2>
              <h3>Основные события:</h3>
              <ul>
                <li>19 ноября 1942 года. Начало контрнаступления советских войск под Сталинградом;</li>
                <li>2 ноября 1942 года — 18 января 1943 года. Частичный прорыв блокады Ленинграда: операция «Искра»;</li>
                <li>31 января — 2 февраля 1943 года. Капитуляция германских войск под Сталинградом. Пленение нацистского фельдмаршала Ф. Паулюса;</li>
                <li>5 июля — 23 августа 1943 года. Курская битва;</li>
              </ul>
            </div>
          </div>

          <hr className="separator" />

          <div className="event">
            <img src="../img/middle/three.png" alt="" />
            <div className="event_text">
              <h2 className="obr1">Этап III.</h2>
              <h2 className="obr3">Заключительный</h2>
              <h3>Основные события:</h3>
              <ul>
                <li>14-30 января 1944 года. Операция «Январский гром»: полное снятие блокады Ленинграда;</li>
                <li>8 апреля — 12 мая 1944 года. Крымская операция;</li>
                <li>23 июня — 29 августа 1944 года. Операция «Багратион». Освобождение Белоруссии.</li>
                <li>16 апреля — 8 мая 1945 года. Берлинская операция;</li>
                <li>8 мая 1945 года. Подписания Акта о безоговорочной капитуляции Германии;</li>
              </ul>
            </div>
          </div>

          <hr className="separator" />



        </section>

        <footer id="sources">
          <div className="links">
            <h2>Источники</h2>
            <hr />
            <a href="https://api.nntu.ru">Главный ресурс</a>
            <a href="https://ru.wikipedia.org/wiki/Великая_Отечественная_война#Соотношение_сил">Какой то сайт ещё</a>
            <a href="">А я думал сова</a>
            <a href="">А я думал сова</a>
          </div>

          <Link to='/two' className="button-to-quest"><button className="tk">тыкни ну тыкни заебал</button></Link>

          <div className="links">
            <h2>Источники</h2>
            <hr />
            <a href="https://api.nntu.ru">Главный ресурс</a>
            <a href="https://ru.wikipedia.org/wiki/Великая_Отечественная_война#Соотношение_сил">Какой то сайт ещё</a>
            <a href="">А я думал сова</a>
            <a href="">А я думал сова</a>
          </div>
        </footer>
    </div>
    );
}

export default MainPage;