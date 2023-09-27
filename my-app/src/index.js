import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function NavBar() {
  return (
    <nav>
      <h1>Bob's Bistro</h1>
      <ul>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
      </ul>
   </nav>
  )
}


const page = (
  <div>
      <h1>My awesome website in React</h1>
      <h3>Reasons I love React</h3>
      <ol>
          <li>It's composable</li>
          <li>It's declarative</li>
          <li>It's a hireable skill</li>
          <li>It's actively maintained by skilled people</li>
      </ol>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(page)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
