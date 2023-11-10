function func() {
    const obj = document.getElementById("textbox");
    let pattern_obj = document.getElementById("pattern");
    // console.log(obj.value);
    const str = "FORMULAQSOLUTIONS";
    let total_lines = (obj.value % 2 == 0) ? (obj.value/2) + 1 : (obj.value + 1) / 2;
    let ctr = 0;
    let str_out = "";
    for(let i = 1; i <= total_lines; i++) {
        for(let j = 1; j <= total_lines - i; j++) {
            str_out += ' ';
        }
        for(let j = 0; j < 2 * i - 1; j++) {
            str_out += str[ctr];
            ctr++;
            if(ctr == str.length)
                ctr = 0;
        }
        let ele = document.createElement("div");
        ele.innerText = str_out;
        pattern_obj.appendChild(ele);
    }

    for (let i = 1; i <= total_lines - 1; i++) {
        // printing spaces
        for (let j = 0; j < i; j++) {
            str_out += ' ';
        }
        // printing star
        for (let k = (total_lines - i) * 2 - 1; k > 0; k--) {
            str_out += str[ctr];
            ctr++;
            if(ctr == str.length)
                ctr = 0;
        }
        let ele = document.createElement("div");
        ele.style.width = "100vw";
        ele.innerText = str_out;
        pattern_obj.appendChild(ele);
    }
}