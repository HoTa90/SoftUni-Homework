
function convertArr(arg: string[]): [string, number]{

    const msg = arg.join('');
    const num = msg.length;

    return [msg, num]
   
}

console.log(convertArr(['How', 'are', 'you?']))
console.log(convertArr(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']))