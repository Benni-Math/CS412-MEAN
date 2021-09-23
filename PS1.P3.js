//Problem 3
const execute = (str, func) => func(str);
//Expression 1
const fragment = execute('supercalifragilisticexpialidocious', str => {
    let replacedStr = str.replaceAll('c','zc')
    let list = replacedStr.split('z')
    return list
})

//Expression 2
const replace = execute('supercalifragilisticexpialidocious', str => {
    let modifiedStr = str.replaceAll('a','A')
    let number = modifiedStr.match(/A/g).length
    let length = modifiedStr.length
    let object = {'originalString': str, 'modifiedString':modifiedStr, 'numberReplaced': number, 'length': length}
    console.table(object)
    return object
})
