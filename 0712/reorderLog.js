var reorderLogFiles = function(logs) {
    var letters = [], nums = [];
    
    // Separate digit-logs from letter-logs
    logs.forEach(function(log) {
        if((/[0-9]/i).test(log[log.indexOf(" ") + 1])) nums.push(log);
        else
            letters.push(log);
    });
    // Sort letter-logs
    letters.sort(function(a, b) {
        var cmp = a.slice(a.indexOf(" ")).localeCompare(b.slice(b.indexOf(" ")));
        return cmp === 0 ? a.localeCompare(b) : cmp;
    });
    
    return [...letters, ...nums];
};