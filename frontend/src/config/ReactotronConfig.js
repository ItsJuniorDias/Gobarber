import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(reactotronSaga)
    .connect({
      enabled: true,
      host: '192.168.0.106', // server ip
      port: 9090,
    });

  tron.clear();

  console.tron = tron;
}
