import { create } from 'rrrr';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(create(App), document.getElementById('root'));
registerServiceWorker();
