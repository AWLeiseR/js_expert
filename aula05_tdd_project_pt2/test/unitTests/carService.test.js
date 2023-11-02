const { describe, it, before } = require('mocha')
const CarService = require('./../../src/service/carService')

const { join } = require('path')
const { expect } = require('chai')
const carsDataBase = join(__dirname, './../../database', 'cars.json')

const mocks = {
    validCarCategory: require('./../mocks/valid-carCategory.json'),
    validCar: require('./../mocks/valid-car.json'),
    validCustomer: require('./../mocks/valid-customer.json'),
}

describe('CarService suite Tests', () => {
    let carService = {}
    before(() => {
        carService = new CarService({ cars: carsDataBase })
    })
    it('given a carCAtegory it should return an available car!', async () => {
        const car = mocks.validCar
        const carCategory = Object.create(mocks.validCarCategory)
        carCategory.ids = [car.id]
        const result = await carService.getAvailableCar(carCategory)
        const expected = car
        expect(result).to.be.deep.equal(expected)
    })
})
