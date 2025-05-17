enum Days2 {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function reversedDay(day: string) : void {

    console.log(Days2[day as keyof typeof Days2] || 'error')
}

reversedDay('Monday')
reversedDay('Friday')
reversedDay('Invalid')