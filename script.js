var result = 0;
function count(x) {
    console.log('clicked');
    if(x == '-'){
        result -= 1;
        document.getElementById('result').innerHTML = result;
        if (result<0) {
            document.getElementById('result').innerHTML = 0;
            result = 0;
        }
    }
    else{
        result += 1;
        document.getElementById('result').innerHTML = result;
    }
}