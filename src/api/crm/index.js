import * as user from './user'
import * as clients from './clients'
import * as loans from './loans'
import * as reports from './reports'
import * as calls from './calls'
import * as supervisor from './supervisor'
import * as schedule from './schedule'
import * as groups from './groups'

export default {
  ...user,
  ...clients,
  ...loans,
  ...reports,
  ...calls,
  ...supervisor,
  ...schedule,
  ...groups,
}
