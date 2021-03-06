// 数据意义：开盘(open)，收盘(close)，最低(lowest), 最高(highest)
var data = [
  {
    'categoryData': '2016/7/12',
    'updown': '-9.8',
    'updownratio': '-0.30',
    'series': [
      3185,
      3262.6,
      3182.2,
      3276.6
    ],
    'volume': '7031.32'
  },
  {
    'categoryData': '2016/7/11',
    'updown': '-86.0',
    'updownratio': '-2.64',
    'series': [
      3182,
      3176.6,
      3175,
      3227.8
    ],
    'volume': '2564.49'
  },
  {
    'categoryData': '2016/7/8',
    'updown': '-5.2',
    'updownratio': '-0.16',
    'series': [
      3177,
      3171.4,
      3163.6,
      3187.8
    ],
    'volume': '5430.48'
  },
  {
    'categoryData': '2016/7/7',
    'updown': '14.2',
    'updownratio': '0.45',
    'series': [
      3186.2,
      3185.6,
      3161.2,
      3192.8
    ],
    'volume': '3553.72'
  },
  {
    'categoryData': '2016/7/6',
    'updown': '-1.4',
    'updownratio': '-0.04',
    'series': [
      3165.6,
      3184.2,
      3148,
      3187
    ],
    'volume': '6825.21'
  },
  {
    'categoryData': '2016/7/5',
    'updown': '-11.4',
    'updownratio': '-0.36',
    'series': [
      3166.6,
      3172.8,
      3160.2,
      3184.8
    ],
    'volume': '5459.98'
  },
  {
    'categoryData': '2016/7/4',
    'updown': '-2.8',
    'updownratio': '-0.09',
    'series': [
      3095.6,
      3170,
      3095,
      3183
    ],
    'volume': '4800.49'
  },
  {
    'categoryData': '2016/7/1',
    'updown': '-69',
    'updownratio': '-2.18',
    'series': [
      3118.8,
      3101,
      3100,
      3133.8
    ],
    'volume': '9212.35'
  },
  {
    'categoryData': '2016/6/30',
    'updown': '10.2',
    'updownratio': '0.33',
    'series': [
      3110.8,
      3111.2,
      3107.2,
      3124.4
    ],
    'volume': '2012.20'
  },
  {
    'categoryData': '2016/6/29',
    'updown': '-0.2',
    'updownratio': '-0.01',
    'series': [
      3100,
      3111,
      3091,
      3120
    ],
    'volume': '1935.02'
  },
  {
    'categoryData': '2016/6/28',
    'updown': '-17',
    'updownratio': '-0.55',
    'series': [
      3070,
      3094,
      3048.8,
      3098.2
    ],
    'volume': '9845.54'
  },
  {
    'categoryData': '2016/6/27',
    'updown': '-16',
    'updownratio': '-0.52',
    'series': [
      3015.2,
      3078,
      3015.2,
      3079.4
    ],
    'volume': '9842.39'
  },
  {
    'categoryData': '2016/6/24',
    'updown': '-64.8',
    'updownratio': '-2.11',
    'series': [
      3057.2,
      3013.2,
      2971,
      3086.6
    ],
    'volume': '5722.11'
  },
  {
    'categoryData': '2016/6/23',
    'updown': '48.4',
    'updownratio': '1.61',
    'series': [
      3076,
      3061.6,
      3040,
      3081
    ],
    'volume': '9134.85'
  },
  {
    'categoryData': '2016/6/22',
    'updown': '14.4',
    'updownratio': '0.47',
    'series': [
      3030.4,
      3076,
      3030.2,
      3076
    ],
    'volume': '9376.09'
  },
  {
    'categoryData': '2016/6/21',
    'updown': '-38.2',
    'updownratio': '-1.24',
    'series': [
      3061,
      3037.8,
      3027.6,
      3109.6
    ],
    'volume': '2807.70'
  },
  {
    'categoryData': '2016/6/20',
    'updown': '11.4',
    'updownratio': '0.38',
    'series': [
      3055,
      3049.2,
      3015.8,
      3061.6
    ],
    'volume': '3385.44'
  },
  {
    'categoryData': '2016/6/17',
    'updown': '64.2',
    'updownratio': '2.11',
    'series': [
      3099.8,
      3113.4,
      3097.6,
      3128.8
    ],
    'volume': '980.07'
  },
  {
    'categoryData': '2016/6/16',
    'updown': '-25.4',
    'updownratio': '-0.82',
    'series': [
      3097,
      3088,
      3078.2,
      3103.6
    ],
    'volume': '7104.49'
  },
  {
    'categoryData': '2016/6/15',
    'updown': '12',
    'updownratio': '0.39',
    'series': [
      3026.6,
      3100,
      3021,
      3127.2
    ],
    'volume': '3044.73'
  },
  {
    'categoryData': '2016/6/14',
    'updown': '-49.6',
    'updownratio': '-1.60',
    'series': [
      3038.2,
      3050.4,
      3034.2,
      3069.2
    ],
    'volume': '3819.31'
  },
  {
    'categoryData': '2016/6/13',
    'updown': '-21.6',
    'updownratio': '-0.71',
    'series': [
      3119,
      3028.8,
      3027,
      3131.8
    ],
    'volume': '661.95'
  },
  {
    'categoryData': '2016/6/8',
    'updown': '119.2',
    'updownratio': '3.94',
    'series': [
      3158,
      3148,
      3131.2,
      3160
    ],
    'volume': '1749.78'
  },
  {
    'categoryData': '2016/6/7',
    'updown': '12',
    'updownratio': '0.38',
    'series': [
      3164,
      3160,
      3151.8,
      3169
    ],
    'volume': '896.96'
  },
  {
    'categoryData': '2016/6/6',
    'updown': '-2.6',
    'updownratio': '-0.08',
    'series': [
      3182.4,
      3157.4,
      3150,
      3193.2
    ],
    'volume': '1291.93'
  },
  {
    'categoryData': '2016/6/3',
    'updown': '20.0',
    'updownratio': '0.63',
    'series': [
      3144.2,
      3177.4,
      3132.6,
      3183
    ],
    'volume': '8485.11'
  },
  {
    'categoryData': '2016/6/2',
    'updown': '-42.0',
    'updownratio': '-1.32',
    'series': [
      3132.2,
      3135.4,
      3125,
      3146
    ],
    'volume': '8364.72'
  },
  {
    'categoryData': '2016/6/1',
    'updown': '-3.6',
    'updownratio': '-0.11',
    'series': [
      3150.2,
      3131.8,
      3131.8,
      3161.4
    ],
    'volume': '4344.29'
  },
  {
    'categoryData': '2016/5/31',
    'updown': '27.0',
    'updownratio': '0.86',
    'series': [
      3046.2,
      3158.8,
      2732.4,
      3158.8
    ],
    'volume': '856.04'
  },
  {
    'categoryData': '2016/5/30',
    'updown': '-122.2',
    'updownratio': '-3.87',
    'series': [
      3028,
      3036.6,
      2992.8,
      3053.6
    ],
    'volume': '4453.84'
  },
  {
    'categoryData': '2016/5/27',
    'updown': '-3.0',
    'updownratio': '-0.10',
    'series': [
      3027.8,
      3033.6,
      3014.2,
      3039.8
    ],
    'volume': '7943.29'
  },
  {
    'categoryData': '2016/5/26',
    'updown': '-7.6',
    'updownratio': '-0.25',
    'series': [
      3024,
      3026,
      2988,
      3046
    ],
    'volume': '7197.75'
  },
  {
    'categoryData': '2016/5/25',
    'updown': '-4.4',
    'updownratio': '-0.15',
    'series': [
      3053.6,
      3021.6,
      3015.2,
      3059
    ],
    'volume': '7221.08'
  },
  {
    'categoryData': '2016/5/20',
    'updown': '7.0',
    'updownratio': '0.23',
    'series': [
      3050,
      3028.6,
      3010,
      3070.4
    ],
    'volume': '8381.43'
  },
  {
    'categoryData': '2016/5/19',
    'updown': '27.6',
    'updownratio': '0.91',
    'series': [
      3060,
      3056.2,
      3050.8,
      3087.8
    ],
    'volume': '6360.36'
  },
  {
    'categoryData': '2016/5/18',
    'updown': '2.4',
    'updownratio': '0.08',
    'series': [
      3065.8,
      3058.6,
      3027,
      3075
    ],
    'volume': '9733.42'
  },
  {
    'categoryData': '2016/5/17',
    'updown': '22.8',
    'updownratio': '0.75',
    'series': [
      3082.4,
      3081.4,
      3061,
      3099
    ],
    'volume': '1199.36'
  },
  {
    'categoryData': '2016/5/16',
    'updown': '1.0',
    'updownratio': '0.03',
    'series': [
      3062.4,
      3082.4,
      3033,
      3087.8
    ],
    'volume': '5717.47'
  },
  {
    'categoryData': '2016/5/13',
    'updown': '-14.4',
    'updownratio': '-0.47',
    'series': [
      3056,
      3068,
      3051.8,
      3094.4
    ],
    'volume': '5652.15'
  },
  {
    'categoryData': '2016/5/12',
    'updown': '-1.4',
    'updownratio': '-0.05',
    'series': [
      3038,
      3066.6,
      3014.8,
      3079
    ],
    'volume': '8156.54'
  },
  {
    'categoryData': '2016/5/11',
    'updown': '-14.2',
    'updownratio': '-0.46',
    'series': [
      3055.4,
      3052.4,
      3038,
      3081.8
    ],
    'volume': '1566.14'
  },
  {
    'categoryData': '2016/5/10',
    'updown': '-17.2',
    'updownratio': '-0.56',
    'series': [
      3023,
      3035.2,
      3023,
      3063.8
    ],
    'volume': '8335.24'
  },
  {
    'categoryData': '2016/5/9',
    'updown': '-13.2',
    'updownratio': '-0.43',
    'series': [
      3054,
      3022,
      3022,
      3085
    ],
    'volume': '5261.78'
  },
  {
    'categoryData': '2016/5/6',
    'updown': '66.4',
    'updownratio': '2.20',
    'series': [
      3194.4,
      3088.4,
      3088.4,
      3194.4
    ],
    'volume': '7482.88'
  },
  {
    'categoryData': '2016/5/5',
    'updown': '104.2',
    'updownratio': '3.37',
    'series': [
      3182.8,
      3192.6,
      3169,
      3192.8
    ],
    'volume': '2381.52'
  },
  {
    'categoryData': '2016/5/4',
    'updown': '-4.4',
    'updownratio': '-0.14',
    'series': [
      3187,
      3188.2,
      3167.2,
      3198
    ],
    'volume': '1279.42'
  },
  {
    'categoryData': '2016/5/3',
    'updown': '11.8',
    'updownratio': '0.37',
    'series': [
      3131,
      3200,
      3110.8,
      3204.6
    ],
    'volume': '7967.37'
  },
  {
    'categoryData': '2016/4/29',
    'updown': '-72',
    'updownratio': '-2.25',
    'series': [
      3111,
      3128,
      3110.4,
      3145.4
    ],
    'volume': '7188.64'
  },
  {
    'categoryData': '2016/4/28',
    'updown': '-6.8',
    'updownratio': '-0.22',
    'series': [
      3140,
      3121.2,
      3097,
      3141
    ],
    'volume': '7176.59'
  },
  {
    'categoryData': '2016/4/27',
    'updown': '4.6',
    'updownratio': '0.15',
    'series': [
      3148.2,
      3125.8,
      3117,
      3153
    ],
    'volume': '3310.35'
  },
  {
    'categoryData': '2016/4/26',
    'updown': '17.2',
    'updownratio': '0.55',
    'series': [
      3130.2,
      3143,
      3105.2,
      3157.4
    ],
    'volume': '2992.45'
  },
  {
    'categoryData': '2016/4/25',
    'updown': '-15.4',
    'updownratio': '-0.49',
    'series': [
      3125,
      3127.6,
      3083,
      3134.4
    ],
    'volume': '4146.53'
  },
  {
    'categoryData': '2016/4/22',
    'updown': '13.6',
    'updownratio': '0.43',
    'series': [
      3102,
      3141.2,
      3098.4,
      3147
    ],
    'volume': '9812.57'
  },
  {
    'categoryData': '2016/4/21',
    'updown': '-26.2',
    'updownratio': '-0.83',
    'series': [
      3110,
      3115,
      3103.6,
      3169.4
    ],
    'volume': '7130.68'
  },
  {
    'categoryData': '2016/4/20',
    'updown': '-0.2',
    'updownratio': '-0.01',
    'series': [
      3206,
      3114.8,
      3072.2,
      3217
    ],
    'volume': '2349.81'
  },
  {
    'categoryData': '2016/4/19',
    'updown': '77.8',
    'updownratio': '2.50',
    'series': [
      3226.6,
      3192.6,
      3175.2,
      3229
    ],
    'volume': '5029.48'
  },
  {
    'categoryData': '2016/4/18',
    'updown': '-1.0',
    'updownratio': '-0.03',
    'series': [
      3219.8,
      3191.6,
      3171.4,
      3220.8
    ],
    'volume': '3360.46'
  },
  {
    'categoryData': '2016/4/15',
    'updown': '78.6',
    'updownratio': '2.46',
    'series': [
      3270,
      3270.2,
      3258.2,
      3279.4
    ],
    'volume': '73.68'
  },
  {
    'categoryData': '2016/4/14',
    'updown': '-1.0',
    'updownratio': '-0.03',
    'series': [
      3271,
      3269.2,
      3252,
      3284.6
    ],
    'volume': '6174.51'
  },
  {
    'categoryData': '2016/4/13',
    'updown': '-17.6',
    'updownratio': '-0.54',
    'series': [
      3245,
      3251.6,
      3242.4,
      3306.6
    ],
    'volume': '2361.10'
  },
  {
    'categoryData': '2016/4/12',
    'updown': '-36.2',
    'updownratio': '-1.11',
    'series': [
      3210,
      3215.4,
      3190,
      3222
    ],
    'volume': '2078.87'
  },
  {
    'categoryData': '2016/4/11',
    'updown': '-1.6',
    'updownratio': '-0.05',
    'series': [
      3207,
      3213.8,
      3205,
      3255
    ],
    'volume': '685.98'
  },
  {
    'categoryData': '2016/4/8',
    'updown': '-33.8',
    'updownratio': '-1.05',
    'series': [
      3192,
      3180,
      3145.6,
      3192.6
    ],
    'volume': '1134.46'
  },
  {
    'categoryData': '2016/4/7',
    'updown': '22.8',
    'updownratio': '0.72',
    'series': [
      3257.2,
      3202.8,
      3195,
      3262.4
    ],
    'volume': '341.02'
  },
  {
    'categoryData': '2016/4/6',
    'updown': '36.6',
    'updownratio': '1.14',
    'series': [
      3227.8,
      3239.4,
      3222.2,
      3244.4
    ],
    'volume': '5980.46'
  },
  {
    'categoryData': '2016/4/5',
    'updown': '-3.2',
    'updownratio': '-0.10',
    'series': [
      3190.2,
      3236.2,
      3180.8,
      3286.6
    ],
    'volume': '6467.13'
  },
  {
    'categoryData': '2016/4/1',
    'updown': '-29.6',
    'updownratio': '-0.91',
    'series': [
      3185.2,
      3206.6,
      3123.6,
      3210
    ],
    'volume': '46.10'
  },
  {
    'categoryData': '2016/3/31',
    'updown': '-15.6',
    'updownratio': '-0.49',
    'series': [
      3203.4,
      3191,
      3172.8,
      3208.6
    ],
    'volume': '1416.92'
  },
  {
    'categoryData': '2016/3/30',
    'updown': '-1',
    'updownratio': '-0.03',
    'series': [
      3142.8,
      3190,
      3131,
      3197.6
    ],
    'volume': '9919.30'
  },
  {
    'categoryData': '2016/3/29',
    'updown': '-86',
    'updownratio': '-2.70',
    'series': [
      3136.2,
      3104,
      3082,
      3149.6
    ],
    'volume': '8562.19'
  },
  {
    'categoryData': '2016/3/28',
    'updown': '25.8',
    'updownratio': '0.83',
    'series': [
      3175.2,
      3129.8,
      3120,
      3216.8
    ],
    'volume': '6003.17'
  },
  {
    'categoryData': '2016/3/25',
    'updown': '33.0',
    'updownratio': '1.05',
    'series': [
      3150,
      3162.8,
      3143.4,
      3178
    ],
    'volume': '1745.05'
  },
  {
    'categoryData': '2016/3/24',
    'updown': '-18.0',
    'updownratio': '-0.57',
    'series': [
      3170,
      3144.8,
      3130.2,
      3186
    ],
    'volume': '1624.22'
  },
  {
    'categoryData': '2016/3/23',
    'updown': '51.2',
    'updownratio': '1.63',
    'series': [
      3205,
      3196,
      3166,
      3226.8
    ],
    'volume': '2263.59'
  },
  {
    'categoryData': '2016/3/22',
    'updown': '-1.4',
    'updownratio': '-0.04',
    'series': [
      3195,
      3194.6,
      3187,
      3220
    ],
    'volume': '7506.47'
  },
  {
    'categoryData': '2016/3/21',
    'updown': '15.6',
    'updownratio': '0.49',
    'series': [
      3161,
      3210.2,
      3161,
      3245
    ],
    'volume': '7913.07'
  },
  {
    'categoryData': '2016/3/18',
    'updown': '-33.4',
    'updownratio': '-1.04',
    'series': [
      3131.2,
      3176.8,
      3131.2,
      3196.8
    ],
    'volume': '1144.74'
  },
  {
    'categoryData': '2016/3/17',
    'updown': '-53.8',
    'updownratio': '-1.69',
    'series': [
      3099,
      3123,
      3071,
      3160.6
    ],
    'volume': '2028.38'
  },
  {
    'categoryData': '2016/3/16',
    'updown': '-61',
    'updownratio': '-1.95',
    'series': [
      3070,
      3062,
      3043,
      3096.8
    ],
    'volume': '5883.38'
  }
];

module.exports = data
