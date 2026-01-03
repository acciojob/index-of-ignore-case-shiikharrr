function indexOfIgnoreCase(s1, s2) {
  if (s2 === "") 
	  return 0; 
	if (s1 === "" || s2.length > s1.length)
		return -1;
	const hay = s1.toLowerCase();
	const needle = s2.toLowerCase();
	return hay.indexOf(needle);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
