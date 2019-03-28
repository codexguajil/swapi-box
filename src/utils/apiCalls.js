import React from 'react';

export const fetchFilms = async (url) => {
    try {
        const response = await fetch(url)
        const parsedResponse = await response.json()
        return parsedResponse
    } catch(error) {
        return error.message
    }
}

export const fetchApi = async (url) => {
    try {
        const response = await fetch(url)
        const parsedResponse = await response.json()
        return await parsedResponse
    } catch(error) {
        return error.message
    }
}