// first you have to generate private and public key using following commands
// openssl genrsa -out rsa_1024_priv.pem 1024        //generate private key
//cat rsa_1024_priv.pem    //see private key
//openssl rsa -pubout -in rsa_1024_priv.pem -out rsa_1024_pub.pem // generate public key
// cat rsa_1024_pub.pem     // see public key


const JSEncrypt = require('node-jsencrypt');
//cnd browser side script
//<script src= '//cdnjs.cloudflare.com/ajax/libs/jsencrypt/2.3.1/jsencrypt.js'></script>

var pub=`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0z1M6GeZxwIrpDChh1sa
ll69Yj9XGCP7EYidwAoCsoeLPoDssMAy2Lcv5WpOF6keFtf2RTXZaiqgOadba3gH
JDnvJkZorNB0T51f2aQ4r2GO73RTK57VHL+fGK4cAhJG+3YrLYFG2iKKZ+KUJbJo
+C5LBrrz0uZ9HbSWPAhEH/692Z2cUyv39Nzuzct2mrPVro5rVsEQ9qGv49B0h5W2
9iKJ9tU7Ev/jjpb6uhR6HTHPPqSfIL+OZDB5nRIShxLQbXXLI4i7zSZmQ+EA5XyZ
8CMcyEDOvA9ywV8LpoBRxPWYT1qvvhTQwAMlmJZcT3kdG6tuGjRwPhlwreJb3GXe
mQIDAQAB
-----END PUBLIC KEY-----`;

var crypt = new JSEncrypt();
crypt.setKey(pub);
var enc = crypt.encrypt('abc harshal xyz');
console.log("encrpt",enc);

var pri=`MIIEowIBAAKCAQEA0z1M6GeZxwIrpDChh1sall69Yj9XGCP7EYidwAoCsoeLPoDs
sMAy2Lcv5WpOF6keFtf2RTXZaiqgOadba3gHJDnvJkZorNB0T51f2aQ4r2GO73RT
K57VHL+fGK4cAhJG+3YrLYFG2iKKZ+KUJbJo+C5LBrrz0uZ9HbSWPAhEH/692Z2c
Uyv39Nzuzct2mrPVro5rVsEQ9qGv49B0h5W29iKJ9tU7Ev/jjpb6uhR6HTHPPqSf
IL+OZDB5nRIShxLQbXXLI4i7zSZmQ+EA5XyZ8CMcyEDOvA9ywV8LpoBRxPWYT1qv
vhTQwAMlmJZcT3kdG6tuGjRwPhlwreJb3GXemQIDAQABAoIBABUaM5un9dnGort1
TD2sYTySXFL7RuUXexZmUnQDy/8vwT5OPNbvbGTv7+34L7L3ZxUbH/QMDBsqBPWd
fWmABR6eVwC42e4hqOznKNMiL7N9iHztXv2lkV6c2fTqN8wRLVwjku6p0n0qJC96
mBgn+YqJfV8/v+nasrcL+lIm9T9I0gvXl1oLUvGrrArDj9LMw0AsgVDiOZeX5REj
ylCFakrsvfZHEMu6sGeITdEYYJEKbz3kkaFeTSbVPwnT0b48pChsBPyfBxQb7dh1
UdV/rufvbqUBFxup107BQLs2pgyDTPFLHg7ySpbIAiAIbOL2WUEnXJs6AKPBFFsV
Ud1rGDECgYEA8Dlfws7JH9XThxdyF5XLSotTxVvdNwFoxcYHNgl+HAWSxS1Z9te6
K3LtmSnjVBqr0jBUL6rDEWg0mWlPZ64RlaMRVTmCeEi/14gz10wHfToCJuqU9iQc
6esO4oST93SCJPvf2+2fHc5U526jS5aLF7tOWJWCxVUfcU9Hs55wR1UCgYEA4Ryj
i8v+jGGQZWNj8d8m8riRl39EkiKFuVDb1r461+Lf5JN7EXI7CgSQV52irKkO6YgB
s+5ELkRYjWGr7UeR5CNro61qflw0Hi7JL+bl575JrpDstjGKpFdx2PSW3aayMPJt
NMjSO3IlY9E+sQZhowP7Gqgit2Sgrz5Rk+tWsjUCgYBEbVNlvll0BAiY9oi9RyH9
PerC0QQWYwRhMaNkNRgDC2NfXye9NH4HWllrw47Jqj8/RBz25wFht/kjqefAdMj1
gtmxGQydDrv2vQlnTnTjqt5qD3AXHPpPd3Fp/LHZTwqzVjvR/cHRT7DHq7BAG8XL
IMOUYCI7659lO1wFQiBhcQKBgGSCEe9f9FYfVYY/OyeJ9+zVRYP7udT5fvU/yff2
VXWAgXCf/InMk9mkMgI8ip5GmTbhl8kLb/usXlE5s7ashtHykqOw0OR8LHTxdLhj
gnDXADTl1hp+wiUgOd+hTR7Hx7Wc9+9iXqNWEqWfjjsh20Qaienb+iwhzLCRxYCi
ycGlAoGBAIsbEqmYuxVjdCYOzdrKmAfYg70rQwSVnlnyghrl4GRRYVoDPZDYrZXR
8m4QTg/ZKNSwAgzYgNtTcYs4aJOc8aPY1ceuQxag7LKK82iw+MbiwbYmZmxLEiwp
82bJ7U3eDR+L4gh/we4Gyzj/tromnoDRehPaf5FkjSSRnnxekqy1`

crypt.setKey(pri);
var text=crypt.decrypt(enc);
console.log("decode",text);