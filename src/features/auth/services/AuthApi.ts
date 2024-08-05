import { ApiService } from '@core/services/api.service.ts'
import { container } from 'tsyringe'
import { API_ENDPOINTS } from '@shared/constants/apiEndpoints.ts'

const apiService = container.resolve(ApiService)

export const login = async (username: string, password: string) => {
    return apiService.post(API_ENDPOINTS.LOGIN, { username, password })
}
