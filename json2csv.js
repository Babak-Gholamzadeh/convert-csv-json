const json2csv = json => 
    Object.keys(json[0]).join(',') + '\n' +
		json.map(obj => 
			Object.values(obj).join(',')
		).join('\n');
