
import "./App.css";
import TopNews from "./components/TopNews";
import TopRightModule from "./components/TopRightModule";
import MainMenuModule from "./components/MainMenuModule";
import RatesModule from "./components/RatesModule";
import WeatherModule from "./components/WeatherModule";
import PopularModule from "./components/PopularModule";
import MapModule from "./components/MapModule";
import TvPrograms from "./components/TvPrograms";
import EfirModule from "./components/EfirModule";
import MainBannerModule from "./components/MainBannerModule";
import SearchModule from "./components/SearchModule";
import TabModule from "./components/TabModule";

let items = [
  { 
    "title": 'Сейчас в СМИ',  
    "content": "",
    "active" : true
  },  
  { 
    "title": 'в Иркутске',  
    "content": "" ,
    "active" : false
  },
  { 
    "title": 'Рекомендуем',  
    "content": "" ,
    "active" : false
  },
];

let topArticles = [
  { 
    "id": "1",
    "imgSrc": "img/1.webp",
    "title": "Современные технологии достигли такого уровня, что базовый вектор развития представляет собой интересный эксперимент",
    "link": "https://yandex.ru/search/?text=news1" 
  },
  { 
    "id": "2",
    "imgSrc": "img/2.webp",
    "title": "В своём стремлении улучшить пользовательский опыт мы упускаем сделанные на базе интернет-аналитики выводы",
    "link": "https://yandex.ru/search/?text=news2" 
  },
  { 
    "id": "3",
    "imgSrc": "img/3.webp",
    "title": "Идейные соображения высшего порядка требует от нас анализа направлений прогрессивного развития.",
    "link": "https://yandex.ru/search/?text=news3" 
  },
  { 
    "id": "4",
    "imgSrc": "img/4.webp",
    "title": "Безусловно, сплочённость команды профессионалов представляет собой интересный эксперимент",
    "link": "https://yandex.ru/search/?text=news4" 
  },
  { 
    "id": "5",
    "imgSrc": "img/5.webp",
    "title": "Прежде всего, высокотехнологичная концепция общественного уклада играет определяющее значение ",
    "link": "https://yandex.ru/search/?text=news5" 
  },  
];
let topRightModuleData =
  {
    "imgSrc": "https://via.placeholder.com/110x110",
    "title": "Работа над ошибками",
    "link": "https://yandex.ru/search/?text=news5" ,
    "text": "Смотрите на Яндексе и запоминайте"
  };
let rates = [
  {
    "name" : "USD MOEX",
    "val" : "63.52",
    "diff" : "+0.09"
  },
  {
    "name" : "EUR MOEX",
    "val" : "70.86",
    "diff" : "+0.14"
  },
  {
    "name" : "НЕФТЬ",
    "val" : "64,90",
    "diff" : "+1.63%"
  }
];
let mainMenu = [
  {
    "text" : "Видео",
    "url" : "/video"
  },
  {
    "text" : "Картинки",
    "url" : "/images"
  },
  {
    "text" : "Новости",
    "url" : "/news"
  },
  {
    "text" : "Карты",
    "url" : "/map"
  },
  {
    "text" : "Маркет",
    "url" : "/market"
  },
  {
    "text" : "Переводчик",
    "url" : "/translator"
  },
  {
    "text" : "Эфир",
    "url" : "/efir"
  },
  
];

let weather = {
  "icon" : "https://via.placeholder.com/80x50",
  "temperatureNow" : "-31",
  "temperatureMorning" : "-33",
  "temperatureEvening" : "-35",

};
let news = [
  {
    "title" : "Недвижимость",
    "link" : "https://ya.ru?s=ytrtyhghgf",
    "descr" : "о сталинках"
  },
  {
    "title" : "Маркет",
    "link" : "https://ya.ru?s=rtyhghgf",
    "descr" : "люстры и светильники"
  },
  {
    "title" : "Авто.ру",
    "link" : "https://ya.ru?s=hghgf",
    "descr" : "привод 4х4 до 500 000"
  },
];

let location = "Иркутске";
let dataMap = {  
  "linkMap" : "https://yandex.ru/maps/",
  "linkDescription" : "https://yandex.ru/?s=yuyuuyg",
  "description" : "Расписания",
 } 

 let programsList = [
  {
    "time" : "02:00",
    "title" : "THT. The Best",
    "link" : "https://ya.ru?s=1",
    "channel" : "THT International",
    "channelLink" : "https://ya.ru?s=11"  
  },
  {
    "time" : "02:15",
    "title" : "Джинглики",
    "link" : "https://ya.ru?s=2",
    "channel" : "Карусель INT",
    "channelLink" : "https://ya.ru?s=22"  
  },
  {
    "time" : "02:25",
    "title" : "Наедине со всеми",
    "link" : "https://ya.ru?s=3",
    "channel" : "Первый",
    "channelLink" : "https://ya.ru?s=33"  
  },

];
let efirList = [
  {
    "title" : "Управление как искусство",
    "link" : "https://ya.ru?s=4",
    "channel" : "Успех",
    "channelLink" : "https://ya.ru?s=44"  
  },
  {
    "title" : "Ночь. Мир в это время",
    "link" : "https://ya.ru?s=5",
    "channel" : "earthtV",
    "channelLink" : "https://ya.ru?s=55"  
  },
  {
    "title" : "Андрей Возн...",
    "link" : "https://ya.ru?s=6",
    "channel" : "Совершенно ",
    "channelLink" : "https://ya.ru?s=66"  
  },

];


function App() {
  return (
    <div className="App">
      <div className = "container mt-4 p-0" >
        <div className="row">
          <div className="col-md-7">
            <TabModule items = {items} />
            <TopNews news = {topArticles}/>
            <RatesModule rates = {rates} />
          </div>
          <div className="d-flex position-relative col-md-5">
            <TopRightModule elem = {topRightModuleData}/>
          </div>
        </div>

      </div>
      <div className = "container" >
      <div className="row">
        <div className="col-12 p-0"><MainMenuModule menu = {mainMenu}/></div>
      </div>

        <div className="row position-relative search-block">
          <SearchModule />
        </div>
        <div className="row">
          <div className="col-12 p-0">Найдется всё. Например, <span className="text-black-50">фаза луны сегодня</span></div>
        </div>
      </div>
      <div className = "container" >
        <div className="row">
          <div className="col-12 p-0 banner pt-3">
            <MainBannerModule url = "https://yandex.com"  alt="banner" src="https://via.placeholder.com/836x103" />
           
          </div>
        </div>
      </div>
      <div className = "container mt-5 small" >
        <div className="row">
          
          <div className="col-md-4">
            <WeatherModule weather = {weather}/>
            <PopularModule popular = {news} />
          </div>
          <div className="col-md-4">
            <MapModule location = {location} data = {dataMap}/>
            <TvPrograms data = {programsList}/>
          </div>
          <div className="col-md-4">
            <EfirModule data = {efirList}/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
