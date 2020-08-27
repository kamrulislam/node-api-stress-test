import { app } from './app';

const server = app.listen(app.get('port'), () => {
  console.log(('API running at http://localhost:%d'),
  app.get('port'));
});

export default server;
