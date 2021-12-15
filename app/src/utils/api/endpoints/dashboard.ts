import { TAdminDashboard, TStaffDashbaord } from '@model/Dashboard'
import { AxiosResponse } from 'axios'
import instance from '@utils/api'
import { baseEndpoint } from '@utils/api/apiEndpoint'

export const fetchDashboard = async (): Promise<
  AxiosResponse<TStaffDashbaord & TAdminDashboard>
> =>
  await instance.get<TStaffDashbaord & TAdminDashboard>(
    `${baseEndpoint.dashboard}/salon`
  )

const dashboard = {
  fetchDashboard
}

export default dashboard
