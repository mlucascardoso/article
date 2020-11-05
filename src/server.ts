import { ApplicationFactory } from './main/app/factory';

const app = ApplicationFactory.assemble();

app
    .bootstrap()
    .then(app => app.listen(3000))
    .then(() => console.log(`server listening on port ${3000}`))
    .catch(err => console.error(err));