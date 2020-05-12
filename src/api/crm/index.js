import * as user from './user'
import * as clients from './clients'
import * as loans from './loans'
import * as reports from './reports'
import * as calls from './calls'

export default {
  ...user,
  ...clients,
  ...loans,
  ...reports,
  ...calls,
}
