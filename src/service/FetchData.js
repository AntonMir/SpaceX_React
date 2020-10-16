// Делаем запрос API

export default class FetchData {    // класс на экспорт с API

  startURL = 'https://api.spacexdata.com/v4/';

  getResource = async url => {   // тут будет запрос к Fecth
    const res = await fetch(url);   //  fetch асинхроная функция. 
                                    //await - пока не произойдет запроса, пока не придет ответ, в res не запишется результат
    if (!res.ok) {
      throw new Error (`Произошла ошибка ${res.status}`);
    }

    return await res.json();    // обрабатываем с помощью json
  };


  // специально для нашего приложения
  getRocket = async () => await this.getResource(this.startURL + 'rockets');

  getLaunches = async () => await this.getResource(this.startURL + 'launches/path');

  getCompany = async () => await this.getResource(this.startURL + 'company');

}