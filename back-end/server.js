import app from './app';
import Env from './config/env';

//PORT
const PORT = Env.PORT || 3000;

//listen
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});