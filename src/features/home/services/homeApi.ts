import { ApiService } from '@core/services/api.service.ts'
import { container } from 'tsyringe'
import { TData } from '@/types/commonTypes'
import { API_ENDPOINTS } from '@shared/constants/apiEndpoints.ts'

const apiService = container.resolve(ApiService)

export const homeApi = {
    getData: async () => {
        return apiService.get<TData[]>(API_ENDPOINTS.GET_HOME_DATA)
    },
}
