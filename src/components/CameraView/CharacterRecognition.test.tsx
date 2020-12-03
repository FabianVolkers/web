import { Scheduler } from 'tesseract.js';
import CharacterRecognition from './CharacterRecognition'

let characterRecognition: CharacterRecognition | null = null

beforeEach(() => {
    const candidates = [
        {
            name: 'philipp amthor',
            id: 1,
        },
        {
            name: 'renate künast',
            id: 2,
        },
        {
            name: 'angela merkel',
            id: 3,
        },
    ];

    characterRecognition = new CharacterRecognition(candidates);
})

describe('unittest', () => {
    it('receives the right candidates', () => {
        // given
        const candidates = [{name: 'test', id: 22}]

        // when
        const charRec = new CharacterRecognition(candidates)

        // then
        expect(charRec.candidates).toEqual(candidates)
    })
})
describe('integration test', () => {
    it('creates the tesseract scheduler', () => {
        expect(typeof characterRecognition?.scheduler).not.toBe(null)
    })
    it('creates the tesseract workers', async () =>{
        // given
        expect.assertions(1)

        // when
        await characterRecognition?.initialise()

        // then
        expect(characterRecognition?.scheduler.getNumWorkers()).toStrictEqual(1)
        
    })
})