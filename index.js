//Roman Numeral Decryptor
//from I-M


const romanum = (s) => {
    let answer = 0;
    for(let i=0; i<s.length; i++) {
        if (s[i] == "I") {
            answer += 1;
        } 
        else if (s[i] == "V") {
            if(s[i-1] == "I") {
                answer += 3;
            }
            else {
                answer += 5;
            }
        } 
        else if (s[i] == "X") {
            if(s[i-1] == "I") {
                answer += 8;
            }
            else {
                answer += 10;
            }
        } 
        else if (s[i] == "L") {
            if(s[i-1] == "X") {
                answer += 30;
            }
            else {
                answer += 50;
            }
        } 
        else if (s[i] == "C") {
            if(s[i-1] == "X") {
                answer += 80;
            }
            else {
                answer += 100;
            }
        } 
        else if (s[i] == "D") {
            if(s[i-1] == "C") {
                answer += 300;
            }
            else {
                answer += 500;
            }
        } 
        else if (s[i] == "M") {
            if(s[i-1] == "C") {
                answer += 800;
            }
            else {
                answer += 1000;
            }
        } 
    }
    return answer;
};

export default romanum;