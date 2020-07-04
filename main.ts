console.log(Deno.cwd())

const res = await fetch("https://fireship.io")

console.log(res)

import * as log from 'https://deno.land/std/log/mod.ts'

log.debug(res)
