import { actionNotAvailableNotify } from 'src/utils/helpers'

export const sayMake = async (payload, context) => {
  return actionNotAvailableNotify(context)
}
