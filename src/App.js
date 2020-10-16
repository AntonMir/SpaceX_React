import React, {/* Fragment */} from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
// import Calendar from './components/Calendar/Calendar';
// import Details from './components/Details/Details';

import FetchData from './service/FetchData';

import './style.css';


// так писали раньше, и это очень не удобно
// const app = React.createElement('div', {classNameName: 'App'}, 'Пример мир')   // 3 параметра 1-тип, 2-класс, 3-дочерние элементы


// function App() {
//   // return <div>Hello, world</div>;   // это и есть jsx синтаксис, который упрощает работу
//   return (      // если много строчек, будем использовать круглые скобки, туда и вставим верстку,
//                 //  НО тут должен быть один родитель обязательно
//     <React.Fragment>  {/* <React.Fragment> - общий родительский класс, необходимый для всей верстки!! ОН ОБЯЗАТЕЛЕН*/}
//       <>      {/* либо можем спользовать сокращенный вариант <React.Fragment> HTML </React.Fragment> = <> HTML </> */}
        
//         <Header />   {/* это наш импортированный Header из Header.js */}
//         <Main />     {/* это наш импортированный Header из Main.js */}
//         <Features />
//         <Footer />
//         <Calendar />
//         <Details />
//       </>
//     </React.Fragment>
//   );  
 
//   // return (
//   //   <div classNameName="App">
     
//   //   </div>
//   // );
// }

class App extends React.Component {   // наследуем все методы из встроенного класса React.Component

  // constructor() { // }; // вместо конструктора можем использовать state

  fetchData = new FetchData();  // объект со всеми значениями из класса FetchData

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
  };

  componentDidMount() {   // метод жизненного цикла, вызывается до рендера
    this.updateRocket();
  }

  

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) });
        return data
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => this.setState({ rocketFeatures }))
  }
  
  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocket)
  }

  render() {
    console.log(this.state);
    return (
      <>
        <Header rockets={ this.state.rockets } changeRocket={this.changeRocket} />   
        <Main rocket={this.state.rocket}/>    { /* передаем сюда значение из state */}
        <Features />
        <Footer />
      </>
    )
  }
}


export default App;
