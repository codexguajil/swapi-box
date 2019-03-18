import React from 'react';
import {fetchFilms, fetchApi} from '../Methods/apiCalls';
import { shallow } from 'enzyme';

describe("apiCalls" , () => {
    describe("fetchApi", () => {
        let mockUrl;
        let mockResponse;

        beforeEach(() => {
            mockUrl = 'www.someurl.com';
            mockResponse = {
                count: 'hello'
            }

            fetch = jest.fn().mockImplementation(() => Promise.resolve({
                ok: true,
                status: 200,
                json: () => Promise.resolve(mockResponse),
              }));
        })

        it("should call fetch with the correct params", () => {

            // const url = 'https://swapi.co/api/films/'
            fetchApi(mockUrl)
            expect(fetch).toHaveBeenCalledWith(mockUrl)
        })

        it("should return the correct data", async () => {

            const result = await fetchApi(mockUrl)
            expect(result).toEqual(mockResponse)
        })

        it("should return an error if fetch call doesn't work", async () => {

            fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
                ok: false
              }));

            try {
                await fetchApi(mockUrl)
            } catch(error) {
                expect(error.message).toBe('error')
            }
        })
    })

})
