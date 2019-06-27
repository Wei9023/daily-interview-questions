var romanToInt = function(s) {
    let str = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000};
    let a=0;
    if(s.indexOf("IV")!=-1) a-=2;
    if(s.indexOf("IX")!=-1) a-=2;
    if(s.indexOf("XL")!=-1) a-=20;
    if(s.indexOf("XC")!=-1) a-=20;
    if(s.indexOf("CD")!=-1) a-=200;
    if(s.indexOf("CM")!=-1) a-=200;
    
    for(let i=0;i<s.length;i++){
       a+= str[s[i]];
    }
    
    return a;
};