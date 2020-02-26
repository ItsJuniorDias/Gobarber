import Reactotron from 'reactotron-react-js';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure().connect({
    enabled: true,
    host: '192.168.0.106', // server ip
    port: 9090,
  });

  tron.clear();

  console.tron = tron;
}
