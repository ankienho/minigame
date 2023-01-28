let a = [[1001,1002,1003],[1004,1005,1006],[1007,1008,1009]];
let b = [[15,23,11],[6,25,17],[20,14,31]];
let test = [[1001, 1002, 0 ],[0, 0, 1006 ],[1007, 0, 0, ]];
/*for (let i = 0 ; i<a.length; i++){
    for (let j = 0; j < a.length; j++){
        document.write(a[i][j] +" // ");
    }
};*/
// check colums
let count = 0;
let NUM = 999999;
do {
    let n = 0;
    NUM = Math.floor(Math.random() * 100) + 1;
    for (let i = 0; i< b.length; i++){
        for(let j = 0; j<b.length; j++){
            if(NUM == b[i][j]) {
                a[i][j] = 0;
            }
        }
    }
    for (let i = 0; i< a.length; i++){
        for(let j = 0; j<a.length; j++){
            if(a[i][j] == 0) {
                if(checCross(a) || checktheColumsnRows(a)){
                    n = 1;
                    break;
                }
            }else{
                continue;
            }
        }
    };
    
    count++;
    for (let i = 0 ; i<a.length; i++){
        document.write("[");
        for (let j = 0; j < a.length; j++){
            document.writeln( a[i][j] +",");
        }
        document.write("],");
    };
    document.write("] ~~~~~~~~~~~~~~~~~~~");
    if (n == 1){
        alert ("done! sau "+ count);
        break;
        
    }
} while(true);















function checktheColumsnRows(a) {
    let index = 0;
    for (let i = 0; i< a.length; i++){
        for(let j = 0; j<a.length; j++){
            let x = j;
            if(a[i][j] == a[i][j+1]){
                index++;
                if (index == a.length-1){
                    return true;
                };
            } else { 
                j = x;
                index = 0;
                continue;
            }
        }
    };
    for (let i = 0; i< a.length; i++){
        let x = 0;
        while(x<a.length-1){  
            if(a[x][i]==a[x+1][i]){
                index++;
                if (index == a.length-1){
                    return true;
                };
                x++;
            } else{
                index = 0;
                break;
            }
        }
    };
    
    return false;
};


function checCross(a){
    let index = 0;
    let x = a.length -1;
    for(let i=0; i<a.length-1;i++){
        if(a[i][i] == a[i+1][i+1]){
            index ++;
            if (index == a.length-1) {
                return true;
            }
        } else {
            index = 0;
        };
        
    };
    index = 0;
    for (let i = 0; i<a.length-1; i++){
        if (a[i][x-i]==a[i+1][x-i-1]){
            index ++;
            if (index == a.length-1) {
                return true;
            }
        } else {
            index = 0;
        }
    }
    return false;
}
/*checktheColumsnRows(a);
checCross(a);*/

/*for (let i = 0; i< a.length; i++){
    for(let j = 0; j<a.length; j++){
        if(a[i][j] == a[i][j])
    }
}*/


/*if(checCross(test) ){
    alert ("đúng cái chéo");
} else {
    alert (" ?? ");
}

if(checktheColumsnRows(test) ){
    alert ("đúng cái kia");
} else {
    alert (" ?? ");
}*/