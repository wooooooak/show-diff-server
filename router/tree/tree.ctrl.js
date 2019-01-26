import dirTree from 'directory-tree';

const mode = {
	mod: dirTree('C:/Users/wooooooak/dev/dadada/Result/v1v2_MOD'),
	del: dirTree('C:/Users/wooooooak/dev/dadada/Result/v1v2_DEL'),
	add: dirTree('C:/Users/wooooooak/dev/dadada/Result/v1v2_ADD')
};

export const getTree = (req, res) => {
	res.json({ tree: mode[req.params.mode] });
};
