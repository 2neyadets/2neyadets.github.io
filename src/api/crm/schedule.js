import { actionNotAvailableNotify } from 'src/utils/helpers'
import { date } from 'quasar'

const stringifyDate = (dateObj) => date.formatDate(dateObj, 'YYYY-MM-DD')
const startOfMonth = date.startOfDate(new Date(), 'month')
const daysInMonth = date.daysInMonth(startOfMonth)

const arrOfDatesStr = []
for (let i = 0; i < daysInMonth; i++) {
  arrOfDatesStr.push(stringifyDate(date.addToDate(startOfMonth, { days: i })))
}

export const getAllTimesheets = async () => {
  return {
    data: [
      {
        id: 35,
        createdAt: '2020-04-29T18:17:57+03:00',
        period: arrOfDatesStr[0],
        creator: {
          id: 247,
          fullName: 'Ооынлытд Зтебру Оквшгпиглъ',
          department: {
            id: 163,
            name: 'Отдел взыскания'
          },
          position: 'Начальник отдела взыскания'
        }
      }
    ]
  }
}

export const getOneTimesheet = async (payload) => {
  return {
    data: {
      timesheet: {
        id: 35,
        createdAt: '2020-04-29T18:17:57+03:00',
        period: arrOfDatesStr[0],
        creator: {
          id: 247,
          fullName: 'Ооынлытд Зтебру Оквшгпиглъ',
          department: {
            id: 163,
            name: 'Отдел взыскания'
          },
          position: 'Начальник отдела взыскания'
        }
      },
      assignee: {
        id: 340,
        fullName: 'Синцов Александр Вячеславович',
        department: {
          id: 155,
          name: 'Хард'
        },
        position: 'Руководитель Хард'
      },
      schedules: [
        {
          type: 'TwoOverTwo',
          employee: {
            id: 142,
            fullName: 'Крюков Дмитрий',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я37'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[1],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[2],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[3],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[4],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[5],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[6],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[7],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[8],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[9],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[10],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[11],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[12],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[13],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[14],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[15],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[16],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[17],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[18],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[19],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[20],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[21],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[22],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[23],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[24],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[25],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[26],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[27],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              hours: 11,
              status: 'plannedWorkday'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 350,
            fullName: 'Жилкин Альберт',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я63'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[1],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[2],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[3],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[4],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[5],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[6],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[7],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[8],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[9],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[10],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[11],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[12],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[13],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[14],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[15],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[16],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[17],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[18],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[19],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[20],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[21],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[22],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[23],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[24],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[25],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[26],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[27],
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              status: 'plannedDayOff'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 158,
            fullName: 'Поляшов Александр',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я52'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[1],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[2],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[3],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[4],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[5],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[6],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[7],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[8],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[9],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[10],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[11],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[12],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[13],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[14],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[15],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[16],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[17],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[18],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[19],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[20],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[21],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[22],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[23],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[24],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[25],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[26],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[27],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              hours: 11,
              status: 'plannedWorkday'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 157,
            fullName: 'Шигина Екатерина',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я50'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[1],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[2],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[3],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[4],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[5],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[6],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[7],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[8],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[9],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[10],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[11],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[12],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[13],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[14],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[15],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[16],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[17],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[18],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[19],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[20],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[21],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[22],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[23],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[24],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[25],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[26],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[27],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              hours: 11,
              status: 'plannedWorkday'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 227,
            fullName: 'Бурлаков Илья',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я75'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[1],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[2],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[3],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[4],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[5],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[6],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[7],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[8],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[9],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[10],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[11],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[12],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[13],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[14],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[15],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[16],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[17],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[18],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[19],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[20],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[21],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[22],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[23],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[24],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[25],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[26],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[27],
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              status: 'plannedDayOff'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 329,
            fullName: 'Липов Владислав',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я22'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[1],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[2],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[3],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[4],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[5],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[6],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[7],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[8],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[9],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[10],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[11],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[12],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[13],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[14],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[15],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[16],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[17],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[18],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[19],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[20],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[21],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[22],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[23],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[24],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[25],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[26],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[27],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              hours: 11,
              status: 'plannedWorkday'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 243,
            fullName: 'Зайцева Юлия',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я45'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[1],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[2],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[3],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[4],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[5],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[6],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[7],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[8],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[9],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[10],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[11],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[12],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[13],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[14],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[15],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[16],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[17],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[18],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[19],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[20],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[21],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[22],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[23],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[24],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[25],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[26],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[27],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              hours: 11,
              status: 'plannedWorkday'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 256,
            fullName: 'Забелина Ольга',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я19'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[1],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[2],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[3],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[4],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[5],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[6],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[7],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[8],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[9],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[10],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[11],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[12],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[13],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[14],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[15],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[16],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[17],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[18],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[19],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[20],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[21],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[22],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[23],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[24],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[25],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[26],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[27],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              hours: 11,
              status: 'plannedWorkday'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 202,
            fullName: 'Липатова Виктория',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я78'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[1],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[2],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[3],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[4],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[5],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[6],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[7],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[8],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[9],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[10],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[11],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[12],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[13],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[14],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[15],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[16],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[17],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[18],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[19],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[20],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[21],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[22],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[23],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[24],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[25],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[26],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[27],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              hours: 11,
              status: 'plannedWorkday'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 236,
            fullName: 'Горев Юрий',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я2'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[1],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[2],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[3],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[4],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[5],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[6],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[7],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[8],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[9],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[10],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[11],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[12],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[13],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[14],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[15],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[16],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[17],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[18],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[19],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[20],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[21],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[22],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[23],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[24],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[25],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[26],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[27],
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              status: 'plannedDayOff'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 218,
            fullName: 'Корнилов Александр',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я65'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[1],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[2],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[3],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[4],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[5],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[6],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[7],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[8],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[9],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[10],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[11],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[12],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[13],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[14],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[15],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[16],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[17],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[18],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[19],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[20],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[21],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[22],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[23],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[24],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[25],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[26],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[27],
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              status: 'plannedDayOff'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 287,
            fullName: 'Колпаков Кирилл',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я5'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[1],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[2],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[3],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[4],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[5],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[6],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[7],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[8],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[9],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[10],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[11],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[12],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[13],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[14],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[15],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[16],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[17],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[18],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[19],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[20],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[21],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[22],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[23],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[24],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[25],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[26],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[27],
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              status: 'plannedDayOff'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 237,
            fullName: 'Гусева Татьяна',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я11'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[1],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[2],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[3],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[4],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[5],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[6],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[7],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[8],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[9],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[10],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[11],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[12],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[13],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[14],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[15],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[16],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[17],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[18],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[19],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[20],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[21],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[22],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[23],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[24],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[25],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[26],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[27],
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              status: 'plannedDayOff'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 355,
            fullName: 'Зайцева Виктория',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я76'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[1],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[2],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[3],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[4],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[5],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[6],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[7],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[8],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[9],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[10],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[11],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[12],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[13],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[14],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[15],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[16],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[17],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[18],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[19],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[20],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[21],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[22],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[23],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[24],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[25],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[26],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[27],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              hours: 11,
              status: 'plannedWorkday'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 211,
            fullName: 'Гурьева Екатерина',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я46'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[1],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[2],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[3],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[4],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[5],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[6],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[7],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[8],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[9],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[10],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[11],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[12],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[13],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[14],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[15],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[16],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[17],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[18],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[19],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[20],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[21],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[22],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[23],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[24],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[25],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[26],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[27],
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              status: 'plannedDayOff'
            }
          ]
        },
        {
          type: 'TwoOverTwo',
          employee: {
            id: 206,
            fullName: 'Чиркова Виктория',
            department: {
              id: 163,
              name: 'Отдел взыскания'
            },
            position: 'Специалист отдела взыскания',
            portfolios: 'Хард Я14'
          },
          schedule: [
            {
              date: arrOfDatesStr[0],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[1],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[2],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[3],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[4],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[5],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[6],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[7],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[8],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[9],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[10],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[11],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[12],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[13],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[14],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[15],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[16],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[17],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[18],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[19],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[20],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[21],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[22],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[23],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[24],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[25],
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: arrOfDatesStr[26],
              status: 'plannedDayOff'
            },
            {
              date: arrOfDatesStr[27],
              status: 'plannedDayOff'
            },
            {
              date: daysInMonth > 28 ? arrOfDatesStr[28] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 29 ? arrOfDatesStr[29] : '',
              hours: 11,
              status: 'plannedWorkday'
            },
            {
              date: daysInMonth > 30 ? arrOfDatesStr[30] : '',
              status: 'plannedDayOff'
            }
          ]
        }
      ]
    }
  }
}

export const createNewTimesheet = async (payload, context) => {
  return actionNotAvailableNotify(context)
}

export const autoFillGraphics = async (payload, context) => {
  return actionNotAvailableNotify(context)
}

export const saveChangesInCurrentTimesheet = async (payload, context) => {
  return actionNotAvailableNotify(context)
}

export const addEmployee = async (payload, context) => {
  return actionNotAvailableNotify(context)
}

export const deleteEmployee = async (payload, context) => {
  return actionNotAvailableNotify(context)
}
