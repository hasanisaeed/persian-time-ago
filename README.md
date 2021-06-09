## persian-time-ago 
This package used to format datetime with *** time ago statement. eg: '3 ساعت قبل'.

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/realsaeedhassani/persian-time-ago/blob/main/LICENSE)

## Installation

```npm i persian-time-ago```
or
```yarn add persian-time-ago```

## Usage

> Suppose the current time is equal to `1400-03-17 18:00:00`

```js
import datetime  from  'persian-time-ago'

console.log(datetime('1400-03-17 17:59:59'))

// Previous
datetime('1400-03-17 17:59:59') // 1 ثانیه قبل
datetime('1400-03-17 17:55:00') // 5 دقیقه قبل
datetime('1400-03-17 17:00:00') // 1 ساعت قبل
datetime('1400-03-16 18:00:00') // 1 روز  قبل
datetime('1400-02-17 18:00:00') // حدود 1 ماه  قبل
datetime('1399-03-17 18:00:00') // حدود 1 سال  قبل

// Now
datetime('1400-03-17 18:00:00') // اکنون

// Next
datetime('1400-03-17 18:00:01') // 1 ثانیه بعد
datetime('1400-03-17 18:05:00') // 5 دقیقه بعد
datetime('1400-03-17 19:00:00') // 1 ساعت بعد
datetime('1400-03-18 18:00:00') // 1 روز  بعد
datetime('1400-04-17 18:00:00') // حدود 1 ماه  بعد
datetime('1401-03-17 18:00:00') // حدود 1 سال  بعد
```
