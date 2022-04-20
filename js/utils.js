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
    demiboy: ['gray','light-gray','light-blue','white','light-blue','light-gray','gray'],
    transgender: ['blue','pink','white','pink','blue'],
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

function choice(arr){
    return arr[Math.floor(Math.random()*arr.length)]
}