import dva from 'dva';
import './index.css';
import example from './models/example.js'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);
app.model(example);

// 5. Start
app.start('#root');
