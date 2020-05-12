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
                amount: 696792.2,
                rating: 5
              },
              [currentMonthDateMinusThree]: {
                amount: 790703.08,
                rating: 6
              },
              [currentMonthDateMinusTwo]: {
                amount: 720742.13,
                rating: 4
              },
              [currentMonthDateMinusOne]: {
                amount: 610718.06,
                rating: 9
              },
              [currentMonthDate]: {
                amount: 161666.33,
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
                amount: 690025.67,
                rating: 6
              },
              [currentMonthDateMinusThree]: {
                amount: 842275.58,
                rating: 4
              },
              [currentMonthDateMinusTwo]: {
                amount: 413540.75,
                rating: 41
              },
              [currentMonthDateMinusOne]: {
                amount: 426280.41,
                rating: 27
              },
              [currentMonthDate]: {
                amount: 230218.47,
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
                amount: 661120.57,
                rating: 13
              },
              [currentMonthDateMinusThree]: {
                amount: 763384.25,
                rating: 9
              },
              [currentMonthDateMinusTwo]: {
                amount: 603548.5,
                rating: 15
              },
              [currentMonthDateMinusOne]: {
                amount: 740089.24,
                rating: 2
              },
              [currentMonthDate]: {
                amount: 128491.26,
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
                amount: 556545.72,
                rating: 23
              },
              [currentMonthDateMinusThree]: {
                amount: 621737.66,
                rating: 24
              },
              [currentMonthDateMinusTwo]: {
                amount: 600121.52,
                rating: 17
              },
              [currentMonthDateMinusOne]: {
                amount: 491042.71,
                rating: 18
              },
              [currentMonthDate]: {
                amount: 225923.89,
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
                amount: 428269.24,
                rating: 37
              },
              [currentMonthDateMinusThree]: {
                amount: 681654.38,
                rating: 18
              },
              [currentMonthDateMinusTwo]: {
                amount: 455810.64,
                rating: 36
              },
              [currentMonthDateMinusOne]: {
                amount: 404181.59,
                rating: 30
              },
              [currentMonthDate]: {
                amount: 119915.75,
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
                amount: 504089.79,
                rating: 32
              },
              [currentMonthDateMinusThree]: {
                amount: 642991.29,
                rating: 22
              },
              [currentMonthDateMinusTwo]: {
                amount: 216493.57,
                rating: 45
              },
              [currentMonthDateMinusOne]: {
                amount: 98831.37,
                rating: 45
              },
              [currentMonthDate]: {
                amount: 106625.88,
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
                amount: 1036920.5,
                rating: 1
              },
              [currentMonthDateMinusThree]: {
                amount: 777447.9,
                rating: 8
              },
              [currentMonthDateMinusTwo]: {
                amount: 633755.49,
                rating: 11
              },
              [currentMonthDateMinusOne]: {
                amount: 655219.29,
                rating: 5
              },
              [currentMonthDate]: {
                amount: 159467.37,
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
                amount: 678621.8,
                rating: 11
              },
              [currentMonthDateMinusThree]: {
                amount: 720220.27,
                rating: 10
              },
              [currentMonthDateMinusTwo]: {
                amount: 611768.21,
                rating: 13
              },
              [currentMonthDateMinusOne]: {
                amount: 510471.24,
                rating: 16
              },
              [currentMonthDate]: {
                amount: 81899.22,
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
                amount: 576635.24,
                rating: 21
              },
              [currentMonthDateMinusThree]: {
                amount: 858303.56,
                rating: 3
              },
              [currentMonthDateMinusTwo]: {
                amount: 515214.35,
                rating: 25
              },
              [currentMonthDateMinusOne]: {
                amount: 744450.07,
                rating: 1
              },
              [currentMonthDate]: {
                amount: 172339.21,
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
                amount: 517847.88,
                rating: 30
              },
              [currentMonthDateMinusThree]: {
                amount: 469010.56,
                rating: 41
              },
              [currentMonthDateMinusTwo]: {
                amount: 683887.22,
                rating: 8
              },
              [currentMonthDateMinusOne]: {
                amount: 505657.51,
                rating: 17
              },
              [currentMonthDate]: {
                amount: 199940.33,
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
                amount: 611682.95,
                rating: 18
              },
              [currentMonthDateMinusThree]: {
                amount: 547630.82,
                rating: 37
              },
              [currentMonthDateMinusTwo]: {
                amount: 620403.2,
                rating: 12
              },
              [currentMonthDateMinusOne]: {
                amount: 709235.77,
                rating: 3
              },
              [currentMonthDate]: {
                amount: 306316.73,
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
                amount: 657390.62,
                rating: 14
              },
              [currentMonthDateMinusThree]: {
                amount: 707425.49,
                rating: 11
              },
              [currentMonthDateMinusTwo]: {
                amount: 931938.6,
                rating: 1
              },
              [currentMonthDateMinusOne]: {
                amount: 646441.89,
                rating: 6
              },
              [currentMonthDate]: {
                amount: 268471.81,
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
                amount: 688088.09,
                rating: 7
              },
              [currentMonthDateMinusThree]: {
                amount: 1099928.3,
                rating: 1
              },
              [currentMonthDateMinusTwo]: {
                amount: 483696.34,
                rating: 30
              },
              [currentMonthDateMinusOne]: {
                amount: 407048.39,
                rating: 28
              },
              [currentMonthDate]: {
                amount: 120781.22,
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
                amount: 532340.21,
                rating: 26
              },
              [currentMonthDateMinusThree]: {
                amount: 607377.28,
                rating: 27
              },
              [currentMonthDateMinusTwo]: {
                amount: 462868.73,
                rating: 35
              },
              [currentMonthDateMinusOne]: {
                amount: 364707.76,
                rating: 36
              },
              [currentMonthDate]: {
                amount: 134906.69,
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
                amount: 687344.37,
                rating: 8
              },
              [currentMonthDateMinusThree]: {
                amount: 535933.51,
                rating: 38
              },
              [currentMonthDateMinusTwo]: {
                amount: 714982.4,
                rating: 5
              },
              [currentMonthDateMinusOne]: {
                amount: 433792.77,
                rating: 25
              },
              [currentMonthDate]: {
                amount: 241787.89,
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
                amount: 458771.8,
                rating: 36
              },
              [currentMonthDateMinusThree]: {
                amount: 556654.73,
                rating: 35
              },
              [currentMonthDateMinusTwo]: {
                amount: 497594.52,
                rating: 29
              },
              [currentMonthDateMinusOne]: {
                amount: 165172.36,
                rating: 44
              },
              [currentMonthDate]: {
                amount: 92978.82,
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
                amount: 607240.56,
                rating: 19
              },
              [currentMonthDateMinusThree]: {
                amount: 874005.13,
                rating: 2
              },
              [currentMonthDateMinusTwo]: {
                amount: 575867.45,
                rating: 20
              },
              [currentMonthDateMinusOne]: {
                amount: 643716.49,
                rating: 7
              },
              [currentMonthDate]: {
                amount: 154484.11,
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
                amount: 633808.11,
                rating: 17
              },
              [currentMonthDateMinusThree]: {
                amount: 804132.83,
                rating: 5
              },
              [currentMonthDateMinusTwo]: {
                amount: 435167.83,
                rating: 39
              },
              [currentMonthDateMinusOne]: {
                amount: 467733.32,
                rating: 20
              },
              [currentMonthDate]: {
                amount: 222622.33,
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
                amount: 481391.74,
                rating: 34
              },
              [currentMonthDateMinusThree]: {
                amount: 698871.28,
                rating: 15
              },
              [currentMonthDateMinusTwo]: {
                amount: 724157.61,
                rating: 3
              },
              [currentMonthDateMinusOne]: {
                amount: 589755.29,
                rating: 12
              },
              [currentMonthDate]: {
                amount: 153674.26,
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
                amount: 393433.42,
                rating: 41
              },
              [currentMonthDateMinusThree]: {
                amount: 513793.45,
                rating: 40
              },
              [currentMonthDateMinusTwo]: {
                amount: 468371.29,
                rating: 32
              },
              [currentMonthDateMinusOne]: {
                amount: 327046.83,
                rating: 38
              },
              [currentMonthDate]: {
                amount: 216432.56,
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
                amount: 420688.21,
                rating: 40
              },
              [currentMonthDateMinusThree]: {
                amount: 667373.01,
                rating: 19
              },
              [currentMonthDateMinusTwo]: {
                amount: 445506.3,
                rating: 37
              },
              [currentMonthDateMinusOne]: {
                amount: 374698.15,
                rating: 34
              },
              [currentMonthDate]: {
                amount: 59856.62,
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
                amount: 426786.17,
                rating: 39
              },
              [currentMonthDateMinusThree]: {
                amount: 700560.86,
                rating: 14
              },
              [currentMonthDateMinusTwo]: {
                amount: 600045.75,
                rating: 18
              },
              [currentMonthDateMinusOne]: {
                amount: 356735.95,
                rating: 37
              },
              [currentMonthDate]: {
                amount: 214549.34,
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
                amount: 680337.34,
                rating: 10
              },
              [currentMonthDateMinusThree]: {
                amount: 784023.25,
                rating: 7
              },
              [currentMonthDateMinusTwo]: {
                amount: 712828.26,
                rating: 6
              },
              [currentMonthDateMinusOne]: {
                amount: 703319.04,
                rating: 4
              },
              [currentMonthDate]: {
                amount: 244606.44,
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
                amount: 518196.2,
                rating: 29
              },
              [currentMonthDateMinusThree]: {
                amount: 413920.37,
                rating: 42
              },
              [currentMonthDateMinusTwo]: {
                amount: 611076.19,
                rating: 14
              },
              [currentMonthDateMinusOne]: {
                amount: 382702.94,
                rating: 32
              },
              [currentMonthDate]: {
                amount: 118077.25,
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
                amount: 797463.13,
                rating: 2
              },
              [currentMonthDateMinusThree]: {
                amount: 683507.62,
                rating: 17
              },
              [currentMonthDateMinusTwo]: {
                amount: 600760.7,
                rating: 16
              },
              [currentMonthDateMinusOne]: {
                amount: 319268.88,
                rating: 40
              },
              [currentMonthDate]: {
                amount: 199395.05,
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
                amount: 656103.24,
                rating: 15
              },
              [currentMonthDateMinusThree]: {
                amount: 603549.85,
                rating: 28
              },
              [currentMonthDateMinusTwo]: {
                amount: 380827.09,
                rating: 44
              },
              [currentMonthDateMinusOne]: {
                amount: 458176.7,
                rating: 22
              },
              [currentMonthDate]: {
                amount: 120289.98,
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
                amount: 379786.35,
                rating: 44
              },
              [currentMonthDateMinusThree]: {
                amount: 600036.12,
                rating: 30
              },
              [currentMonthDateMinusTwo]: {
                amount: 685627.06,
                rating: 7
              },
              [currentMonthDateMinusOne]: {
                amount: 313274.27,
                rating: 41
              },
              [currentMonthDate]: {
                amount: 263305.67,
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
                amount: 427843.64,
                rating: 38
              },
              [currentMonthDateMinusThree]: {
                amount: 564397.98,
                rating: 33
              },
              [currentMonthDateMinusTwo]: {
                amount: 541209.37,
                rating: 22
              },
              [currentMonthDateMinusOne]: {
                amount: 515169.17,
                rating: 15
              },
              [currentMonthDate]: {
                amount: 173592.99,
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
                amount: 476981.62,
                rating: 35
              },
              [currentMonthDateMinusThree]: {
                amount: 647222.3,
                rating: 21
              },
              [currentMonthDateMinusTwo]: {
                amount: 467755.27,
                rating: 33
              },
              [currentMonthDateMinusOne]: {
                amount: 553987.83,
                rating: 13
              },
              [currentMonthDate]: {
                amount: 171032,
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
                amount: 561259.84,
                rating: 22
              },
              [currentMonthDateMinusThree]: {
                amount: 620057.53,
                rating: 26
              },
              [currentMonthDateMinusTwo]: {
                amount: 500405.58,
                rating: 28
              },
              [currentMonthDateMinusOne]: {
                amount: 604164.67,
                rating: 11
              },
              [currentMonthDate]: {
                amount: 109858.83,
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
                amount: 539151.98,
                rating: 25
              },
              [currentMonthDateMinusThree]: {
                amount: 661862.05,
                rating: 20
              },
              [currentMonthDateMinusTwo]: {
                amount: 600000.04,
                rating: 19
              },
              [currentMonthDateMinusOne]: {
                amount: 620713.98,
                rating: 8
              },
              [currentMonthDate]: {
                amount: 181774.28,
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
                amount: 522563.92,
                rating: 28
              },
              [currentMonthDateMinusThree]: {
                amount: 555776.54,
                rating: 36
              },
              [currentMonthDateMinusTwo]: {
                amount: 466661.58,
                rating: 34
              },
              [currentMonthDateMinusOne]: {
                amount: 442772.29,
                rating: 23
              },
              [currentMonthDate]: {
                amount: 201502.83,
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
                amount: 602228.5,
                rating: 20
              },
              [currentMonthDateMinusThree]: {
                amount: 357146.64,
                rating: 44
              },
              [currentMonthDateMinusTwo]: {
                amount: 506861.02,
                rating: 26
              },
              [currentMonthDateMinusOne]: {
                amount: 290086.86,
                rating: 43
              },
              [currentMonthDate]: {
                amount: 112384.2,
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
                amount: 510963.97,
                rating: 31
              },
              [currentMonthDateMinusThree]: {
                amount: 600905.98,
                rating: 29
              },
              [currentMonthDateMinusTwo]: {
                amount: 638992.76,
                rating: 10
              },
              [currentMonthDateMinusOne]: {
                amount: 607731.14,
                rating: 10
              },
              [currentMonthDate]: {
                amount: 149963.74,
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
                amount: 527836.87,
                rating: 27
              },
              [currentMonthDateMinusThree]: {
                amount: 705669.19,
                rating: 12
              },
              [currentMonthDateMinusTwo]: {
                amount: 552139.75,
                rating: 21
              },
              [currentMonthDateMinusOne]: {
                amount: 311787.65,
                rating: 42
              },
              [currentMonthDate]: {
                amount: 132876.56,
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
                amount: 716794.33,
                rating: 3
              },
              [currentMonthDateMinusThree]: {
                amount: 696148.96,
                rating: 16
              },
              [currentMonthDateMinusTwo]: {
                amount: 502248.69,
                rating: 27
              },
              [currentMonthDateMinusOne]: {
                amount: 483117.36,
                rating: 19
              },
              [currentMonthDate]: {
                amount: 107682.79,
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
                amount: 225014.2,
                rating: 45
              },
              [currentMonthDateMinusThree]: {
                amount: 249321.65,
                rating: 45
              },
              [currentMonthDateMinusTwo]: {
                amount: 411618.04,
                rating: 42
              },
              [currentMonthDateMinusOne]: {
                amount: 463097.14,
                rating: 21
              },
              [currentMonthDate]: {
                amount: 84062.67,
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
                amount: 680911.18,
                rating: 9
              },
              [currentMonthDateMinusThree]: {
                amount: 621067.58,
                rating: 25
              },
              [currentMonthDateMinusTwo]: {
                amount: 428593.58,
                rating: 40
              },
              [currentMonthDateMinusOne]: {
                amount: 405174.58,
                rating: 29
              },
              [currentMonthDate]: {
                amount: 207655.03,
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
                amount: 389167.3,
                rating: 42
              },
              [currentMonthDateMinusThree]: {
                amount: 701097.69,
                rating: 13
              },
              [currentMonthDateMinusTwo]: {
                amount: 386002.14,
                rating: 43
              },
              [currentMonthDateMinusOne]: {
                amount: 432089.25,
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
                amount: 387852.54,
                rating: 43
              },
              [currentMonthDateMinusThree]: {
                amount: 403821.09,
                rating: 43
              },
              [currentMonthDateMinusTwo]: {
                amount: 479983.67,
                rating: 31
              },
              [currentMonthDateMinusOne]: {
                amount: 368323.97,
                rating: 35
              },
              [currentMonthDate]: {
                amount: 134396.55,
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
                amount: 671936.49,
                rating: 12
              },
              [currentMonthDateMinusThree]: {
                amount: 641336.22,
                rating: 23
              },
              [currentMonthDateMinusTwo]: {
                amount: 759943.08,
                rating: 2
              },
              [currentMonthDateMinusOne]: {
                amount: 389666.44,
                rating: 31
              },
              [currentMonthDate]: {
                amount: 188260.63,
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
                amount: 492793.67,
                rating: 33
              },
              [currentMonthDateMinusThree]: {
                amount: 573620.37,
                rating: 31
              },
              [currentMonthDateMinusTwo]: {
                amount: 529812.62,
                rating: 23
              },
              [currentMonthDateMinusOne]: {
                amount: 378843.26,
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
                amount: 703353.9,
                rating: 4
              },
              [currentMonthDateMinusThree]: {
                amount: 530011.09,
                rating: 39
              },
              [currentMonthDateMinusTwo]: {
                amount: 683521.11,
                rating: 9
              },
              [currentMonthDateMinusOne]: {
                amount: 522298.25,
                rating: 14
              },
              [currentMonthDate]: {
                amount: 59837.43,
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
                amount: 555470.02,
                rating: 24
              },
              [currentMonthDateMinusThree]: {
                amount: 557923.21,
                rating: 34
              },
              [currentMonthDateMinusTwo]: {
                amount: 523063.87,
                rating: 24
              },
              [currentMonthDateMinusOne]: {
                amount: 439091.03,
                rating: 24
              },
              [currentMonthDate]: {
                amount: 84083.59,
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
                amount: 635704.21,
                rating: 16
              },
              [currentMonthDateMinusThree]: {
                amount: 570363.79,
                rating: 32
              },
              [currentMonthDateMinusTwo]: {
                amount: 436521.47,
                rating: 38
              },
              [currentMonthDateMinusOne]: {
                amount: 322327.4,
                rating: 39
              },
              [currentMonthDate]: {
                amount: 123548.21,
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
