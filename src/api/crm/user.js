import crm from '../instances/crm'

export const userLoginOld = async (data) => {
  try {
    const r = await crm.post('auth/login', data)
    return r.data
  } catch (e) {
    console.warn('catch userLogin', e)
    return e
  }
}

export const userLogin = async (data) => {
  try {
    const r = await crm.post('operator/login', data)
    return r.data
  } catch (e) {
    console.warn('catch userLogin', e)
    return e
  }
}

export const userRatings = async () => {
  try {
    const r = await crm.get(`ratings?_=${Date.now()}`)
    return r.data
  } catch (e) {
    console.warn('catch userRatings', e)
    return e
  }
}

export const userRatingsHard = async () => {
  try {
    const r = await crm.get(`operator/ratings?_=${Date.now()}`)
    return r.data
  } catch (e) {
    console.warn('catch userRatingsHard', e)
    return e
  }
}

export const getAllEmployees = async () => {
  try {
    const r = await crm.get('employees')
    return r.data
  } catch (e) {
    console.warn('catch getAllEmployees', e)
    return e
  }
}

export const getSubordinateEmployees = async (short = false) => {
  const params = { short }
  try {
    const r = await crm.get('supervisor/subordinates', { params })
    return r.data
  } catch (e) {
    console.warn('catch getSubordinateEmployees', e)
    return e
  }
}

export const impersonate = async (id = 0) => {
  try {
    const r = await crm.put('supervisor/impersonate', { id })
    return r.data
  } catch (e) {
    console.warn('catch impersonate', e)
    return e
  }
}

export const getGroups = async () => {
  try {
    const r = await crm.get('supervisor/groups')
    return r.data
  } catch (e) {
    console.warn('catch getGroups', e)
  }
}
