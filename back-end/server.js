import app from './app.js';
import Env from './config/env.js';

//PORT
const PORT = Env.PORT || 3000;

//listen
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});