const crypto = require('crypto');

function md5Hash(input) {
    const md5 = crypto.createHash('md5');
    md5.update(input);
    return md5.digest('hex');
}
console.log(md5Hash("tenantPass"));