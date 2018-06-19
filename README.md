## Testing Rust FFI with Node.js

Run:
```
make
```

Fetches [checkip.amazonaws.com](checkip.amazonaws.com), sends it as byte buffer
to Rust function `testing_array`. It converts it to string back, prints, sums
byte values and returns.
