const File = require('./src/file')
const { error } = require('./src/constants')
const assert = require('assert')
//IFEE
;(async () => {
    {
        const filePath = './mocks/emptyFile-invalid.csv'
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)
        await assert.rejects(result, expected)
    }
    {
        const filePath = './mocks/invalid-header.csv'
        const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)
        await assert.rejects(result, expected)
    }
    {
        const filePath = './mocks/fiveItems-invalid.csv'
        const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)
        await assert.rejects(result, expected)
    }
    {
        const filePath = './mocks/threeItems-valid.csv'
        const expected = [
            { id: 1, name: 'José', profession: 'developer', age: 34 },
            { id: 2, name: 'Guilherme', profession: 'developer', age: 30 },
            { id: 3, name: 'Bruno', profession: 'QA', age: 25 },
        ]
        const result = await File.csvToJSON(filePath)
        await assert.deepEqual(result, expected)
    }
})()
