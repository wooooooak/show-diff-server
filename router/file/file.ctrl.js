import fs from 'fs';

import summary from 'C:/Users/wooooooak/dev/dadada/Result/output_summary/v1_v2_summary.json';

export const getSummary = (req, res) => {
	res.json(summary);
};

export const getDiffFile = (req, res) => {
	const array = fs.readFileSync(req.query.path).toString().split('\n');
	const jsonArray = array.map((str) => {
		const v1Line = str.slice(0, 9);
		const v2Line = str.slice(10, 18);
		const symbol = str.slice(19, 20);
		const string = str.slice(20);
		return {
			v1Line,
			v2Line,
			symbol,
			string
		};
	});

	res.json({ content: jsonArray });
};

export const getOriginFile = (req, res) => {
	const array = fs.readFileSync(req.query.path).toString().split('\n');
	const jsonArray = array.map((str) => {
		const v1Line = str.slice(0, 9);
		const symbol = str.slice(10, 11);
		const string = str.slice(11);
		const v2Line = '';
		return {
			v1Line,
			v2Line,
			symbol,
			string
		};
	});

	res.json({ content: jsonArray });
};
