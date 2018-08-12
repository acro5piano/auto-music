import * as _ from 'lodash'

// const possibleNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B' ]

interface Notes {
  [key: string]: NoteForCode
}

interface NoteForCode {
  [relative: number]: string
}

const notes: Notes = {
  G: {
    3: 'B',
    5: 'D',
    6: 'E',
    7: 'F#',
    9: 'A',
  },
  A: {
    3: 'C#',
    5: 'E',
    6: 'G',
    7: 'C#',
    9: 'B',
  },
  Bm: {
    3: 'D',
    5: 'F#',
    6: 'G',
    7: 'A',
    9: 'C#',
  },
}

// const codes = ['Bm', 'G', 'Bm', 'A']
const codes = ['G', 'A', 'Bm', 'Bm']

type Code = keyof typeof notes

// const probability = {
//   3: 0.3,
//   5: 0.3,
//   6: 0.1,
//   9: 0.3,
// }

const getNotesFromCodeWithProb = (note: NoteForCode) => {
  const dice = Math.floor(Math.random() * 10)
  if (dice < 3) {
    return note[3]
  }
  if (dice < 5) {
    return note[5]
  }
  if (dice < 6) {
    return note[6]
  }
  if (dice < 8) {
    return note[7]
  }
  return note[9]
}

const getNoteFromCode = (code: Code) => getNotesFromCodeWithProb(notes[code])

const getMelodyFromCode = (code: Code) =>
  Array(2)
    .fill(0)
    .map(() => getNoteFromCode(code))

console.log('1:')
console.log(codes.map(c => getMelodyFromCode(c as Code)))
console.log('2:')
console.log(codes.map(c => getMelodyFromCode(c as Code)))
console.log('3:')
console.log(codes.map(c => getMelodyFromCode(c as Code)))
console.log('4:')
console.log(codes.map(c => getMelodyFromCode(c as Code)))
