

function isNonEmptyStringArray(arg: unknown): arg is string[] {

    return Array.isArray(arg) && arg.length > 0 && arg.every(el => typeof el === 'string');
}

let arr: unknown = ['a', 'b', 'c'];
if (isNonEmptyStringArray(arr)) {
    console.log(arr.length);    // allowed
}


