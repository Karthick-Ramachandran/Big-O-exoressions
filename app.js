// O(n)
// as the n grows the runtime also grows

function logatleattwo(n){

    for(var i = 1; i <= Math.max(2, n); i++){

        return i;

    }

}

// O(1)

// whatever may be the value of n.. the runtime stays constant

function logatmostsix(n){

    for(var i = 1; i <= Math.min(6, n); i++){

        return i;

    }

}


