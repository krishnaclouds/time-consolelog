# Time-ConsoleLog

Console Log your message along with Time Stamp.

## Installation

```bash
npm install --save time-consolelog
```

## Usage

```js
const log = require('time-consolelog');
```

```js
log(String message, String Pattern);
```

### Without Date and Time

```js
log('Test Message', false);
// Test Message
```

### Default - Timestamp Format: [HH:mm:ss]

```js
log('Test Message');
// When no Pattern is Provided - Default Time Stamp is used
// [15:47:28] Test Message
```

### Timestamp Format: [YYYYMMDD]

```js
log('Test Message', 'YYYYMMDD');
// [2070514] Test Message
```

### Timestamp Format: [YYYY/MM/DD:HH:mm:ss]

```js
log('Test Message', 'YYYY/MM/DD:HH:mm:ss');
// [2017/05/04:30:10] Test Message
```

### Timestamp Format: [YYYY:MM:DD]

```js
log('Test Message', 'YYYY:MM:DD');
// [20170514] Test Message
```

### Timestamp Format: [YYYY/MM/DD]

```js
log('Test Message', 'YYYY/MM/DD');
// [2017/05/14] Test Message
```

### Timestamp Format: [YYYY:MM]

```js
log('Test Message', 'YYYY:MM');
// [2017:05] Test Message
```

### Timestamp Format: [YYYY]

```js
log('Test Message', 'YYYY');
// [2017] Test Message
```

### Timestamp Format: [MM]

```js
log('Test Message', 'MM');
// [05] Test Message
```

### Timestamp Format: [DD]

```js
log('Test Message', 'DD');
// [14] Test Message
```

### Timestamp Format: [HH]

```js
log('Test Message', 'HH');
// [21] Test message
```

### Timestamp Format: [mm]

```js
log('Test Message', 'mm');
// [30] Test Message
```

### Timestamp Format: [ss]

```js
log('Test Message', 'ss');
// [10] Test Message
```

### Timestamp Format: [ms]

```js
log('Test Message', 'ms');
// [365] Test Message
```

Please report issues in the Git.
Any Contributions are welcome.
Just do the usual Pull -> Commit -> Push. Dance.

*P.S : This is my maiden NPM project, so any feedback is appreciated.*