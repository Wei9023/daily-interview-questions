//253. Meeting Rooms II
//Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

var minMeetingRooms = function(intervals){
    var starts = intervals.concat().sort(function(a,b){
        a[0]- b[0];
    })
    console.log(starts);
    var ends = intervals.concat().sort(function(a, b){
        a[1] - b[1];
    })
    console.log(ends);

    var rooms = 0;
    var over = 0;
    for(var i = 0; i < intervals.length; i ++){
        if(starts[i][0] < ends[over][1]){
            rooms ++;
            console.log(rooms);
        }else{
            over ++;
        }
    }
    return rooms;
}