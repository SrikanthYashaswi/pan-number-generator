# A predictable fast pan number generator.

Usage

```
const { generatePan, generateRandomPan, generateSerialPan } = require('./pan-generator');

generatePan(0)  // => AAAAA0000A
generatePan(1)  // => AAAAA0000B
generatePan(25) // => AAAAA0000Z
generatePan(26) // => AAAAA0001A

generateRandomPan() // => KPWHY0210T
generateRandomPan() // => BKUBA1223S
generateRandomPan() // => FGKNN4725Z
generateRandomPan() // => HYHGI3531C
generateSerialPan(31) 
/*
=>  
 ['AAAAA0000A',
  'AAAAA0000B',
  'AAAAA0000C',
  'AAAAA0000D',
  'AAAAA0000E',
  'AAAAA0000F',
  'AAAAA0000G',
  'AAAAA0000H',
  'AAAAA0000I',
  'AAAAA0000J',
  'AAAAA0000K',
  'AAAAA0000L',
  'AAAAA0000M',
  'AAAAA0000N',
  'AAAAA0000O',
  'AAAAA0000P',
  'AAAAA0000Q',
  'AAAAA0000R',
  'AAAAA0000S',
  'AAAAA0000T',
  'AAAAA0000U',
  'AAAAA0000V',
  'AAAAA0000W',
  'AAAAA0000X',
  'AAAAA0000Y',
  'AAAAA0000Z',
  'AAAAA0001A',
  'AAAAA0001B',
  'AAAAA0001C',
  'AAAAA0001D',
  'AAAAA0001E']
*/


```
