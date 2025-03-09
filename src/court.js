export const court = (yourName, judgeCount, otherPeopleNames) => {
    if (judgeCount > 4) {
        return 30
    }

    const allAttendeeNames = [...otherPeopleNames.split(" "), yourName];;
    
    for (let i = 1; i < 5; i++) {
        let current = allAttendeeNames[i];
        let j = i - 1;

        while (j >= 0 && allAttendeeNames[j] > current) {
            allAttendeeNames[j + 1] = allAttendeeNames[j];
            j--;
        }
        
        allAttendeeNames[j + 1] = current;
    }
    
    const yourPosition = allAttendeeNames.indexOf(yourName);
    
    const judgeCountToPositionTime = [
        [30, 60, 90, 120, 150],
        [30, 30, 60, 60, 120],
        [30, 30, 30, 60, 60],
        [30, 30, 30, 30, 60]
    ];
    
    return judgeCountToPositionTime[judgeCount - 1][yourPosition];
};