

type HttpResponse = {
    code: number,
    text: string,
    printChars? : number
}

function printInfo(obj: HttpResponse): void {

    if ('printChars' in obj){
        console.log(obj.text.slice(0, obj.printChars))
    } else {
        console.log(obj.text)
    }

}

printInfo({ code: 200, text: 'OK'})
printInfo({ code: 201, text: 'Created'})
printInfo({ code: 400, text: 'Bad Request', printChars: 4})
printInfo({ code: 404, text: 'Not Found'})
printInfo({ code: 404, text: 'Not Found', printChars: 3})
printInfo({ code: 500, text: 'Internal Server Error', printChars: 1})