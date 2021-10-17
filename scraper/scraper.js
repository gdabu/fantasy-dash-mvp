const rows = document.querySelectorAll("tr");


const list = Object.values(rows).map((row) => {
	var cells = row.querySelectorAll("td");
	return {
    name: cells[2]?.querySelector("a>span")?.innerHTML,
    pos: cells[3]?.innerHTML,
    team: cells[4]?.innerHTML,
    gp: cells[5]?.innerHTML,
    mpg: cells[6]?.innerHTML,
    fg: cells[7]?.querySelector(".pull-left")?.innerHTML,
    ft: cells[8]?.querySelector(".pull-left")?.innerHTML,
    '3pt': cells[9]?.querySelector("span")?.innerHTML,
    pts: cells[10]?.querySelector("span")?.innerHTML,
    reb: cells[11]?.querySelector("span")?.innerHTML,
    ast: cells[12]?.querySelector("span")?.innerHTML,
    stl: cells[13]?.querySelector("span")?.innerHTML,
    blk: cells[14]?.querySelector("span")?.innerHTML,
    to: cells[15]?.querySelector("span")?.innerHTML,
  };
})

const filteredList = list.filter((item) => {
	return item.name !== undefined;
})

console.log(JSON.stringify(filteredList));
// console.log(filteredList.length);