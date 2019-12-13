const csv2json = csv => {
    var lines = csv.split('\n');
    var fields = lines[0].split(',');
    lines.splice(0, 1);
    return lines.map(line =>
            line.split(',').reduce(
                (result, field, index) =>
                    Object.assign(result, {
                        [fields[index].trim()]: field
                    })
                , {})
			);
}
