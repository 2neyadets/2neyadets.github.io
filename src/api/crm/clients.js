import { actionNotAvailableNotify } from 'src/utils/helpers'

export const getClientData = async (clientId) => {
  return {
    data: {
      id: 12992439,
      timeZone: 10,
      login: '191037991',
      gender: 'female',
      lastName: 'Хфыарарб',
      firstName: 'Ресыин',
      middleName: 'Ржцъэдушис',
      birthDate: '1982-08-17T00:00:00+04:00',
      age: 37,
      passport: {
        number: '0327337665',
        issuedBy: 'ЛЕНИНСКИЙ РУВД Г.ВЛАДИВОСТОКА',
        issuedAt: '2004-10-14T00:00:00+04:00',
        dept: '585-371'
      },
      secret: {
        type: 'Кличка домашнего животного',
        answer: 'Ответ',
        custom: null
      },
      maritalStatus: 'single',
      childrenCount: 0,
      education: 'higher',
      employerIndustry: 'Общественное питание (кафе, рестораны)',
      employerName: 'Ооо инком шит м',
      employerOwnership: 'Частная',
      employerStaffCount: '101-1000',
      employmentPeriod: 'Более 5 лет',
      employmentType: 'Наемный сотрудник',
      position: null,
      monthlyIncome: 30000,
      homeAddress: {
        postalCode: '780900',
        region: {
          code: '25',
          name: 'Приморский край'
        },
        district: null,
        city: 'Город',
        street: 'Улица',
        house: '75',
        housing: null,
        building: null,
        flat: '28',
        fullByGuid: null
      },
      workAddress: {
        fullAddress: '121433, Москва, Филёвская Б., 32',
        fullByGuid: 'г. Москва, ул. Филёвская Б.',
        website: null
      },
      emails: [
        'pkehwzmd@rzrbeo.local'
      ],
      phones: [
        {
          id: 14051409,
          number: '70363352832',
          source: 'RSCB',
          type: 'additional',
          autodial: true,
          owner: null,
          comment: null,
          active: true,
          main: false,
          operator: null
        },
        {
          id: 14051395,
          number: '70368138741',
          source: 'Client',
          type: 'additional',
          autodial: true,
          owner: null,
          comment: null,
          active: true,
          main: false,
          operator: null
        },
        {
          id: 14051394,
          number: '70701780328',
          source: 'Client',
          type: 'mobile',
          autodial: true,
          owner: 'баьпзпкл',
          comment: null,
          active: true,
          main: true,
          operator: null
        }
      ],
      lastLogin: '2020-04-08T17:18:22+03:00',
      blacklisted: false,
      reliability: {
        loans: {
          total: 3
        },
        promises: {
          total: 5,
          fulfilled: 0
        }
      },
      products: [
        {
          id: 6309759
        }
      ],
      restrictions: {
        renewalDays: 0
      },
      notifications: []
    }
  }
}

export const getClientCommunications = async (clientId) => {
  return {
    data: {
      clientId: 12992439,
      communications: [
        {
          id: 6695986,
          callId: 5193506,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-02-07T08:18:09+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoDial',
          interaction: 'direct',
          status: 'contactWithClient',
          result: 'promiseToRepayInFull',
          reason: null,
          comment: 'мт 7.02 пп',
          updatedAt: '2020-02-07T08:18:09+03:00',
          promise: {
            id: 392924,
            type: 'promiseToRepayInFull',
            status: 'not fulfilled',
            promisedAt: '2020-02-11T00:00:00+03:00',
            promisedAmount: 398.02,
            promisedRenewalDays: null
          },
          operator: {
            id: 234,
            fullName: 'Ащьф Лштшфум (Foma Kiniaev)',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт31'
          }
        },
        {
          id: 3695794,
          callId: 3853316,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-10-22T07:04:23+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'contactWithClient',
          result: 'promiseOfRenewal',
          reason: null,
          comment: null,
          updatedAt: '2019-10-22T07:04:23+03:00',
          promise: {
            id: 297444,
            type: 'promiseOfRenewal',
            status: 'not fulfilled',
            promisedAt: '2019-10-22T00:00:00+03:00',
            promisedAmount: null,
            promisedRenewalDays: null
          },
          operator: {
            id: 186,
            fullName: 'Vocamate Interactive',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Телефонный робот',
            portfolios: null
          }
        },
        {
          id: 3718425,
          callId: 3866506,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-10-23T10:13:59+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'contactWithClient',
          result: 'refusalToPay',
          reason: null,
          comment: null,
          updatedAt: '2019-10-23T10:13:59+03:00',
          promise: null,
          operator: {
            id: 186,
            fullName: 'Vocamate Interactive',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Телефонный робот',
            portfolios: null
          }
        },
        {
          id: 3734778,
          callId: 3875814,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-10-24T08:08:46+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoDial',
          interaction: 'direct',
          status: 'contactWithClient',
          result: 'needToCallback',
          reason: null,
          comment: 'отв кл не слышу, еду в транспорте, перезвоните через 30 мин',
          updatedAt: '2019-10-24T08:08:46+03:00',
          promise: null,
          operator: {
            id: 85,
            fullName: 'Цдрннхдо Ббэцмю Ыыжечутйяэ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт7'
          }
        },
        {
          id: 7887914,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-12T10:09:06+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSmsReminderAtMaturityDateOnRenewableDebt',
          reason: null,
          comment: 'Segodnya planovoe pogashenie zajma #maturity_date# Summa #debt_total# r. Segodnya mozhno prodlit\' zajm bez shtrafa po ssylke #autologin_url#',
          updatedAt: '2020-03-12T10:09:06+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 7916034,
          callId: 5674981,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-13T07:07:28+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'contactWithClient',
          result: 'contactWithoutResult',
          reason: null,
          comment: null,
          updatedAt: '2020-03-13T07:07:28+03:00',
          promise: null,
          operator: {
            id: 186,
            fullName: 'Vocamate Interactive',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Телефонный робот',
            portfolios: null
          }
        },
        {
          id: 3931161,
          callId: 3981439,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-03T08:18:39+03:00',
          channel: {
            phone: {
              number: 79510055520,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'contactWithRelative',
          result: 'promiseToProvideInfo',
          reason: null,
          comment: 'брат',
          updatedAt: '2019-11-03T08:18:39+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 3971676,
          callId: 4003458,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-05T10:33:41+03:00',
          channel: {
            phone: {
              number: 79510055520,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoDial',
          interaction: 'other',
          status: 'contactWithRelative',
          result: 'promiseToProvideInfo',
          reason: null,
          comment: 'брат',
          updatedAt: '2019-11-05T10:33:41+03:00',
          promise: null,
          operator: {
            id: 274,
            fullName: 'Шилыковский Владислав',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт45'
          }
        },
        {
          id: 3989810,
          callId: 4012974,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-06T08:20:42+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoDial',
          interaction: 'direct',
          status: 'contactWithClient',
          result: 'promiseToRepayInFull',
          reason: null,
          comment: 'мт 8 ПП',
          updatedAt: '2019-11-06T08:20:42+03:00',
          promise: {
            id: 311234,
            type: 'promiseToRepayInFull',
            status: 'not fulfilled',
            promisedAt: '2019-11-10T00:00:00+03:00',
            promisedAmount: 1945.82,
            promisedRenewalDays: null
          },
          operator: {
            id: 174,
            fullName: 'Ъфнсфцтк Жъшапл Лэмыжчыяха',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: null
          }
        },
        {
          id: 4074442,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-10T10:46:29+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'sms'
            }
          },
          action: 'manualDial',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'smsWarningOfUnfulfilledPromise',
          reason: null,
          comment: 'Нарушена достигнутая договоренность по оплате просроченной задолженности. Долг 1945.82 руб. ООО МФК «ВЭББАНКИР» Тел.88007755454',
          updatedAt: '2019-11-10T10:46:29+03:00',
          promise: null,
          operator: {
            id: 174,
            fullName: 'Ъфнсфцтк Жъшапл Лэмыжчыяха',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: null
          }
        },
        {
          id: 7992701,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-15T10:08:54+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSms2DaysBeforeMaturityReminderWithOfferOfRenewal',
          reason: null,
          comment: '#maturity_date# planovoe pogashenie zajma. Prodlite zajm v Lichnom Kabinete na sajte: #autologin_url#',
          updatedAt: '2020-03-15T10:08:54+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8059660,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-17T10:10:10+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSmsReminderAtMaturityDateOnRenewableDebt',
          reason: null,
          comment: 'Segodnya planovoe pogashenie zajma #maturity_date# Summa #debt_total# r. Segodnya mozhno prodlit\' zajm bez shtrafa po ssylke #autologin_url#',
          updatedAt: '2020-03-17T10:10:10+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8092575,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-18T10:08:43+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSms1DayDelayNoticeWithTermRenewOffer',
          reason: null,
          comment: 'Просроченная задолженность!Начисляется штраф!Вы можете продлить займ: #autologin_url# ООО МФК "ВЭББАНКИР" Тел.88007755454',
          updatedAt: '2020-03-18T10:08:43+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8157633,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-20T10:08:12+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSms3DaysDelayDemandOfPaymentOrTermRenew',
          reason: null,
          comment: 'Срочно оплатите просроченную задолженность или продлите срок займа: #autologin_url# Тел.88007755454 ООО МФК "ВЭББАНКИР"',
          updatedAt: '2020-03-20T10:08:12+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8191687,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-21T10:09:01+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSms3DaysDelayDemandOfPaymentOrTermRenew',
          reason: null,
          comment: 'Срочно оплатите просроченную задолженность или продлите срок займа: #autologin_url# Тел.88007755454 ООО МФК "ВЭББАНКИР"',
          updatedAt: '2020-03-21T10:09:01+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8249234,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-23T10:05:11+03:00',
          channel: {
            email: {
              address: 'pik.nik.pik@mail.ru',
              variant: 'email'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'emailToClient',
          result: 'informerEmailNoticeOfReportingToTheCreditBureau',
          reason: null,
          comment: 'Уведомляем о том, что в соответствии с Федеральным Законом от 30.12.2004 N 218-ФЗ "О кредитных историях" информация о факте неисполнения Вами обязательств по договору нецелевого потребительского займа (микрозайма) предоставляется в Бюро кредитных историй!Просим Вас незамедлительно погасить просроченную задолженность перед ООО МФК «ВЭББАНКИР» или продлить срок займа, так как Вы еще можете сохранить статус Лояльного клиента.ООО МФК "ВЭББАНКИР"www.webbankir.com8(800)775-54-54 круглосуточно.',
          updatedAt: null,
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8277534,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-24T09:33:56+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2020-03-24T09:33:56+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 8277571,
          callId: 5823755,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-24T09:34:44+03:00',
          channel: {
            phone: {
              number: '74232480300',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'contactWith3rdPerson',
          result: 'needToCallback',
          reason: null,
          comment: null,
          updatedAt: '2020-03-24T09:34:44+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 8277587,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-24T09:35:04+03:00',
          channel: {
            phone: {
              number: '79510055520',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'isNotAvailable',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2020-03-24T09:35:04+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 8383436,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-27T10:04:45+03:00',
          channel: {
            email: {
              address: 'pik.nik.pik@mail.ru',
              variant: 'email'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'emailToClient',
          result: 'informerEmailNoticeOfAheadOfSchedulePreTrialCollectionProcedure',
          reason: null,
          comment: 'Уважаемый клиент! Вы игнорируете все уведомления со стороны ООО МФК «ВЭББАНКИР», в связи с чем напоминаем Вам о том, что мы вправе досрочно передать Ваши документы в Отдел Взыскания! Во избежание передачи документов, СРОЧНО свяжитесь с ООО МФК «ВЭББАНКИР» для согласования новых сроков оплаты Вашей просроченной задолженности!\nООО МФК "ВЭББАНКИР" www.webbankir.com 8(800)775-54-54 круглосуточно.',
          updatedAt: null,
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8452810,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-29T10:07:56+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSmsDemandOfContact',
          reason: null,
          comment: 'Просрочена задолженность! Для РЕШЕНИЯ вопроса СРОЧНО свяжитесь с нами:#autologin_url# ООО МФК "ВЭББАНКИР" Тел.88007755454',
          updatedAt: '2020-03-29T10:07:56+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8463670,
          callId: 5892814,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-29T12:16:51+03:00',
          channel: {
            phone: {
              number: '79510055520',
              variant: 'incomingCall'
            }
          },
          action: 'autoDial',
          interaction: 'other',
          status: 'contactWithRelative',
          result: 'promiseToProvideInfo',
          reason: null,
          comment: 'брат',
          updatedAt: '2020-03-29T12:16:51+03:00',
          promise: null,
          operator: {
            id: 50,
            fullName: 'Ихчъхпзе Тгжчгм Юдгбьпппэф',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт38'
          }
        },
        {
          id: 8464106,
          callId: 5893097,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-29T12:30:05+03:00',
          channel: {
            phone: {
              number: '79510055520',
              variant: 'incomingCall'
            }
          },
          action: 'autoDial',
          interaction: 'other',
          status: 'contactWithRelative',
          result: 'promiseToProvideInfo',
          reason: null,
          comment: null,
          updatedAt: '2020-03-29T12:30:05+03:00',
          promise: null,
          operator: {
            id: 48,
            fullName: 'Рчюсзщаь Ииузэл Ллцягдпзны',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт9'
          }
        },
        {
          id: 8510544,
          callId: 5915746,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-03-31T08:07:49+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoDial',
          interaction: 'direct',
          status: 'contactWithClient',
          result: 'promiseToRepayInFull',
          reason: null,
          comment: 'мт отв сегодня',
          updatedAt: '2020-03-31T08:07:49+03:00',
          promise: {
            id: 437239,
            type: 'promiseToRepayInFull',
            status: 'not fulfilled',
            promisedAt: '2020-04-04T00:00:00+03:00',
            promisedAmount: 973.78,
            promisedRenewalDays: null
          },
          operator: {
            id: 76,
            fullName: 'Шхексфхн Ошъгрс Ьйвбэкгбяч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт27'
          }
        },
        {
          id: 8566302,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-02T07:19:36+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'manualDial',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'smsWarningOfUnfulfilledPromise',
          reason: null,
          comment: 'Нарушена достигнутая договоренность по оплате просроченной задолженности. Долг #totalDebt# руб. ООО МФК «ВЭББАНКИР» Тел.88007755454',
          updatedAt: '2020-04-02T07:19:36+03:00',
          promise: null,
          operator: {
            id: 76,
            fullName: 'Шхексфхн Ошъгрс Ьйвбэкгбяч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт27'
          }
        },
        {
          id: 8549617,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-01T11:28:05+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'manualDial',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'smsWarningOfUnfulfilledPromise',
          reason: null,
          comment: 'Нарушена достигнутая договоренность по оплате просроченной задолженности. Долг #totalDebt# руб. ООО МФК «ВЭББАНКИР» Тел.88007755454',
          updatedAt: '2020-04-01T11:28:05+03:00',
          promise: null,
          operator: {
            id: 76,
            fullName: 'Шхексфхн Ошъгрс Ьйвбэкгбяч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт27'
          }
        },
        {
          id: 8587571,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-02T13:30:23+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '4654',
          updatedAt: '2020-04-02T13:30:23+03:00',
          promise: null,
          operator: {
            id: 76,
            fullName: 'Шхексфхн Ошъгрс Ьйвбэкгбяч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт27'
          }
        },
        {
          id: 6092460,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-19T10:08:09+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSms2DaysBeforeMaturityReminderWithOfferOfRenewal',
          reason: null,
          comment: '#maturity_date# planovoe pogashenie zajma. Prodlite zajm v Lichnom Kabinete na sajte: #autologin_url#',
          updatedAt: '2020-01-19T10:08:09+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8660235,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-04T11:24:07+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '4654',
          updatedAt: '2020-04-04T11:24:07+03:00',
          promise: null,
          operator: {
            id: 76,
            fullName: 'Шхексфхн Ошъгрс Ьйвбэкгбяч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт27'
          }
        },
        {
          id: 8660238,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-04T11:24:10+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'manualDial',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'smsWarningOfUnfulfilledPromise',
          reason: null,
          comment: 'Нарушена достигнутая договоренность по оплате просроченной задолженности. Долг #totalDebt# руб. ООО МФК «ВЭББАНКИР» Тел.88007755454',
          updatedAt: '2020-04-04T11:24:10+03:00',
          promise: null,
          operator: {
            id: 76,
            fullName: 'Шхексфхн Ошъгрс Ьйвбэкгбяч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт27'
          }
        },
        {
          id: 6160427,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-21T10:16:06+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSmsReminderAtMaturityDateOnRenewableDebt',
          reason: null,
          comment: 'Segodnya planovoe pogashenie zajma #maturity_date# Summa #debt_total# r. Segodnya mozhno prodlit\' zajm bez shtrafa po ssylke #autologin_url#',
          updatedAt: '2020-01-21T10:16:06+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 6192653,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-22T10:10:31+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSms1DayDelayNoticeWithTermRenewOffer',
          reason: null,
          comment: 'Просроченная задолженность!Начисляется штраф!Вы можете продлить займ: #autologin_url# ООО МФК "ВЭББАНКИР" Тел.88007755454',
          updatedAt: '2020-01-22T10:10:31+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8823325,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-08T11:40:31+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2020-04-08T11:40:31+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 8823339,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-08T11:40:48+03:00',
          channel: {
            phone: {
              number: '74232480300',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2020-04-08T11:40:48+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 8823363,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-08T11:41:27+03:00',
          channel: {
            phone: {
              number: '79510055520',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2020-04-08T11:41:27+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 8727058,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-06T10:10:52+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSmsImportantInformationAboutDebt',
          reason: null,
          comment: 'Имеется важная информация о Вашей просроченной задолженности. Срочно свяжитесь с нами! ООО МФК "ВЭББАНКИР" Тел.88007755454',
          updatedAt: '2020-04-06T10:10:52+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 6309464,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-26T10:09:12+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSmsReminderOfOverduePayment',
          reason: null,
          comment: 'Напоминаем о необходимости срочно оплатить просроченную задолженность: #autologin_url# ООО МФК "ВЭББАНКИР" Тел.88007755454',
          updatedAt: '2020-01-26T10:09:12+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 6338049,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-27T10:01:22+03:00',
          channel: {
            email: {
              address: 'pik.nik.pik@mail.ru',
              variant: 'email'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'emailToClient',
          result: 'informerEmailNoticeOfReportingToTheCreditBureau',
          reason: null,
          comment: 'Уведомляем о том, что в соответствии с Федеральным Законом от 30.12.2004 N 218-ФЗ "О кредитных историях" информация о факте неисполнения Вами обязательств по договору нецелевого потребительского займа (микрозайма) предоставляется в Бюро кредитных историй!Просим Вас незамедлительно погасить просроченную задолженность перед ООО МФК «ВЭББАНКИР» или продлить срок займа, так как Вы еще можете сохранить статус Лояльного клиента.ООО МФК "ВЭББАНКИР"www.webbankir.com8(800)775-54-54 круглосуточно.',
          updatedAt: null,
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 6423147,
          callId: 5071825,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-29T13:03:47+03:00',
          channel: {
            phone: {
              number: 79510055520,
              variant: 'incomingCall'
            }
          },
          action: 'autoDial',
          interaction: 'other',
          status: 'contactWithRelative',
          result: 'promiseToProvideInfo',
          reason: null,
          comment: 'родной брат,номер-,инф сейчас передаст',
          updatedAt: '2020-01-29T13:03:47+03:00',
          promise: null,
          operator: {
            id: 188,
            fullName: 'Двбфздвю Ырйыця Бгбкиеюхюх',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт15'
          }
        },
        {
          id: 6470172,
          callId: 5093408,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-31T08:11:15+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoDial',
          interaction: 'direct',
          status: 'contactWithClient',
          result: 'promiseOfRenewal',
          reason: null,
          comment: 'до 2.02 прол',
          updatedAt: '2020-01-31T08:11:15+03:00',
          promise: {
            id: 386506,
            type: 'promiseOfRenewal',
            status: 'not fulfilled',
            promisedAt: '2020-02-04T00:00:00+03:00',
            promisedAmount: 559.3,
            promisedRenewalDays: null
          },
          operator: {
            id: 57,
            fullName: 'Ницсккхы Сщвшэо Ккьцйарилс',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт33'
          }
        },
        {
          id: 6474991,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-31T10:01:31+03:00',
          channel: {
            email: {
              address: 'pik.nik.pik@mail.ru',
              variant: 'email'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'emailToClient',
          result: 'informerEmailNoticeOfAheadOfSchedulePreTrialCollectionProcedure',
          reason: null,
          comment: 'Уважаемый клиент! Вы игнорируете все уведомления со стороны ООО МФК «ВЭББАНКИР», в связи с чем напоминаем Вам о том, что мы вправе досрочно передать Ваши документы в Отдел Взыскания!Во избежание передачи документов, СРОЧНО свяжитесь с ООО МФК «ВЭББАНКИР» для согласования новых сроков оплаты Вашей просроченной задолженности!ООО МФК "ВЭББАНКИР"www.webbankir.com8(800)775-54-54 круглосуточно.',
          updatedAt: null,
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 6533024,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-02-02T10:08:51+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSmsDemandOfContact',
          reason: null,
          comment: 'Просроченная задолженность!Для РЕШЕНИЯ вопроса СРОЧНО свяжитесь с нами: #autologin_url# ООО МФК "ВЭББАНКИР" Тел.88007755454',
          updatedAt: '2020-02-02T10:08:51+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 6593853,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-02-04T08:39:42+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'sms'
            }
          },
          action: 'manualDial',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'smsWarningOfUnfulfilledPromise',
          reason: null,
          comment: 'Нарушена достигнутая договоренность по оплате просроченной задолженности. Долг #totalDebt# руб. ООО МФК «ВЭББАНКИР» Тел.88007755454',
          updatedAt: '2020-02-04T08:39:42+03:00',
          promise: null,
          operator: {
            id: 57,
            fullName: 'Ницсккхы Сщвшэо Ккьцйарилс',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт33'
          }
        },
        {
          id: 3772021,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-10-26T08:10:45+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'isNotAvailable',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-10-26T08:10:45+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 3754626,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-10-25T09:36:39+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'isNotAvailable',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-10-25T09:36:39+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 3761309,
          callId: 3888757,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-10-25T12:47:04+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoDial',
          interaction: 'other',
          status: 'isNotAvailable',
          result: 'withoutClientContact',
          reason: null,
          comment: 'мт сбр',
          updatedAt: '2019-10-25T12:47:04+03:00',
          promise: null,
          operator: {
            id: 259,
            fullName: 'Эцючньдж Лцоапщ Дщдгээюыюх',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт37'
          }
        },
        {
          id: 3778942,
          callId: 3897586,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-10-26T11:55:22+03:00',
          channel: {
            phone: {
              number: 79510055520,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-10-26T11:55:22+03:00',
          promise: null,
          operator: {
            id: 52,
            fullName: 'Ядълщойв Ъфчыыр Вхрыюкгъир',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт19'
          }
        },
        {
          id: 3829592,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-10-29T08:53:53+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-10-29T08:53:53+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 3852837,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-10-30T09:23:16+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-10-30T09:23:16+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 3911796,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-02T08:16:12+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'isNotAvailable',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-11-02T08:16:12+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 3931148,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-03T08:17:39+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'isNotAvailable',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-11-03T08:17:39+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 4074434,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-10T10:46:21+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'isNotAvailable',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-11-10T10:46:21+03:00',
          promise: null,
          operator: {
            id: 174,
            fullName: 'Ъфнсфцтк Жъшапл Лэмыжчыяха',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: null
          }
        },
        {
          id: 4096360,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-11T12:09:00+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'isNotAvailable',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-11-11T12:09:00+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 4096364,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-11T12:09:09+03:00',
          channel: {
            phone: {
              number: 79510055520,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'isNotAvailable',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-11-11T12:09:09+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 4154589,
          callId: 4105786,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-14T10:30:09+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'notSetOrSilence',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-11-14T10:30:09+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 4176500,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-15T10:24:46+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'isDisabled',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-11-15T10:24:46+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 4176517,
          callId: null,
          productId: 5746712,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-11-15T10:25:15+03:00',
          channel: {
            phone: {
              number: 79510055520,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2019-11-15T10:25:15+03:00',
          promise: null,
          operator: {
            id: 64,
            fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт8'
          }
        },
        {
          id: 5314949,
          callId: 4604336,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2019-12-23T10:45:07+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoInformer',
          interaction: 'other',
          status: 'notSetOrSilence',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2019-12-23T10:45:07+03:00',
          promise: null,
          operator: {
            id: 186,
            fullName: 'Vocamate Interactive',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Телефонный робот',
            portfolios: null
          }
        },
        {
          id: 6254688,
          callId: 5003112,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-24T09:57:55+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoInformer',
          interaction: 'other',
          status: 'notSetOrSilence',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2020-01-24T09:57:55+03:00',
          promise: null,
          operator: {
            id: 186,
            fullName: 'Vocamate Interactive',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Телефонный робот',
            portfolios: null
          }
        },
        {
          id: 6275801,
          callId: 5014592,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-25T08:49:34+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingAutodialCall'
            }
          },
          action: 'autoInformer',
          interaction: 'other',
          status: 'notSetOrSilence',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2020-01-25T08:49:34+03:00',
          promise: null,
          operator: {
            id: 186,
            fullName: 'Vocamate Interactive',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Телефонный робот',
            portfolios: null
          }
        },
        {
          id: 6306007,
          callId: 5026563,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-26T09:31:30+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2020-01-26T09:31:30+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 6306011,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-26T09:31:40+03:00',
          channel: {
            phone: {
              number: 79510055520,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2020-01-26T09:31:40+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 6306040,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-26T09:32:31+03:00',
          channel: {
            phone: {
              number: 74232480300,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2020-01-26T09:32:31+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 6454451,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-30T12:02:19+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2020-01-30T12:02:19+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 6454461,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-30T12:02:45+03:00',
          channel: {
            phone: {
              number: 74232480300,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2020-01-30T12:02:45+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 6454476,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-01-30T12:03:07+03:00',
          channel: {
            phone: {
              number: 79510055520,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2020-01-30T12:03:07+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 6593847,
          callId: 5151230,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-02-04T08:39:38+03:00',
          channel: {
            phone: {
              number: 79084584654,
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: '',
          updatedAt: '2020-02-04T08:39:38+03:00',
          promise: null,
          operator: {
            id: 57,
            fullName: 'Ницсккхы Сщвшэо Ккьцйарилс',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт33'
          }
        },
        {
          id: 6632926,
          callId: null,
          productId: 6088972,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-02-05T10:05:55+03:00',
          channel: {
            email: {
              address: 'pik.nik.pik@mail.ru',
              variant: 'email'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'emailToClient',
          result: 'informerEmailDelay15NoticeOfPreTrialCollectionProcedure',
          reason: null,
          comment: 'Длительное время Вы не выполняете свои обязательства перед ООО МФК «ВЭББАНКИР». Мы неоднократно информировали Вас о срочном погашении просроченной задолженности! ООО МФК «ВЭББАНКИР» вправе расценивать Ваши действия, как прямой отказ от взятых на себя обязательств и передать документы в Отдел Взыскания!При передаче документов в Отдел Взыскания у Вас будет статус «Проблемного заемщика»ООО МФК "ВЭББАНКИР"www.webbankir.com8(800)775-54-54 круглосуточно.',
          updatedAt: null,
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8892901,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-10T10:01:51+03:00',
          channel: {
            email: {
              address: 'pik.nik.pik@mail.ru',
              variant: 'email'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'emailToClient',
          result: 'informerEmailDelay24NoticeOfStartingPreTrialCollectionProcedure',
          reason: null,
          comment: 'Внимание! Информируем Вас о наличии просроченной задолженности перед ООО МФК «ВЭББАНКИР»! ООО МФК «ВЭББАНКИР» готовит Ваши документы для передачи в Отдел Взыскания! Так как длительное время Вы игнорировали наши письма и сообщения, мы расцениваем Ваши действия, как прямой отказ от оплаты! Отказ от обязательств недопустим в соответствии с 310 ГК РФ! Рекомендуем Вам связаться с нами и оплатить свой долг! ООО МФК "ВЭББАНКИР"www.webbankir.com8(800)775-54-54 круглосуточно.',
          updatedAt: null,
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 8931891,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-11T10:01:00+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2020-04-11T10:01:00+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 8932056,
          callId: 6095236,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-11T10:01:30+03:00',
          channel: {
            phone: {
              number: '74232480300',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2020-04-11T10:01:30+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 8932600,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-11T10:03:10+03:00',
          channel: {
            phone: {
              number: '79510055520',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2020-04-11T10:03:10+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 8965902,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-12T10:09:48+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSmsWarningOfStaringPreCourtProcedure',
          reason: null,
          comment: 'Должник!Погаси просроченный долг: #autologin_url# Начата процедура досудебного взыскания. ООО МФК "ВЭББАНКИР" т.88007755454',
          updatedAt: '2020-04-12T10:09:48+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 9039323,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-14T10:05:13+03:00',
          channel: {
            email: {
              address: 'pik.nik.pik@mail.ru',
              variant: 'email'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'emailToClient',
          result: 'informerEmailDelay28NoticeOfStartingPreTrialCollectionProcedure',
          reason: null,
          comment: 'Внимание! Информируем Вас о наличии просроченной задолженности перед ООО МФК «ВЭББАНКИР»! ООО МФК «ВЭББАНКИР» готовит Ваши документы для передачи в Отдел Взыскания! Так как длительное время Вы игнорировали наши письма и сообщения, мы расцениваем Ваши действия, как прямой отказ от оплаты! Отказ от обязательств недопустим в соответствии с 310 ГК РФ! Рекомендуем Вам связаться с нами и оплатить свой просроченный долг! ООО МФК "ВЭББАНКИР"www.webbankir.com8(800)775-54-54 круглосуточно.',
          updatedAt: null,
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        },
        {
          id: 9092823,
          callId: 6155993,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-15T12:00:47+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'outgoingManualCall'
            }
          },
          action: 'manualDial',
          interaction: 'other',
          status: 'doesNotRespond',
          result: 'withoutClientContact',
          reason: null,
          comment: null,
          updatedAt: '2020-04-15T12:00:47+03:00',
          promise: null,
          operator: {
            id: 190,
            fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
            department: {
              id: 158,
              name: 'Отдел финансового консультирования'
            },
            position: 'Финансовый консультант',
            portfolios: 'Софт13'
          }
        },
        {
          id: 9117790,
          callId: null,
          productId: 6309759,
          dealId: null,
          applicationId: null,
          contactedAt: '2020-04-16T10:10:37+03:00',
          channel: {
            phone: {
              number: '79084584654',
              variant: 'sms'
            }
          },
          action: 'autoInformer',
          interaction: 'indirect',
          status: 'smsToClient',
          result: 'informerSmsWarningOfTomorrowTransferToCollectors',
          reason: null,
          comment: 'Должник! Просроченная задолженность не погашена! Завтра документы будут переданы в отдел ВЗЫСКАНИЯ! ООО МФК "ВЭББАНКИР" Тел.88007755454',
          updatedAt: '2020-04-16T10:10:37+03:00',
          promise: null,
          operator: {
            id: 328,
            fullName: 'Массовая Рассылка',
            department: {
              id: 1,
              name: 'CRM'
            },
            position: 'Автоинформатор (рассылка сообщений)',
            portfolios: null
          }
        }
      ]
    }
  }
}

export const getClientLoansHistory = async (clientId) => {
  return {
    data: {
      client_id: 12992439,
      list: [
        {
          id: 6088972,
          doc_number: '191037991/2',
          date_start: '2019-12-23T10:36:59+03:00',
          date_end: '2020-01-21T00:00:00+03:00',
          days: 30,
          sum: 4000,
          date_closed: '0000-12-31T23:30:17+02:30',
          max_delay: 0,
          dop_count: 0
        },
        {
          id: 5746712,
          doc_number: '191037991/1',
          date_start: '2019-10-10T17:52:37+03:00',
          date_end: '2019-10-19T00:00:00+03:00',
          days: 10,
          sum: 3000,
          date_closed: '0000-12-31T23:30:17+02:30',
          max_delay: 0,
          dop_count: 2
        }
      ]
    }
  }
}

export const addClientPhone = async ({ clientId, ...data }, context) => {
  return actionNotAvailableNotify(context)
}

export const editClientPhone = async ({ clientId, phoneId, data }, context) => {
  return actionNotAvailableNotify(context)
}

export const addCommunication = async ({ clientId, ...data }, context) => {
  return actionNotAvailableNotify(context)
}

export const getClientsList = async (list, page = 1, size = 10000) => {
  return {
    data: {
      counts: {
        all: 34,
        new: 34,
        modified: 10,
        unhandled: 34,
        promises: 3,
        agreements: 0
      },
      clients: [
        {
          id: 11859288,
          fullName: 'Бэцкфдщф Чгюптж Зтэтннйцть',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1980-06-27T00:00:00+03:00',
              homeAddress: '814614, Республика Башкортостан, Город, Улица, 66',
              region: 'Республика Башкортостан',
              city: 'Город',
              mainPhone: '70918543829',
              lastLogin: '2019-08-08T13:38:52+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -5440,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '190697929',
              signingDate: null,
              duration: null,
              amount: 30000,
              debt: {
                principal: 4677.07,
                interests: 792.36,
                fines: 365.04,
                total: 5744.53
              },
              delay: 156,
              product: 'pos',
              openedAt: '2020-04-14T14:21:39+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-01-27T12:50:31+03:00',
                  status: 'doesNotRespond',
                  result: 'withoutClientContact',
                  operator: {
                    id: 178,
                    fullName: 'Егорова Татьяна',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-19T16:57:19+03:00',
                  paidAmount: 5000
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -5440
            }
          ]
        },
        {
          id: 12305314,
          fullName: 'Двбфздвю Ырйыця Бгбкиеюхюх',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1997-11-25T00:00:00+03:00',
              homeAddress: '221541, Ростовская область, Город, Улица, 5, 9',
              region: 'Ростовская область',
              city: 'Город',
              mainPhone: '70206983466',
              lastLogin: '2020-05-09T16:05:34+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -19409,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1907171436',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 10800,
                interests: 1928.5,
                fines: 391.51,
                total: 13120.01
              },
              delay: 150,
              product: 'pos',
              openedAt: '2020-02-10T17:29:34+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-05-09T16:04:16+03:00',
                  status: 'contactWithClient',
                  result: 'promiseToRepayInFullHard',
                  operator: {
                    id: 136,
                    fullName: 'Королева Анжелика',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: null,
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -19409
            }
          ]
        },
        {
          id: 12249670,
          fullName: 'Дялъжччн Чъдиьз Оэвкретэос',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1955-08-23T00:00:00+03:00',
              homeAddress: '315017, Республика Татарстан, Город, Улица, 4',
              region: 'Республика Татарстан',
              city: 'Город',
              mainPhone: '70765021636',
              lastLogin: '2020-03-14T11:45:47+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -8545,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1907116707',
              signingDate: null,
              duration: null,
              amount: 30000,
              debt: {
                principal: 2347.42,
                interests: 113.22,
                fines: 5.79,
                total: 40.64
              },
              delay: 69,
              product: 'pos',
              openedAt: '2020-04-07T16:30:04+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-03-14T09:35:31+03:00',
                  status: 'contactWithClient',
                  result: 'clientPaid',
                  operator: {
                    id: 187,
                    fullName: 'Казакова Татьяна',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2020-03-14T11:47:32+03:00',
                  paidAmount: 50
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -8545
            }
          ]
        },
        {
          id: 12265820,
          fullName: 'Звфдизшщ Дхпщыо Шписънвфпв',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1978-03-02T00:00:00+03:00',
              homeAddress: '920808, Свердловская область, Город, Улица, 23, 55',
              region: 'Свердловская область',
              city: 'Город',
              mainPhone: '70483884943',
              lastLogin: '2019-11-09T17:08:25+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -8768,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1907132459',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 4286.9,
                interests: 795.34,
                fines: 295.52,
                total: 5377.76
              },
              delay: 150,
              product: 'pos',
              openedAt: '2020-04-14T14:21:17+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-08T10:38:48+03:00',
                  status: 'contactWith3rdPerson',
                  result: 'promiseToProvideInfo',
                  operator: {
                    id: 76,
                    fullName: 'Шхексфхн Ошъгрс Ьйвбэкгбяч',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-08T15:12:23+03:00',
                  paidAmount: 2500
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -8768
            }
          ]
        },
        {
          id: 12098911,
          fullName: 'Ихчъхпзе Тгжчгм Юдгбьпппэф',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1983-10-12T00:00:00+03:00',
              homeAddress: '031017, Республика Крым, Город, Улица, 3, 3',
              region: 'Республика Крым',
              city: 'Город',
              mainPhone: '70961008556',
              lastLogin: '2019-11-06T13:02:47+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -7190,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1906327199',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 1441.53,
                interests: 60.6,
                fines: 0.02,
                total: 0.95
              },
              delay: 82,
              product: 'pos',
              openedAt: '2020-04-14T14:20:57+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-03-06T19:09:24+03:00',
                  status: 'contactWithClient',
                  result: 'clientPaid',
                  operator: {
                    id: 178,
                    fullName: 'Егорова Татьяна',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-12-27T12:15:53+03:00',
                  paidAmount: 1400
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -7190
            }
          ]
        },
        {
          id: 11905532,
          fullName: 'Йтйцжшмж Ыэевюб Иршитнньсл',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1988-04-15T00:00:00+04:00',
              homeAddress: '851009, Владимирская область, Город, Улица, 36, 2',
              region: 'Владимирская область',
              city: 'Город',
              mainPhone: '70379855143',
              lastLogin: '2019-06-19T12:59:28+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -5792,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1906134882',
              signingDate: null,
              duration: null,
              amount: 30000,
              debt: {
                principal: 5393.25,
                interests: 1363.46,
                fines: 405.84,
                total: 6887.18
              },
              delay: 152,
              product: 'pos',
              openedAt: '2020-02-10T17:27:07+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-09T16:08:11+03:00',
                  status: 'doesNotRespond',
                  result: 'withoutClientContact',
                  operator: {
                    id: 91,
                    fullName: 'Липкина Ксения',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-15T17:43:59+03:00',
                  paidAmount: 6000
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -5792
            }
          ]
        },
        {
          id: 12951770,
          fullName: 'Нешхаящг Эгщстг Мгъжцышфрф',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1981-08-20T00:00:00+04:00',
              homeAddress: '243189, Челябинская область, Город, Улица, 25',
              region: 'Челябинская область',
              city: 'Город',
              mainPhone: '70437783729',
              lastLogin: '2020-03-01T15:24:21+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -16334,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '190997381',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 4730.77,
                interests: 411.14,
                fines: 42.16,
                total: 6.55
              },
              delay: 88,
              product: 'pos',
              openedAt: '2020-04-14T14:21:13+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-04-05T17:56:28+03:00',
                  status: 'doesNotRespond',
                  result: 'withoutClientContact',
                  operator: {
                    id: 89,
                    fullName: 'Чумакова Анастасия',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2020-03-26T12:44:00+03:00',
                  paidAmount: 2700
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -16334
            }
          ]
        },
        {
          id: 11787419,
          fullName: 'Ницсккхы Сщвшэо Ккьцйарилс',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1987-12-02T00:00:00+03:00',
              homeAddress: '883333, Нижегородская область, Город, Улица, 15А, 61',
              region: 'Нижегородская область',
              city: 'Город',
              mainPhone: '70703090595',
              lastLogin: '2019-09-29T12:47:51+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -4944,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '190626664',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 2467.31,
                interests: 120.17,
                fines: 6.85,
                total: 44.33
              },
              delay: 159,
              product: 'pos',
              openedAt: null,
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-01-26T11:11:19+03:00',
                  status: 'doesNotRespond',
                  result: 'withoutClientContact',
                  operator: {
                    id: 178,
                    fullName: 'Егорова Татьяна',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-12-04T14:57:07+03:00',
                  paidAmount: 2550
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -4944
            }
          ]
        },
        {
          id: 11988647,
          fullName: 'Ооынлытд Зтебру Оквшгпиглъ',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1981-03-15T00:00:00+03:00',
              homeAddress: '922265, Ставропольский край, Город, Улица, 19',
              region: 'Ставропольский край',
              city: 'Город',
              mainPhone: '70875919303',
              lastLogin: '2019-07-11T16:56:28+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -6459,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1906217456',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 7271.27,
                interests: 499.55,
                fines: 65.13,
                total: 84.95
              },
              delay: 265,
              product: 'pos',
              openedAt: null,
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2019-12-28T16:12:38+03:00',
                  status: 'doesNotRespond',
                  result: 'withoutClientContact',
                  operator: {
                    id: 172,
                    fullName: 'Егорушков Алексей',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-09-18T23:59:10+03:00',
                  paidAmount: 3851
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -6459
            }
          ]
        },
        {
          id: 4612201,
          fullName: 'Рцлзъивм Твюыгъ Эцжшззебеы',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1997-02-05T00:00:00+03:00',
              homeAddress: '373942, Ленинградская область, Город, Улица, 7, 87',
              region: 'Ленинградская область',
              city: 'Город',
              mainPhone: '70022591168',
              lastLogin: '2019-11-28T10:29:16+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -17512,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1707147324',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 10131.76,
                interests: 2342.1,
                fines: 469.49,
                total: 12943.35
              },
              delay: 155,
              product: 'pos',
              openedAt: '2020-04-14T14:20:50+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-09T18:05:38+03:00',
                  status: 'contactWith3rdPerson',
                  result: 'needToCallback',
                  operator: {
                    id: 91,
                    fullName: 'Липкина Ксения',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-14T19:55:44+03:00',
                  paidAmount: 2357.96
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -17512
            }
          ]
        },
        {
          id: 11891758,
          fullName: 'Рчюсзщаь Ииузэл Ллцягдпзны',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1995-01-25T00:00:00+03:00',
              homeAddress: '957965, Республика Татарстан, Город, Улица, 30, 1',
              region: 'Республика Татарстан',
              city: 'Город',
              mainPhone: '70609860228',
              lastLogin: '2019-11-16T15:29:49+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -5677,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1906121237',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 1567.64,
                interests: 400.77,
                fines: 119.34,
                total: 2082.54
              },
              delay: 151,
              product: 'pos',
              openedAt: '2020-02-11T11:08:01+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-11T11:08:00+03:00',
                  status: 'doesNotRespond',
                  result: 'withoutClientContact',
                  operator: {
                    id: 121,
                    fullName: 'Гординский Александр',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-16T14:51:05+03:00',
                  paidAmount: 2232.76
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -5677
            }
          ]
        },
        {
          id: 12221195,
          fullName: 'Саэеечви Шэсыоъ Вхцриэьеци',
          mainProduct: {
            client: {
              timeZone: 4,
              birthDate: '1987-01-26T00:00:00+03:00',
              homeAddress: '073317, Саратовская область, Город, Улица, 35, 2',
              region: 'Саратовская область',
              city: 'Город',
              mainPhone: '70394814608',
              lastLogin: '2019-12-11T19:05:18+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -8232,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '190795975',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 4286.9,
                interests: 808.45,
                fines: 301.94,
                total: 5397.29
              },
              delay: 154,
              product: 'pos',
              openedAt: '2020-02-10T17:28:15+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-08T11:33:17+03:00',
                  status: 'isNotAvailable',
                  result: 'withoutClientContact',
                  operator: {
                    id: 274,
                    fullName: 'Шилыковский Владислав',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-07T19:12:13+03:00',
                  paidAmount: 2500
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -8232
            }
          ]
        },
        {
          id: 7098832,
          fullName: 'Сжсллжпз Фщэдуш Эыбвбрвгкт',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1977-11-23T00:00:00+03:00',
              homeAddress: '061556, Нижегородская область, Город, Улица, 6А, 2, 24',
              region: 'Нижегородская область',
              city: 'Город',
              mainPhone: '70391719405',
              lastLogin: '2019-08-12T23:28:17+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -11338,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1803207753',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 7681.21,
                interests: 1887.34,
                fines: 467.43,
                total: 10001.92
              },
              delay: 150,
              product: 'pos',
              openedAt: '2020-04-14T14:21:30+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-11T10:52:14+03:00',
                  status: 'contactWithClient',
                  result: 'failureToInteract',
                  operator: {
                    id: 121,
                    fullName: 'Гординский Александр',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-17T12:23:21+03:00',
                  paidAmount: 2950
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -11338
            }
          ]
        },
        {
          id: 12984333,
          fullName: 'Стчйтщдч Файвоб Айещлзынмк',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1963-04-07T00:00:00+03:00',
              homeAddress: '287484, Ростовская область, Город, Улица, 10, 26',
              region: 'Ростовская область',
              city: 'Город',
              mainPhone: '70818471866',
              lastLogin: null,
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -17731,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '191029893',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 9676.6,
                interests: 1090.51,
                fines: 165.98,
                total: 3333.03
              },
              delay: 156,
              product: 'pos',
              openedAt: '2020-02-11T11:05:32+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-11T11:05:31+03:00',
                  status: 'doesNotRespond',
                  result: 'withoutClientContact',
                  operator: {
                    id: 121,
                    fullName: 'Гординский Александр',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2020-03-25T23:58:39+03:00',
                  paidAmount: 2000
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -17731
            }
          ]
        },
        {
          id: 10649036,
          fullName: 'Суригэчы Лтыюдй Лпындтыхки',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1990-04-18T00:00:00+04:00',
              homeAddress: '591094, Республика Башкортостан, Город, Улица, 26, 2',
              region: 'Республика Башкортостан',
              city: 'Город',
              mainPhone: '70998649036',
              lastLogin: '2020-03-30T08:04:30+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -1233,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1902161089',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 2634.99,
                interests: 154.01,
                fines: 11.29,
                total: 31.98
              },
              delay: 257,
              product: 'pos',
              openedAt: '2020-04-14T14:20:44+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2019-12-02T17:48:26+03:00',
                  status: 'contactWithClient',
                  result: 'promiseToRepayInFullHard',
                  operator: {
                    id: 125,
                    fullName: 'Малков Алексей',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-09-09T16:10:22+03:00',
                  paidAmount: 600
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -1233
            }
          ]
        },
        {
          id: 12922689,
          fullName: 'Ттняпуфс Жыгвтя Жяеиыжжгсе',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1993-11-30T00:00:00+03:00',
              homeAddress: '404928, Ставропольский край, Город, Улица, 132',
              region: 'Ставропольский край',
              city: 'Город',
              mainPhone: '70112413292',
              lastLogin: '2020-01-30T15:52:35+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -15745,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '190968871',
              signingDate: null,
              duration: null,
              amount: 30000,
              debt: {
                principal: 5468.69,
                interests: 1009.98,
                fines: 286.16,
                total: 6763.94
              },
              delay: 149,
              product: 'pos',
              openedAt: '2020-02-10T17:22:14+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-07T11:20:45+03:00',
                  status: 'contactWith3rdPerson',
                  result: 'impossibleToProvideInfo',
                  operator: {
                    id: 53,
                    fullName: 'Андреева Анастасия',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-30T10:36:41+03:00',
                  paidAmount: 1590
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -15745
            }
          ]
        },
        {
          id: 11298989,
          fullName: 'Ущешзюхй Эпвотш Асхуынмфйя',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1971-07-15T00:00:00+03:00',
              homeAddress: '858199, Республика Башкортостан, Город, Улица, 118, 1',
              region: 'Республика Башкортостан',
              city: 'Город',
              mainPhone: '70740234502',
              lastLogin: '2020-01-07T10:28:48+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -2651,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1904294591',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 4447.89,
                interests: 470.02,
                fines: 98.62,
                total: 277.75
              },
              delay: 227,
              product: 'pos',
              openedAt: null,
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2019-12-14T17:52:06+03:00',
                  status: 'contactWith3rdPerson',
                  result: 'clientIsUnknown',
                  operator: {
                    id: 206,
                    fullName: 'Чиркова Виктория',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-20T18:26:17+03:00',
                  paidAmount: 640
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -2651
            }
          ]
        },
        {
          id: 919907,
          fullName: 'Ащьф Лштшфум (Foma Kiniaev)',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1969-08-21T00:00:00+03:00',
              homeAddress: '690876, Пермский край, Город, Улица, 14, 67',
              region: 'Пермский край',
              city: 'Город',
              mainPhone: '70652871100',
              lastLogin: '2020-04-18T14:55:41+03:00',
              secretWord: 'Ответ',
              loansCount: 16
            },
            product: {
              id: -3259,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '151153107',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 1424.25,
                interests: 55.1,
                fines: 4.97,
                total: 2.16
              },
              delay: 185,
              product: 'pos',
              openedAt: '2020-04-14T15:05:08+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-04-26T12:24:52+03:00',
                  status: 'isNotAvailable',
                  result: 'withoutClientContact',
                  operator: {
                    id: 157,
                    fullName: 'Шигина Екатерина',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-14T10:52:11+03:00',
                  paidAmount: 1482.16
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -3259
            }
          ]
        },
        {
          id: 5546488,
          fullName: 'Цдрннхдо Ббэцмю Ыыжечутйяэ',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1984-06-18T00:00:00+04:00',
              homeAddress: '924362, Ямало-Ненецкий автономный округ, Город, Улица, 123, 362',
              region: 'Ямало-Ненецкий автономный округ',
              city: 'Город',
              mainPhone: '70216448417',
              lastLogin: '2019-11-26T06:35:21+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -8675,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1710263724',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 2667.33,
                interests: 495.04,
                fines: 181.39,
                total: 3343.76
              },
              delay: 150,
              product: 'pos',
              openedAt: '2020-02-10T17:30:28+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-04T10:18:43+03:00',
                  status: 'isNotAvailable',
                  result: 'withoutClientContact',
                  operator: {
                    id: 59,
                    fullName: 'Большакова Екатерина',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-25T08:22:21+03:00',
                  paidAmount: 10.56
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -8675
            }
          ]
        },
        {
          id: 12039237,
          fullName: 'Цкгидьаб Тифвзт Еклмыхшгзх',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1996-05-11T00:00:00+04:00',
              homeAddress: '376100, Республика Башкортостан, Улица, 39',
              region: 'Республика Башкортостан',
              city: null,
              mainPhone: '70607983914',
              lastLogin: null,
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -6730,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1906267858',
              signingDate: null,
              duration: null,
              amount: 30000,
              debt: {
                principal: 2453,
                interests: 402.39,
                fines: 107.09,
                total: 462.48
              },
              delay: 141,
              product: 'pos',
              openedAt: '2020-02-20T08:01:44+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-20T08:01:44+03:00',
                  status: 'doesNotRespond',
                  result: 'withoutClientContact',
                  operator: {
                    id: 155,
                    fullName: 'Батлфилд Овервотч',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2020-03-09T17:04:47+03:00',
                  paidAmount: 2500
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -6730
            }
          ]
        },
        {
          id: 11991303,
          fullName: 'Шгьэберо Йжчщаю Ълзтрпычъж',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1967-05-22T00:00:00+03:00',
              homeAddress: '800095, Нижегородская область, Город, Улица, 16, 30',
              region: 'Нижегородская область',
              city: 'Город',
              mainPhone: '70648223962',
              lastLogin: '2019-10-11T17:01:03+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -6513,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1906220102',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 1582.47,
                interests: 310.1,
                fines: 86.55,
                total: 279.12
              },
              delay: 143,
              product: 'pos',
              openedAt: '2020-04-16T15:31:31+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-03-10T19:15:03+03:00',
                  status: 'notSetOrSilence',
                  result: 'withoutClientContact',
                  operator: {
                    id: 289,
                    fullName: 'Левашева Мария',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2020-03-31T23:50:10+03:00',
                  paidAmount: 1700
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -6513
            }
          ]
        },
        {
          id: 12328438,
          fullName: 'Ширроюйч Пгпжхо Дръцунжпфщ',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1980-09-15T00:00:00+03:00',
              homeAddress: '667936, Нижегородская область, Город, Улица, 11А, 80',
              region: 'Нижегородская область',
              city: 'Город',
              mainPhone: '70353634663',
              lastLogin: null,
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -12355,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1907194329',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 2690.78,
                interests: 109.84,
                fines: 0.35,
                total: 0.97
              },
              delay: 206,
              product: 'pos',
              openedAt: '2020-02-06T17:14:53+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-06T17:14:55+03:00',
                  status: 'contactWithClient',
                  result: 'restoreAccessSms',
                  operator: {
                    id: 203,
                    fullName: 'Старцева Виктория',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-10-16T13:46:00+03:00',
                  paidAmount: 700
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -12355
            }
          ]
        },
        {
          id: 11042886,
          fullName: 'Шхексфхн Ошъгрс Ьйвбэкгбяч',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1969-03-09T00:00:00+03:00',
              homeAddress: '574056, Республика Башкортостан, Город, Улица, 2, 99',
              region: 'Республика Башкортостан',
              city: 'Город',
              mainPhone: '70437131055',
              lastLogin: '2019-05-27T17:45:42+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -1748,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '190458395',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 2600.62,
                interests: 154,
                fines: 13,
                total: 4.21
              },
              delay: 220,
              product: 'pos',
              openedAt: '2020-02-09T00:05:50+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-01T13:34:28+03:00',
                  status: 'contactWithClient',
                  result: 'other',
                  operator: {
                    id: 157,
                    fullName: 'Шигина Екатерина',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-10-13T13:41:55+03:00',
                  paidAmount: 2735.4
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -1748
            }
          ]
        },
        {
          id: 10697033,
          fullName: 'Шьдзсрюз Сгфйжй Ъгхддтетлч',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1984-09-24T00:00:00+04:00',
              homeAddress: '665805, Республика Башкортостан, Город, Улица, 19',
              region: 'Республика Башкортостан',
              city: 'Город',
              mainPhone: '70703880838',
              lastLogin: '2019-08-26T10:16:38+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -1279,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '190351709',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 885.16,
                interests: 41.23,
                fines: 0,
                total: 0.39
              },
              delay: 247,
              product: 'pos',
              openedAt: '2020-01-31T08:07:51+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-01-31T08:07:50+03:00',
                  status: 'notSetOrSilence',
                  result: 'withoutClientContact',
                  operator: {
                    id: 125,
                    fullName: 'Малков Алексей',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-09-04T08:03:21+03:00',
                  paidAmount: 926
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -1279
            }
          ]
        },
        {
          id: 11532788,
          fullName: 'Щгвфаяхв Ьлтэжй Ицчоыйявкщ',
          mainProduct: {
            client: {
              timeZone: 4,
              birthDate: '1997-08-18T00:00:00+04:00',
              homeAddress: '340952, Саратовская область, Город, Улица, 5',
              region: 'Саратовская область',
              city: 'Город',
              mainPhone: '70564546166',
              lastLogin: null,
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -9940,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1905172798',
              signingDate: null,
              duration: null,
              amount: 30000,
              debt: {
                principal: 3925.55,
                interests: 133.02,
                fines: 3.92,
                total: 12.94
              },
              delay: 104,
              product: 'pos',
              openedAt: '2020-03-27T15:58:08+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-03-27T15:58:08+03:00',
                  status: 'isDisabled',
                  result: 'withoutClientContact',
                  operator: {
                    id: 53,
                    fullName: 'Андреева Анастасия',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2020-01-29T12:01:38+03:00',
                  paidAmount: 4049.55
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -9940
            }
          ]
        },
        {
          id: 12763824,
          fullName: 'Щыюньфеу Ьиоюхф Цмызоушлус',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1963-01-06T00:00:00+03:00',
              homeAddress: '713692, Республика Башкортостан, Улица, 12',
              region: 'Республика Башкортостан',
              city: null,
              mainPhone: '70111906722',
              lastLogin: '2019-08-15T16:07:44+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -12270,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1908176233',
              signingDate: null,
              duration: null,
              amount: 30000,
              debt: {
                principal: 84.6,
                interests: 26.18,
                fines: 8.32,
                total: 119.1
              },
              delay: 208,
              product: 'pos',
              openedAt: '2020-05-07T07:44:31+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2019-12-28T17:05:42+03:00',
                  status: 'doesNotRespond',
                  result: 'withoutClientContact',
                  operator: {
                    id: 250,
                    fullName: 'Прелов Евгений',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-09-13T23:59:59+03:00',
                  paidAmount: 20
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -12270
            }
          ]
        },
        {
          id: 12025143,
          fullName: 'Ънтфъыъл Оысщек Етопречкуш',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1996-07-27T00:00:00+04:00',
              homeAddress: '066723, Республика Крым, Город, Улица, 9',
              region: 'Республика Крым',
              city: 'Город',
              mainPhone: '70326105298',
              lastLogin: '2020-01-20T17:04:44+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -6594,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1906253816',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 11081.54,
                interests: 2460.63,
                fines: 470.54,
                total: 9349
              },
              delay: 153,
              product: 'pos',
              openedAt: '2020-02-10T17:23:47+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-08T17:37:42+03:00',
                  status: 'isNotAvailable',
                  result: 'withoutClientContact',
                  operator: {
                    id: 85,
                    fullName: 'Цдрннхдо Ббэцмю Ыыжечутйяэ',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2020-04-16T20:09:29+03:00',
                  paidAmount: 4600
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -6594
            }
          ]
        },
        {
          id: 12266647,
          fullName: 'Ъфнсфцтк Жъшапл Лэмыжчыяха',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1981-02-07T00:00:00+03:00',
              homeAddress: '097573, Тульская область, Город, Улица, 81, 99',
              region: 'Тульская область',
              city: 'Город',
              mainPhone: '70620424577',
              lastLogin: '2019-11-06T15:16:05+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -17666,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1907133276',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 9365.41,
                interests: 2166.35,
                fines: 429.57,
                total: 11961.33
              },
              delay: 153,
              product: 'pos',
              openedAt: '2020-02-10T17:29:48+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-10T14:49:05+03:00',
                  status: 'doesNotRespond',
                  result: 'withoutClientContact',
                  operator: {
                    id: 91,
                    fullName: 'Липкина Ксения',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-06T15:11:28+03:00',
                  paidAmount: 2244
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -17666
            }
          ]
        },
        {
          id: 12980613,
          fullName: 'Эзизтулю Смэбдж Ишзфэцогчд',
          mainProduct: {
            client: {
              timeZone: 6,
              birthDate: '1987-01-15T00:00:00+03:00',
              homeAddress: 'Омская область, Новороссийка, Город',
              region: 'Омская область',
              city: 'Город',
              mainPhone: '70087609314',
              lastLogin: '2020-01-03T13:06:42+03:00',
              secretWord: 'Ответ',
              loansCount: 1
            },
            product: {
              id: -17596,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '191026173',
              signingDate: null,
              duration: null,
              amount: 30000,
              debt: {
                principal: 16188.08,
                interests: 3683.68,
                fines: 745.52,
                total: 20600.38
              },
              delay: 152,
              product: 'pos',
              openedAt: '2020-02-10T17:25:28+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-05-08T17:46:05+03:00',
                  status: 'notSetOrSilence',
                  result: 'withoutClientContact',
                  operator: {
                    id: 218,
                    fullName: 'Корнилов Александр',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-17T10:42:51+03:00',
                  paidAmount: 50
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -17596
            }
          ]
        },
        {
          id: 11487684,
          fullName: 'Элъыощъл Лбогдш Гшвюсджэвж',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1991-11-12T00:00:00+02:00',
              homeAddress: '861467, Тюменская область, Город, Улица, 148, 3, 97',
              region: 'Тюменская область',
              city: 'Город',
              mainPhone: '70646945033',
              lastLogin: '2020-01-16T08:13:32+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -3396,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1905127910',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 2122.61,
                interests: 67.69,
                fines: 0.21,
                total: 0.03
              },
              delay: 68,
              product: 'pos',
              openedAt: '2020-03-12T18:15:36+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-01-16T12:51:04+03:00',
                  status: 'contactWithClient',
                  result: 'clientPaid',
                  operator: {
                    id: 70,
                    fullName: 'Антонова Елена',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-12-22T14:40:37+03:00',
                  paidAmount: 10
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -3396
            }
          ]
        },
        {
          id: 11145483,
          fullName: 'Эцючньдж Лцоапщ Дщдгээюыюх',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1968-06-22T00:00:00+03:00',
              homeAddress: '725374, Нижегородская область, Город, Улица, 42, 49',
              region: 'Нижегородская область',
              city: 'Город',
              mainPhone: '70808419406',
              lastLogin: '2019-07-04T16:55:35+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -7918,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1904141748',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 1373.61,
                interests: 247.42,
                fines: 70.75,
                total: 241.78
              },
              delay: 249,
              product: 'pos',
              openedAt: '2020-02-06T17:20:22+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-09T17:59:55+03:00',
                  status: 'contactWithClient',
                  result: 'failureToInteract',
                  operator: {
                    id: 132,
                    fullName: 'Зиновьева Любовь',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-11-29T16:52:07+03:00',
                  paidAmount: 1450
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -7918
            }
          ]
        },
        {
          id: 7516983,
          fullName: 'Юузигелг Стпруу Этэфюыэьчд',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1976-12-21T00:00:00+03:00',
              homeAddress: '016522, Краснодарский край, Город, Улица, 4',
              region: 'Краснодарский край',
              city: 'Город',
              mainPhone: '70575333258',
              lastLogin: '2020-04-21T10:37:03+03:00',
              secretWord: 'Ответ',
              loansCount: 2
            },
            product: {
              id: -15,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1804255499',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 1910.1,
                interests: 64.29,
                fines: 3.83,
                total: 0.36
              },
              delay: 64,
              product: 'pos',
              openedAt: '2020-04-09T19:03:26+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-04-09T19:03:02+03:00',
                  status: 'doesNotRespond',
                  result: 'withoutClientContact',
                  operator: {
                    id: 140,
                    fullName: 'Гурченкова Юлия',
                    department: {
                      id: 163,
                      name: 'Отдел взыскания'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2020-02-16T09:25:01+03:00',
                  paidAmount: 10
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -15
            }
          ]
        },
        {
          id: 9121383,
          fullName: 'Юьнюггме Этффза Жршйншифкп',
          mainProduct: {
            client: {
              timeZone: 3,
              birthDate: '1996-01-18T00:00:00+03:00',
              homeAddress: '862379, Ростовская область, Город, Улица, 79',
              region: 'Ростовская область',
              city: 'Город',
              mainPhone: '70498660285',
              lastLogin: '2019-11-29T01:45:05+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -17750,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1810266662',
              signingDate: null,
              duration: null,
              amount: 15000,
              debt: {
                principal: 11126.43,
                interests: 2111.1,
                fines: 542.59,
                total: 13773.73
              },
              delay: 156,
              product: 'pos',
              openedAt: '2020-02-10T17:29:04+03:00',
              promise: null,
              lastResults: {
                communication: null,
                promise: null,
                payment: {
                  paidAt: '2019-11-29T00:59:50+03:00',
                  paidAmount: 60
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -17750
            }
          ]
        },
        {
          id: 10198982,
          fullName: 'Ядълщойв Ъфчыыр Вхрыюкгъир',
          mainProduct: {
            client: {
              timeZone: 5,
              birthDate: '1998-01-14T00:00:00+03:00',
              homeAddress: '055945, Республика Башкортостан, Город, Улица, 5',
              region: 'Республика Башкортостан',
              city: 'Город',
              mainPhone: '70814882890',
              lastLogin: '2019-10-11T16:42:52+03:00',
              secretWord: 'Ответ',
              loansCount: 0
            },
            product: {
              id: -8262,
              group: {
                id: 68,
                name: 'Хард0'
              },
              contract: '1901101449',
              signingDate: null,
              duration: null,
              amount: 30000,
              debt: {
                principal: 7263.27,
                interests: 1814.85,
                fines: 509.02,
                total: 9587.14
              },
              delay: 153,
              product: 'pos',
              openedAt: '2020-02-10T17:25:57+03:00',
              promise: null,
              lastResults: {
                communication: {
                  contactedAt: '2020-02-10T17:54:35+03:00',
                  status: 'isNotAvailable',
                  result: 'withoutClientContact',
                  operator: {
                    id: 333,
                    fullName: 'Петракова Юлия',
                    department: {
                      id: 158,
                      name: 'Отдел финансового консультирования'
                    }
                  }
                },
                promise: null,
                payment: {
                  paidAt: '2019-10-11T16:45:19+03:00',
                  paidAmount: 8448.65
                },
                agreement: null
              },
              assignee: {
                id: 266,
                fullName: 'Test Hard',
                department: {
                  id: 161,
                  name: 'Отдел взыскания'
                },
                position: 'Специалист отдела взыскания'
              }
            }
          },
          products: [
            {
              id: -8262
            }
          ]
        }
      ]
    }
  }
}

export const getPayments = async (payload) => {
  return {
    data: {
      clientId: 11840223,
      login: '190679010',
      payments: [
        {
          id: 102503787,
          productId: 5475393,
          contract: '190679010',
          paidAt: '2019-08-11T13:49:54+03:00',
          amount: 6000,
          paymentSystem: 'qiwipay',
          agreementId: null,
          dealId: null
        },
        {
          id: 102534469,
          productId: 5497760,
          contract: '190679010/2',
          paidAt: '2019-08-20T08:50:01+03:00',
          amount: 6420,
          paymentSystem: 'tkb',
          agreementId: null,
          dealId: null
        },
        {
          id: 1025824002019,
          productId: 5529675,
          contract: '190679010/3',
          paidAt: '2019-09-04T18:36:19+03:00',
          amount: 11500,
          paymentSystem: 'qiwipay',
          agreementId: null,
          dealId: null
        },
        {
          id: 1026722182019,
          productId: 5594642,
          contract: '190679010/4',
          paidAt: '2019-10-01T14:29:38+03:00',
          amount: 19050,
          paymentSystem: 'qiwipay',
          agreementId: null,
          dealId: null
        },
        {
          id: 1027736152019,
          productId: 5709858,
          contract: '190679010/5',
          paidAt: '2019-10-31T08:10:44+03:00',
          amount: 6200,
          paymentSystem: 'qiwipay',
          agreementId: 1151639,
          dealId: null
        },
        {
          id: 1027836282019,
          productId: 5709858,
          contract: '190679010/5',
          paidAt: '2019-11-03T09:51:54+03:00',
          amount: 20188,
          paymentSystem: 'qiwipay',
          agreementId: 1151639,
          dealId: null
        },
        {
          id: 1029160602019,
          productId: 5861481,
          contract: '190679010/6',
          paidAt: '2019-12-10T14:07:27+03:00',
          amount: 7200,
          paymentSystem: 'qiwipay',
          agreementId: 1208198,
          dealId: null
        },
        {
          id: 1029978842019,
          productId: 5861481,
          contract: '190679010/6',
          paidAt: '2019-12-30T07:55:26+03:00',
          amount: 4000,
          paymentSystem: 'qiwipay',
          agreementId: 1238376,
          dealId: null
        }
      ]
    }
  }
}
