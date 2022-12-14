  import karelia_tur_kanyon from './../img/karelia-tur-kanyon.jpg'
  import gori_kvkaz from "./../img/gori-kavkaza.jpg"
  import gori_altaya from "./../img/gori-altaya.jpg"
  import kurili from "./../img/kurili.png"
  const stateOfTurs = [{
    img: karelia_tur_kanyon,
    header: 'Русская Скандинавия',
    discriptions: 'Карелия – уникальный мир, поражающий своей величественной природой и загадочностью. По сегодняшний день сохранились здесь нетронутые реки, озера и леса, самые чистые в Европе. И недаром сюда едут туристы, вырвавшиеся из каменных джунглей за глотком чистейшего воздуха, за ласкающей взгляд  красивейшей природой.Карелия – уникальный мир, поражающий своей величественной природой и загадочностью. По сегодняшний день сохранились здесь нетронутые реки, озера и леса, самые чистые в Европе. И недаром сюда едут туристы, вырвавшиеся из каменных джунглей за глотком чистейшего воздуха, за ласкающей взгляд  красивейшей природой.'
},
{
    img: gori_kvkaz,
    header: 'Кавказ',
    discriptions: 'Российский Кавказ — обширная территория между Черным, Азовским и Каспийским морями. В регионе выделяют Западный Кавказ (до Эльбруса), Центральный Кавказ (между Эльбрусом и Казбеком) и Восточный Кавказ (к востоку от Казбека).На Кавказе практически безграничные возможности для отдыха: красивые пейзажи и разнообразные ландшафты, пляжные курорты и горнолыжные склоны, мягкий климат, уникальная флора, древние памятники, лечебные минеральные источники, а также знаменитая кавказская кухня, которая стала популярной далеко за пределами этого региона.'
},
{
    img: gori_altaya,
    header: 'Алтай',
    discriptions: 'Горный Алтай — одно из мест в России, которое обязательно нужно посетить хотя бы раз в жизни. В путеводитель по Республике Алтай вошли всевозможные достопримечательности, начиная с привычных музеев и заканчивая уникальными природными и этнографическими памятниками, входящими в список объектов Всемирного наследия ЮНЕСКО.Первое, что бросается в глаза при пересечении этих земель, — разнообразие пейзажей за окном автомобиля. Хвойные леса, заснеженные горы, безлюдные степи и небольшие поселения день за днем сменяют друг друга.'
}, {
    img: kurili,
    header: 'Курильские острова',
    discriptions: 'Курильские острова — это архипелаг из 30 крупных и более 20 мелких островов между Тихим океанов и Охотским морем, между Японией и Камчаткой. Из 56 островов постоянно заселены только 4 — Кунашир, Итуруп, Шикотан и Парамушир.Сюда едут искатели приключений и впечатляющих пейзажей, те, кому не страшны далекие расстояния, неразвитая туристическая инфраструктура и сложность рельефа. В этой статье расскажем об особенностях отдыха на Курилах.'
}]
const typeOfTurs = (state = stateOfTurs, action) => {
    switch (action.type) {
        default: return state
    }
}

export default typeOfTurs