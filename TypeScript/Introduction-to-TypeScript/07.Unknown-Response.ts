function unknownResponse(obj: unknown): string {
  if ('value' in (obj as any) && typeof (obj as any).value === 'string') {
    return (obj as any).value;
  }

  return '-';
}

console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));
console.log(unknownResponse({ code: 201, text: 'Created', value: { name: 'Test', age: 20 } }));
console.log(unknownResponse({ code: 201, text: 'Created', value: 'Object Created' }));
console.log(unknownResponse({ code: 404, text: 'Not found' }));
console.log(unknownResponse({ code: 500, text: 'Internal Server Error' }));
