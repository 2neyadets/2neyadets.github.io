import { date } from 'quasar'

const getStartDateWithSubtractMonth = (monthForSubtract) => {
  return date.formatDate(date.startOfDate(date.subtractFromDate(new Date(), { month: monthForSubtract }), 'month'), 'YYYY-MM-DD')
}

const todayStr = date.formatDate(new Date(), 'YYYY-MM-DD'),
  yesterdayStr = date.formatDate(date.subtractFromDate(new Date(), { days: 1 }), 'YYYY-MM-DD'),
  currentMonthDate = getStartDateWithSubtractMonth(0),
  currentMonthDateMinusOne = getStartDateWithSubtractMonth(1),
  currentMonthDateMinusTwo = getStartDateWithSubtractMonth(2),
  currentMonthDateMinusThree = getStartDateWithSubtractMonth(3),
  currentMonthDateMinusFour = getStartDateWithSubtractMonth(4)

export const userLogin = () => {
  return {
    data: {
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJEYXRhIjp7ImlkIjozNDAsInVzZXJJZCI6MX0sImV4cCI6MjE0NzQ4MzY0NywiaXNzIjoibWFpbiJ9.eAUDwXNjgdeHQijVjuqpVlPBNxJz2CKPbdX1nhF7Gpg',
      profile: {
        id: 340,
        lastName: 'Синцов',
        firstName: 'Александр',
        middleName: 'Вячеславович',
        roles: ['operatorHard'],
        departmentName: 'Хард',
        operatorId: null
      }
    }
  }
}

export const userRatingsHard = async () => {
  return {
    data: {
      employee: {
        id: 141,
        fullName: 'Александров Руслан Николаевич',
        groups: [
          {
            id: 98,
            name: 'Хард Я36'
          }
        ]
      },
      groups: [
        {
          id: 110,
          name: 'Хард Я48',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 59102.81,
                rating: 1
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 69692.2,
                rating: 5
              },
              [currentMonthDateMinusThree]: {
                amount: 79003.08,
                rating: 6
              },
              [currentMonthDateMinusTwo]: {
                amount: 72042.13,
                rating: 4
              },
              [currentMonthDateMinusOne]: {
                amount: 61018.06,
                rating: 9
              },
              [currentMonthDate]: {
                amount: 16166.33,
                rating: 20
              }
            }
          }
        },
        {
          id: 104,
          name: 'Хард Я42',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 58240.29,
                rating: 2
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 69025.67,
                rating: 6
              },
              [currentMonthDateMinusThree]: {
                amount: 84275.58,
                rating: 4
              },
              [currentMonthDateMinusTwo]: {
                amount: 41340.75,
                rating: 41
              },
              [currentMonthDateMinusOne]: {
                amount: 42680.41,
                rating: 27
              },
              [currentMonthDate]: {
                amount: 23018.47,
                rating: 6
              }
            }
          }
        },
        {
          id: 142,
          name: 'Хард Я65',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 46711.92,
                rating: 3
              },
              [todayStr]: {
                amount: 18003,
                rating: 7
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 66110.57,
                rating: 13
              },
              [currentMonthDateMinusThree]: {
                amount: 76384.25,
                rating: 9
              },
              [currentMonthDateMinusTwo]: {
                amount: 60348.5,
                rating: 15
              },
              [currentMonthDateMinusOne]: {
                amount: 74089.24,
                rating: 2
              },
              [currentMonthDate]: {
                amount: 12491.26,
                rating: 28
              }
            }
          }
        },
        {
          id: 56,
          name: 'Хард Я11',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 38339.68,
                rating: 4
              },
              [todayStr]: {
                amount: 24562.08,
                rating: 3
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 55645.72,
                rating: 23
              },
              [currentMonthDateMinusThree]: {
                amount: 62137.66,
                rating: 24
              },
              [currentMonthDateMinusTwo]: {
                amount: 60021.52,
                rating: 17
              },
              [currentMonthDateMinusOne]: {
                amount: 49142.71,
                rating: 18
              },
              [currentMonthDate]: {
                amount: 22523.89,
                rating: 7
              }
            }
          }
        },
        {
          id: 34,
          name: 'Хард Я22',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 28898.56,
                rating: 5
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 42269.24,
                rating: 37
              },
              [currentMonthDateMinusThree]: {
                amount: 68154.38,
                rating: 18
              },
              [currentMonthDateMinusTwo]: {
                amount: 45510.64,
                rating: 36
              },
              [currentMonthDateMinusOne]: {
                amount: 44181.59,
                rating: 30
              },
              [currentMonthDate]: {
                amount: 11915.75,
                rating: 32
              }
            }
          }
        },
        {
          id: 93,
          name: 'Хард Я32',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 27713.93,
                rating: 6
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 50489.79,
                rating: 32
              },
              [currentMonthDateMinusThree]: {
                amount: 64291.29,
                rating: 22
              },
              [currentMonthDateMinusTwo]: {
                amount: 21693.57,
                rating: 45
              },
              [currentMonthDateMinusOne]: {
                amount: 9831.37,
                rating: 45
              },
              [currentMonthDate]: {
                amount: 10625.88,
                rating: 37
              }
            }
          }
        },
        {
          id: 58,
          name: 'Хард Я2',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 24105.6,
                rating: 7
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 103920.5,
                rating: 1
              },
              [currentMonthDateMinusThree]: {
                amount: 77747.9,
                rating: 8
              },
              [currentMonthDateMinusTwo]: {
                amount: 63355.49,
                rating: 11
              },
              [currentMonthDateMinusOne]: {
                amount: 65219.29,
                rating: 5
              },
              [currentMonthDate]: {
                amount: 15467.37,
                rating: 21
              }
            }
          }
        },
        {
          id: 51,
          name: 'Хард Я14',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 22006,
                rating: 8
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 67821.8,
                rating: 11
              },
              [currentMonthDateMinusThree]: {
                amount: 72220.27,
                rating: 10
              },
              [currentMonthDateMinusTwo]: {
                amount: 61178.21,
                rating: 13
              },
              [currentMonthDateMinusOne]: {
                amount: 51071.24,
                rating: 16
              },
              [currentMonthDate]: {
                amount: 8199.22,
                rating: 41
              }
            }
          }
        },
        {
          id: 44,
          name: 'Хард Я21',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 20213.74,
                rating: 9
              },
              [todayStr]: {
                amount: 2000,
                rating: 20
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 57635.24,
                rating: 21
              },
              [currentMonthDateMinusThree]: {
                amount: 85803.56,
                rating: 3
              },
              [currentMonthDateMinusTwo]: {
                amount: 51524.35,
                rating: 25
              },
              [currentMonthDateMinusOne]: {
                amount: 74450.07,
                rating: 1
              },
              [currentMonthDate]: {
                amount: 17339.21,
                rating: 18
              }
            }
          }
        },
        {
          id: 141,
          name: 'Хард Я64',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 16332.35,
                rating: 10
              },
              [todayStr]: {
                amount: 1500,
                rating: 22
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 51747.88,
                rating: 30
              },
              [currentMonthDateMinusThree]: {
                amount: 46910.56,
                rating: 41
              },
              [currentMonthDateMinusTwo]: {
                amount: 68387.22,
                rating: 8
              },
              [currentMonthDateMinusOne]: {
                amount: 50657.51,
                rating: 17
              },
              [currentMonthDate]: {
                amount: 19940.33,
                rating: 13
              }
            }
          }
        },
        {
          id: 86,
          name: 'Хард Я26',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 15263,
                rating: 11
              },
              [todayStr]: {
                amount: 11536.06,
                rating: 12
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 61682.95,
                rating: 18
              },
              [currentMonthDateMinusThree]: {
                amount: 54630.82,
                rating: 37
              },
              [currentMonthDateMinusTwo]: {
                amount: 62003.2,
                rating: 12
              },
              [currentMonthDateMinusOne]: {
                amount: 70235.77,
                rating: 3
              },
              [currentMonthDate]: {
                amount: 30316.73,
                rating: 1
              }
            }
          }
        },
        {
          id: 157,
          name: 'Хард Я79',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 14521,
                rating: 12
              },
              [todayStr]: {
                amount: 3200,
                rating: 19
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 65390.62,
                rating: 14
              },
              [currentMonthDateMinusThree]: {
                amount: 70725.49,
                rating: 11
              },
              [currentMonthDateMinusTwo]: {
                amount: 93138.6,
                rating: 1
              },
              [currentMonthDateMinusOne]: {
                amount: 64641.89,
                rating: 6
              },
              [currentMonthDate]: {
                amount: 26471.81,
                rating: 2
              }
            }
          }
        },
        {
          id: 125,
          name: 'Хард Я56',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 14478.08,
                rating: 13
              },
              [todayStr]: {
                amount: 800,
                rating: 24
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 68888.09,
                rating: 7
              },
              [currentMonthDateMinusThree]: {
                amount: 109928.3,
                rating: 1
              },
              [currentMonthDateMinusTwo]: {
                amount: 48396.34,
                rating: 30
              },
              [currentMonthDateMinusOne]: {
                amount: 40048.39,
                rating: 28
              },
              [currentMonthDate]: {
                amount: 12781.22,
                rating: 30
              }
            }
          }
        },
        {
          id: 132,
          name: 'Хард Я61',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 13826,
                rating: 14
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 53240.21,
                rating: 26
              },
              [currentMonthDateMinusThree]: {
                amount: 60777.28,
                rating: 27
              },
              [currentMonthDateMinusTwo]: {
                amount: 46268.73,
                rating: 35
              },
              [currentMonthDateMinusOne]: {
                amount: 36707.76,
                rating: 36
              },
              [currentMonthDate]: {
                amount: 13406.69,
                rating: 25
              }
            }
          }
        },
        {
          id: 50,
          name: 'Хард Я17',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 13500,
                rating: 15
              },
              [todayStr]: {
                amount: 5323.8,
                rating: 17
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 68744.37,
                rating: 8
              },
              [currentMonthDateMinusThree]: {
                amount: 53533.51,
                rating: 38
              },
              [currentMonthDateMinusTwo]: {
                amount: 71982.4,
                rating: 5
              },
              [currentMonthDateMinusOne]: {
                amount: 43392.77,
                rating: 25
              },
              [currentMonthDate]: {
                amount: 24787.89,
                rating: 5
              }
            }
          }
        },
        {
          id: 113,
          name: 'Хард Я51',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 13377,
                rating: 16
              },
              [todayStr]: {
                amount: 1940,
                rating: 21
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 45871.8,
                rating: 36
              },
              [currentMonthDateMinusThree]: {
                amount: 55654.73,
                rating: 35
              },
              [currentMonthDateMinusTwo]: {
                amount: 49794.52,
                rating: 29
              },
              [currentMonthDateMinusOne]: {
                amount: 16572.36,
                rating: 44
              },
              [currentMonthDate]: {
                amount: 9278.82,
                rating: 38
              }
            }
          }
        },
        {
          id: 107,
          name: 'Хард Я45',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 11942.44,
                rating: 17
              },
              [todayStr]: {
                amount: 18176.16,
                rating: 6
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 60240.56,
                rating: 19
              },
              [currentMonthDateMinusThree]: {
                amount: 87405.13,
                rating: 2
              },
              [currentMonthDateMinusTwo]: {
                amount: 57867.45,
                rating: 20
              },
              [currentMonthDateMinusOne]: {
                amount: 64316.49,
                rating: 7
              },
              [currentMonthDate]: {
                amount: 15484.11,
                rating: 22
              }
            }
          }
        },
        {
          id: 145,
          name: 'Хард Я68',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 11000,
                rating: 18
              },
              [todayStr]: {
                amount: 9000,
                rating: 14
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 63308.11,
                rating: 17
              },
              [currentMonthDateMinusThree]: {
                amount: 80432.83,
                rating: 5
              },
              [currentMonthDateMinusTwo]: {
                amount: 43567.83,
                rating: 39
              },
              [currentMonthDateMinusOne]: {
                amount: 46733.32,
                rating: 20
              },
              [currentMonthDate]: {
                amount: 22222.33,
                rating: 8
              }
            }
          }
        },
        {
          id: 152,
          name: 'Хард Я75',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 9963.45,
                rating: 19
              },
              [todayStr]: {
                amount: 11834.26,
                rating: 10
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 48191.74,
                rating: 34
              },
              [currentMonthDateMinusThree]: {
                amount: 69871.28,
                rating: 15
              },
              [currentMonthDateMinusTwo]: {
                amount: 72457.61,
                rating: 3
              },
              [currentMonthDateMinusOne]: {
                amount: 58955.29,
                rating: 12
              },
              [currentMonthDate]: {
                amount: 15374.26,
                rating: 23
              }
            }
          }
        },
        {
          id: 112,
          name: 'Хард Я50',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 9940,
                rating: 20
              },
              [todayStr]: {
                amount: 5000,
                rating: 18
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 39433.42,
                rating: 41
              },
              [currentMonthDateMinusThree]: {
                amount: 51393.45,
                rating: 40
              },
              [currentMonthDateMinusTwo]: {
                amount: 46871.29,
                rating: 32
              },
              [currentMonthDateMinusOne]: {
                amount: 32746.83,
                rating: 38
              },
              [currentMonthDate]: {
                amount: 21432.56,
                rating: 9
              }
            }
          }
        },
        {
          id: 90,
          name: 'Хард Я29',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 6791.94,
                rating: 21
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 42088.21,
                rating: 40
              },
              [currentMonthDateMinusThree]: {
                amount: 66773.01,
                rating: 19
              },
              [currentMonthDateMinusTwo]: {
                amount: 44556.3,
                rating: 37
              },
              [currentMonthDateMinusOne]: {
                amount: 37498.15,
                rating: 34
              },
              [currentMonthDate]: {
                amount: 5986.62,
                rating: 42
              }
            }
          }
        },
        {
          id: 43,
          name: 'Хард Я16',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 4875.44,
                rating: 22
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 42676.17,
                rating: 39
              },
              [currentMonthDateMinusThree]: {
                amount: 70060.86,
                rating: 14
              },
              [currentMonthDateMinusTwo]: {
                amount: 60045.75,
                rating: 18
              },
              [currentMonthDateMinusOne]: {
                amount: 35635.95,
                rating: 37
              },
              [currentMonthDate]: {
                amount: 21459.34,
                rating: 10
              }
            }
          }
        },
        {
          id: 156,
          name: 'Хард Я78',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 4270.58,
                rating: 23
              },
              [todayStr]: {
                amount: 22532.66,
                rating: 5
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 68037.34,
                rating: 10
              },
              [currentMonthDateMinusThree]: {
                amount: 78423.25,
                rating: 7
              },
              [currentMonthDateMinusTwo]: {
                amount: 71228.26,
                rating: 6
              },
              [currentMonthDateMinusOne]: {
                amount: 70319.04,
                rating: 4
              },
              [currentMonthDate]: {
                amount: 24406.44,
                rating: 4
              }
            }
          }
        },
        {
          id: 97,
          name: 'Хард Я35',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 4195.23,
                rating: 24
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 51896.2,
                rating: 29
              },
              [currentMonthDateMinusThree]: {
                amount: 41320.37,
                rating: 42
              },
              [currentMonthDateMinusTwo]: {
                amount: 61106.19,
                rating: 14
              },
              [currentMonthDateMinusOne]: {
                amount: 38202.94,
                rating: 32
              },
              [currentMonthDate]: {
                amount: 11877.25,
                rating: 33
              }
            }
          }
        },
        {
          id: 124,
          name: 'Хард Я55',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 3257,
                rating: 25
              },
              [todayStr]: {
                amount: 33981.08,
                rating: 1
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 79763.13,
                rating: 2
              },
              [currentMonthDateMinusThree]: {
                amount: 68507.62,
                rating: 17
              },
              [currentMonthDateMinusTwo]: {
                amount: 60060.7,
                rating: 16
              },
              [currentMonthDateMinusOne]: {
                amount: 31928.88,
                rating: 40
              },
              [currentMonthDate]: {
                amount: 19935.05,
                rating: 14
              }
            }
          }
        },
        {
          id: 29,
          name: 'Хард Я5',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 2600,
                rating: 26
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 65603.24,
                rating: 15
              },
              [currentMonthDateMinusThree]: {
                amount: 60349.85,
                rating: 28
              },
              [currentMonthDateMinusTwo]: {
                amount: 38087.09,
                rating: 44
              },
              [currentMonthDateMinusOne]: {
                amount: 45876.7,
                rating: 22
              },
              [currentMonthDate]: {
                amount: 12089.98,
                rating: 31
              }
            }
          }
        },
        {
          id: 31,
          name: 'Хард Я8',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 2000,
                rating: 27
              },
              [todayStr]: {
                amount: 700,
                rating: 25
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 37986.35,
                rating: 44
              },
              [currentMonthDateMinusThree]: {
                amount: 60036.12,
                rating: 30
              },
              [currentMonthDateMinusTwo]: {
                amount: 68627.06,
                rating: 7
              },
              [currentMonthDateMinusOne]: {
                amount: 31374.27,
                rating: 41
              },
              [currentMonthDate]: {
                amount: 26305.67,
                rating: 3
              }
            }
          }
        },
        {
          id: 140,
          name: 'Хард Я63',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 1987.61,
                rating: 28
              },
              [todayStr]: {
                amount: 11400,
                rating: 13
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 42743.64,
                rating: 38
              },
              [currentMonthDateMinusThree]: {
                amount: 56397.98,
                rating: 33
              },
              [currentMonthDateMinusTwo]: {
                amount: 54129.37,
                rating: 22
              },
              [currentMonthDateMinusOne]: {
                amount: 51569.17,
                rating: 15
              },
              [currentMonthDate]: {
                amount: 17392.99,
                rating: 17
              }
            }
          }
        },
        {
          id: 130,
          name: 'Хард Я59',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 1900,
                rating: 29
              },
              [todayStr]: {
                amount: 16315.47,
                rating: 8
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 47691.62,
                rating: 35
              },
              [currentMonthDateMinusThree]: {
                amount: 64722.3,
                rating: 21
              },
              [currentMonthDateMinusTwo]: {
                amount: 46775.27,
                rating: 33
              },
              [currentMonthDateMinusOne]: {
                amount: 55387.83,
                rating: 13
              },
              [currentMonthDate]: {
                amount: 17132,
                rating: 19
              }
            }
          }
        },
        {
          id: 98,
          name: 'Хард Я36',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 1460,
                rating: 30
              },
              [todayStr]: {
                amount: 1217.28,
                rating: 23
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 56129.84,
                rating: 22
              },
              [currentMonthDateMinusThree]: {
                amount: 62057.53,
                rating: 26
              },
              [currentMonthDateMinusTwo]: {
                amount: 50005.58,
                rating: 28
              },
              [currentMonthDateMinusOne]: {
                amount: 60464.67,
                rating: 11
              },
              [currentMonthDate]: {
                amount: 10988.83,
                rating: 35
              }
            }
          }
        },
        {
          id: 99,
          name: 'Хард Я37',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 1000,
                rating: 31
              },
              [todayStr]: {
                amount: 500,
                rating: 26
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 53911.98,
                rating: 25
              },
              [currentMonthDateMinusThree]: {
                amount: 66162.05,
                rating: 20
              },
              [currentMonthDateMinusTwo]: {
                amount: 60000.04,
                rating: 19
              },
              [currentMonthDateMinusOne]: {
                amount: 62073.98,
                rating: 8
              },
              [currentMonthDate]: {
                amount: 18174.28,
                rating: 16
              }
            }
          }
        },
        {
          id: 92,
          name: 'Хард Я31',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 815.2,
                rating: 32
              },
              [todayStr]: {
                amount: 23740.12,
                rating: 4
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 52263.92,
                rating: 28
              },
              [currentMonthDateMinusThree]: {
                amount: 55576.54,
                rating: 36
              },
              [currentMonthDateMinusTwo]: {
                amount: 46661.58,
                rating: 34
              },
              [currentMonthDateMinusOne]: {
                amount: 44272.29,
                rating: 23
              },
              [currentMonthDate]: {
                amount: 20102.83,
                rating: 12
              }
            }
          }
        },
        {
          id: 154,
          name: 'Хард Я76',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 300,
                rating: 33
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 60228.5,
                rating: 20
              },
              [currentMonthDateMinusThree]: {
                amount: 35746.64,
                rating: 44
              },
              [currentMonthDateMinusTwo]: {
                amount: 50661.02,
                rating: 26
              },
              [currentMonthDateMinusOne]: {
                amount: 29086.86,
                rating: 43
              },
              [currentMonthDate]: {
                amount: 11284.2,
                rating: 34
              }
            }
          }
        },
        {
          id: 35,
          name: 'Хард Я15',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 51063.97,
                rating: 31
              },
              [currentMonthDateMinusThree]: {
                amount: 60005.98,
                rating: 29
              },
              [currentMonthDateMinusTwo]: {
                amount: 63992.76,
                rating: 10
              },
              [currentMonthDateMinusOne]: {
                amount: 60771.14,
                rating: 10
              },
              [currentMonthDate]: {
                amount: 14963.74,
                rating: 24
              }
            }
          }
        },
        {
          id: 131,
          name: 'Хард Я60',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 6508,
                rating: 15
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 52786.87,
                rating: 27
              },
              [currentMonthDateMinusThree]: {
                amount: 70569.19,
                rating: 12
              },
              [currentMonthDateMinusTwo]: {
                amount: 55239.75,
                rating: 21
              },
              [currentMonthDateMinusOne]: {
                amount: 31187.65,
                rating: 42
              },
              [currentMonthDate]: {
                amount: 13286.56,
                rating: 27
              }
            }
          }
        },
        {
          id: 114,
          name: 'Хард Я52',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 14267.42,
                rating: 9
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 71674.33,
                rating: 3
              },
              [currentMonthDateMinusThree]: {
                amount: 69648.96,
                rating: 16
              },
              [currentMonthDateMinusTwo]: {
                amount: 50228.69,
                rating: 27
              },
              [currentMonthDateMinusOne]: {
                amount: 48317.36,
                rating: 19
              },
              [currentMonthDate]: {
                amount: 10762.79,
                rating: 36
              }
            }
          }
        },
        {
          id: 105,
          name: 'Хард Я43',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 11641.52,
                rating: 11
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 22504.2,
                rating: 45
              },
              [currentMonthDateMinusThree]: {
                amount: 24931.65,
                rating: 45
              },
              [currentMonthDateMinusTwo]: {
                amount: 41118.04,
                rating: 42
              },
              [currentMonthDateMinusOne]: {
                amount: 46307.14,
                rating: 21
              },
              [currentMonthDate]: {
                amount: 8402.67,
                rating: 40
              }
            }
          }
        },
        {
          id: 111,
          name: 'Хард Я49',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 200,
                rating: 28
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 68091.18,
                rating: 9
              },
              [currentMonthDateMinusThree]: {
                amount: 62107.58,
                rating: 25
              },
              [currentMonthDateMinusTwo]: {
                amount: 42853.58,
                rating: 40
              },
              [currentMonthDateMinusOne]: {
                amount: 40514.58,
                rating: 29
              },
              [currentMonthDate]: {
                amount: 20765.03,
                rating: 11
              }
            }
          }
        },
        {
          id: 108,
          name: 'Хард Я46',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 38917.3,
                rating: 42
              },
              [currentMonthDateMinusThree]: {
                amount: 70107.69,
                rating: 13
              },
              [currentMonthDateMinusTwo]: {
                amount: 38602.14,
                rating: 43
              },
              [currentMonthDateMinusOne]: {
                amount: 43209.25,
                rating: 26
              },
              [currentMonthDate]: {
                amount: 8562,
                rating: 45
              }
            }
          }
        },
        {
          id: 102,
          name: 'Хард Я40',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 300,
                rating: 27
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 38782.54,
                rating: 43
              },
              [currentMonthDateMinusThree]: {
                amount: 40381.09,
                rating: 43
              },
              [currentMonthDateMinusTwo]: {
                amount: 47993.67,
                rating: 31
              },
              [currentMonthDateMinusOne]: {
                amount: 36833.97,
                rating: 35
              },
              [currentMonthDate]: {
                amount: 13496.55,
                rating: 26
              }
            }
          }
        },
        {
          id: 88,
          name: 'Хард Я28',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 6200,
                rating: 16
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 67196.49,
                rating: 12
              },
              [currentMonthDateMinusThree]: {
                amount: 64136.22,
                rating: 23
              },
              [currentMonthDateMinusTwo]: {
                amount: 75943.08,
                rating: 2
              },
              [currentMonthDateMinusOne]: {
                amount: 38966.44,
                rating: 31
              },
              [currentMonthDate]: {
                amount: 18860.63,
                rating: 15
              }
            }
          }
        },
        {
          id: 100,
          name: 'Хард Я38',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 49273.67,
                rating: 33
              },
              [currentMonthDateMinusThree]: {
                amount: 57360.37,
                rating: 31
              },
              [currentMonthDateMinusTwo]: {
                amount: 52982.62,
                rating: 23
              },
              [currentMonthDateMinusOne]: {
                amount: 37843.26,
                rating: 33
              },
              [currentMonthDate]: {
                amount: 28198,
                rating: 44
              }
            }
          }
        },
        {
          id: 12,
          name: 'Хард Я7',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 29097.76,
                rating: 2
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 70353.9,
                rating: 4
              },
              [currentMonthDateMinusThree]: {
                amount: 53011.09,
                rating: 39
              },
              [currentMonthDateMinusTwo]: {
                amount: 68321.11,
                rating: 9
              },
              [currentMonthDateMinusOne]: {
                amount: 52298.25,
                rating: 14
              },
              [currentMonthDate]: {
                amount: 5937.43,
                rating: 43
              }
            }
          }
        },
        {
          id: 37,
          name: 'Хард Я19',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 500,
                rating: 26
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 55540.02,
                rating: 24
              },
              [currentMonthDateMinusThree]: {
                amount: 55723.21,
                rating: 34
              },
              [currentMonthDateMinusTwo]: {
                amount: 52363.87,
                rating: 24
              },
              [currentMonthDateMinusOne]: {
                amount: 43901.03,
                rating: 24
              },
              [currentMonthDate]: {
                amount: 8403.59,
                rating: 39
              }
            }
          }
        },
        {
          id: 21,
          name: 'Хард Я18',
          indicators: {
            daily: {
              [yesterdayStr]: {
                amount: 0,
                rating: 34
              },
              [todayStr]: {
                amount: 0,
                rating: 29
              }
            },
            monthly: {
              [currentMonthDateMinusFour]: {
                amount: 63574.21,
                rating: 16
              },
              [currentMonthDateMinusThree]: {
                amount: 57063.79,
                rating: 32
              },
              [currentMonthDateMinusTwo]: {
                amount: 43621.47,
                rating: 38
              },
              [currentMonthDateMinusOne]: {
                amount: 32227.4,
                rating: 39
              },
              [currentMonthDate]: {
                amount: 12348.21,
                rating: 29
              }
            }
          }
        }
      ],
      leaders: {
        day: {
          group: 'Хард Я55',
          amount: 33981.08
        },
        month: {
          group: 'Хард Я26',
          amount: 306316.73
        },
        quarter: {
          group: 'Хард Я26',
          amount: 1015552.5
        }
      }
    }
  }
}
