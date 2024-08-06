import 'reflect-metadata'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ApiService } from '@core/services/api.service'

describe('ApiService', () => {
    let apiService: ApiService

    beforeEach(() => {
        apiService = new ApiService()
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('should make a GET request and return data', async () => {
        const mockData = { data: 'test' }
        vi.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        } as Response)

        const result = await apiService.get('/test-endpoint')
        expect(result).toEqual(mockData)
        expect(fetch).toHaveBeenCalledWith(
            `${apiService.baseUrl}/test-endpoint`
        )
    })

    it('should make a POST request and return data', async () => {
        const mockData = { data: 'test' }
        const mockBody = { key: 'value' }
        vi.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        } as Response)

        const result = await apiService.post('/test-endpoint', mockBody)
        expect(result).toEqual(mockData)
        expect(fetch).toHaveBeenCalledWith(
            `${apiService.baseUrl}/test-endpoint`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mockBody),
            }
        )
    })

    it('should make a PUT request and return data', async () => {
        const mockData = { data: 'test' }
        const mockBody = { key: 'value' }
        vi.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: true,
            json: async () => mockData,
        } as Response)

        const result = await apiService.put('/test-endpoint', mockBody)
        expect(result).toEqual(mockData)
        expect(fetch).toHaveBeenCalledWith(
            `${apiService.baseUrl}/test-endpoint`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mockBody),
            }
        )
    })

    it('should throw an error if the GET request fails', async () => {
        vi.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: false,
            statusText: 'Not Found',
        } as Response)

        await expect(apiService.get('/test-endpoint')).rejects.toThrow(
            'Error: Not Found'
        )
    })

    it('should throw an error if the POST request fails', async () => {
        vi.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: false,
            statusText: 'Internal Server Error',
        } as Response)

        await expect(apiService.post('/test-endpoint', {})).rejects.toThrow(
            'Error: Internal Server Error'
        )
    })

    it('should throw an error if the PUT request fails', async () => {
        vi.spyOn(global, 'fetch').mockResolvedValueOnce({
            ok: false,
            statusText: 'Bad Request',
        } as Response)

        await expect(apiService.put('/test-endpoint', {})).rejects.toThrow(
            'Error: Bad Request'
        )
    })
})
