import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider} from 'react-redux';
import { createStore } from 'redux';

const store = createStore(() => ({
  activeWork: -1,
  blogWriting: false,
  currentMode: 0,
  posts: [
    {
      id: 0,
      title: "Test post",
      body: "Test body",
      comments: [
        {
          id: 0,
          author: "Luke",
          body: "Hi there"
        },
        {
          id: 1,
          author: "John",
          body: "Hello"
        }
      ]
    },
    {
      id: 1,
      title: "Test post 2",
      body: "Test body",
      comments: [
        {
          id: 0,
          author: "Luke",
          body: "Hi there"
        },
        {
          id: 1,
          author: "John",
          body: "Hello"
        }
      ]
    }
  ]
  
}));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
