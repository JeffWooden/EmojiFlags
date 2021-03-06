var presets = {
    rainbow: ['red','orange','yellow','green','blue','purple'],
    lesbian: ['red','orange','white','pink','purple'], // better gradient ?
    bisexual: ['pink','purple','blue'], // magenta ?
    pansexual: ['pink','yellow','blue'],
    polysexual: ['pink','green','blue'],
    asexual: ['black','light-gray','white','purple'],
    skolisexual: ['yellow','green','white','black'],
    autosexual: ['blue','light-gray'],
    abrosexual: ['green','white','pink'], // better gradient ?
    graysexuals: ['purple','light-gray','white','light-gray','purple'],
    androsexual: ['blue','brown','purple'],
    gynosexal: ['pink','brown','green'],
    demisexual: ['black','white','purple','light-gray'],
    demigirl: ['gray','light-gray','pink','white','pink','light-gray','gray'],
    demiboy: ['gray','light-gray','aqua','white','aqua','light-gray','gray'],
    transgender: ['aqua','pink','white','pink','aqua'],
    greygender: ['light-gray','blue','gray'],
    neutrois: ['white','green','black'],
    nonbinary: ['yellow','white','purple','black'],
    polyamorous: ['blue','red','black'],
    lithromantic: ['green','yellow','light-gray'],
    aromantic: ['green','white','light-gray','black'], // better gradient ?
    panromantic: ['blue','green','orange','red'],
    wtfromantic: ['black','green','blue','light-gray'],
    platromantic: ['orange','gray','light-gray','black'],
    demiromantic: ['black','white','green','light-gray']
}

var emojis = {
    white: ['๐ง','๐ฅ','๐','๐ฅ','๐','๐ฅ','๐ฐ'],
    pink: ['๐','๐','๐ฉฐ','๐ฆฉ'],
    purple: ['๐ฃ','๐ช','๐ฎ','๐ช','๐ต','๐'],
    red: ['๐','๐งฐ'],
    orange: ['๐ ','๐ง','๐','๐งก'],
    yellow: ['๐จ','๐ก','๐จ','๐','๐ง'],
    green: ['๐ข','๐ฉ','๐งถ','๐','๐'],
    aqua: ['๐ซ','๐ง','๐งผ'],
    blue: ['๐','๐','๐ง','๐','๐','๐งข'],
    brown: ['๐ซ','๐ค','๐ค','๐','๐ฉ','๐ช','๐ช'],
    light_gray: ['๐'],
    gray: ['๐ฑ','๐','๐ฉ','๐'],
    black: ['๐ค','โซ']
}

function choice(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}