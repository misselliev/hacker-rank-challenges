function sockMerchant(n, ar) {
    var pairs = 0;
        ar.sort(); //sort in order
        for(let i=0; i<n;i++){
            if(ar[i] == ar[i+1]){ //compare two consecutive positions
                i++; //increase counter
                pairs++; //increase pair count
               }
        }
    return pairs;
    }