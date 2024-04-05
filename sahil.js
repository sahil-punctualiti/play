let a = "94fc5636545a2e7a44e196181fb35bb51e311e7c26ca4f6bf5d2d86f4b8821506425fdb60c5686caf2084db2a4a81f4f0084392d75d38d58fa6b634dc79105e48a7e0c8e5fe60da12f4a70618510c74bdd2dd7b30af5e2dc72fd651fc428b03f6228eb5a27e84716aca994da39604bc3c08ad5737b9f738065978a7ef191a63556ff26be4a89a524e02864d5a7392dcba4c19611302b56ecf7268df104844c47b264dd354b75e734f5a6994f07e554698df82098b8cc85da4ef78282fb6d565fbf6f1908e2a47ae8e3dd0cc664f9b5552f7b9b29c1bbc6f7fe682c6d1c87c512cdd43f2f8f154940e64ff3905903891885d9f10fc685fcef44ac9fcd3240f120ed4802e29fc9b21d9805ca85032645340f5d9e7364129b541ff1dda65b1d4f8a19d52c9111bb429f1dbc4c427567a2b1b6b7d93765af13fdf70a7bdfe8cd3a5b3941cc571f832250fcb0618e240ce0e370132a85b95a01aa1f32b7471e677485cfeedb6a0c9b06707f4fe80dce20dd0b19c5c72af176a6ba918d13903140a32c591b21757dfb2b56ba1ddd3783407a7507525eaaf3a0c87699a23daa899b07a9"

var crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const password = 'ezkvzezkvzezkvz1';
let key = crypto.createHash('sha256').update(String(password)).digest('base64').substr(0, 32);
const ivToken = 'avtkarhavtkarh12';

var encryptor = {
    encrypt: function (text) {

        try {

            var cipher = crypto.createCipheriv(algorithm, key, ivToken);
            var crypted = cipher.update(text, 'utf8', 'hex');
            crypted += cipher.final('hex');
            return crypted;

        } catch (e) {

            return null;
        }

    },

    decrypt: function (cipher) {

        var data = null;

        try {
            var decipher = crypto.createDecipheriv(algorithm, key, ivToken);
            var dec = decipher.update(cipher, 'hex', 'utf8');
            dec += decipher.final('utf8');
            return dec;
        } catch (e) {
            console.log(e);
            return data;
        }

    }
}

let l = encryptor.decrypt(a);
console.log(l);