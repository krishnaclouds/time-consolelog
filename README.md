## Time-ConsoleLog
#### Console Log your message along with Time Stamp

---
## Installation

```bash
npm install --save time-consolelog
```
---
## Usage 

```js
const log = require('time-consolelog');
```

```js
log(String message , String Pattern);
```
---
###### If You want to log without any time/Date, set Pattern to false
---

```js
log('Test Message' , false);
// Test Message
```
---
```js
log('Test Message');
// When no Pattern is Provided - Default Time Stamp is used
// [15:47:28] Test Message
```
---
```js
log('Test Message' , 'YYYYMMDD');
// [2070514] Test Message
```
---

```js
log('Test Message','YYYY/MM/DD:mm:ss');
// [2017/05/04:30:10] Test Message
```

```js
log('Test Message','YYYY:MM:DD');
// [20170514] Test Message
```

```js
log('Test Message','[YYYY:MM:DD]');
// [017:0:14] Test Message
```

```js
log('Test Message','YYYY/MM/DD');
// [2017/05/14] Test Message
```

```js
log('Test Message','YYYY:MM');
// [2017:05] Test Message
```

```js
log('Test Message','YYYY');
// [2017] Test Message
```

```js
log('Test Message','MM');
// [05] Test Message
```

```js
log('Test Message','DD');
// [14] Test Message
```

```js
log('Test Message','HH');
// [21] Test message
```

```js
log('Test Message','mm');
// [30] Test Message
```

```js
log('Test Message','ss');
// [10] Test Message
```

```js
log('Test Message','ms'); </code>
// [365] Test Message
```
---

##### Please report issues in the Git. Any Contributions are welcome. Just do the usual Pull -> commit -> push dance.  

```
P.S : This is my maiden NPM project. So any feedback is appreciated.
``` 
