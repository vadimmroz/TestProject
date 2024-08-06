import { injectable } from 'tsyringe'
import { API_BASE_URL } from '@shared/constants/apiEndpoints.ts'

@injectable()
export class ApiService {
    baseUrl = API_BASE_URL

    async get<T>(endpoint: string): Promise<T> {
        const response = await fetch(`${this.baseUrl}${endpoint}`)
        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }
        return response.json()
    }

    async post<T>(endpoint: string, body: unknown): Promise<T> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }
        return response.json()
    }
    async put<T>(endpoint: string, body: unknown): Promise<T> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`)
        }
        return response.json()
    }
}

export default ApiService
