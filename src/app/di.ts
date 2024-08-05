import { container } from 'tsyringe'
import AuthService from '@core/services/auth.service'
import ApiService from '@core/services/api.service'

container.registerSingleton(ApiService)
container.registerSingleton(AuthService)
