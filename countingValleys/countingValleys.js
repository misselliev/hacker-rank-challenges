function countingValleys(n,s){
    let elevation=0;
    let valleyCount=0;
    let i=0;
    s= s.split("");

    while (i<s.length){
        if(s[i]=="U"){
            elevation++;
        }
        else if(s[i]=="D"){
            elevation--;
        }
        if(elevation=0 && s[i]=="D"){
            valleyCount++;
        }
        i++;
    }
    return valleyCount;
}