function copy() {
    console.log("copy(): start");
    
    /* Get the text field */
    var input = document.getElementById("i1");

    /* Select the text field */
    input.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Paste to command line!");
    console.log("copy(): end");
}

function updateinstallstring(current, option) {
    console.log("updateinstallstring(): start");
    temp = document.getElementById("t1").value;
    console.log("t1 value: " + temp);
    if(temp == null) {
        temp = "sudo apt-get install";
    }
    console.log("t1 value: " + temp);
    if(option === "add") {
        temp += " " + current;
        console.log("add: " + current);
        console.log("t1 value: " + temp);
        document.getElementById("i1").value = temp;
    }
    else if(option === "remove") {
        temp = temp.replace(" " + current, "");
        console.log("remove: " + current);
        console.log("t1 value: " + temp);
        document.getElementById("i1").value = temp;
    }
    else {
        console.log("do nothing");
    }
    console.log("updateinstallstring(): end");
}

function updatescripttext() {
    console.log("returnscript(): start");
    appendpackage();
    console.log("returnscript(): end");
}