import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

import api from './router';

app.use('/', api);

app.post('/test', (req, res) => {
	console.log('here');
});

const server = app.listen(3001, function() {
	console.log('Express server has started on port 3001');
});
