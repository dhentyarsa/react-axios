import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import notHome from './Pages/notHome'
import Navbar from './components/navbar'
// import { thisExpression } from '@babel/types'
// import { directive } from '@babel/types'
// import logo from './logo.svg';
// import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Route path='/' component={Homepage} exact />
        <Route path='/not-home' component={notHome} />
      </div>
    )
  }
}
// class App extends Component{

//   state = {
//     nama: 'Putra',
//     sekolah: 'Purwadhika',
//     number: 0
//   }

//   gantiNama = () => {
//     if(this.state.nama === 'Putra')
//       this.setState({nama: 'Andi', sekolah: 'Random'})
//     else{
//       this.setState({nama: 'Putra', sekolah: 'Purwadhika'})
//     }
//   }

//   kurang = () => {
//     this.setState({number : this.state.number - 1})
//   }

//   tambah = () => {
//     this.setState({number : this.state.number + 1})
//   }

//   reset = () => {
//     this.setState({number : 0})
//   }

//   render(){
//     return(
//       <div>
//         <div>
//           {this.state.nama}
//           {this.state.sekolah}
//         </div>
//         <button onClick={this.gantiNama}>
//             Click Me!
//         </button>
//         <div>
//           <br></br>
//           {this.state.number}
//           <button onClick={this.kurang}>
//             -
//           </button>
//           <button onClick={this.tambah}>
//             +
//           </button>
//           <br></br>
//           <button onClick={this.reset}>
//             Reset
//           </button>
//         </div>
//       </div>
//     )
//   }

// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
