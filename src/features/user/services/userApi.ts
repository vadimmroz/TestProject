import { ApiService } from '@core/services/api.service.ts'
import { container } from 'tsyringe'
import { User } from '@core/models/user.model.ts'
import { API_ENDPOINTS } from '@shared/constants/apiEndpoints.ts'

const apiService = container.resolve(ApiService)

export const userApi = {
    getUser: async (id: string) => {
        return apiService.get<User>(`${API_ENDPOINTS.GET_USER}/${id}`)
    },
    putUser: async (id: string, body: User) => {
        return apiService.put(`${API_ENDPOINTS.GET_USER}/${id}`, body)
    },
}
