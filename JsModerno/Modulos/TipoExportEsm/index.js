import {inline} from './inline.js' // nesse formato tenho que usar o mesmo nome.
import defaultInline  from './inline.js' // nesse caso posso colocar qualquer nome , porque ele foi exportado como default
import {group} from './non-inline.js'
import exportDefault from './non-inline.js'

inline()
defaultInline()

group()
exportDefault()