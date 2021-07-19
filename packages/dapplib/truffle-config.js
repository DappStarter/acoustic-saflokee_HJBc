require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remind history grid gloom suspect slight'; 
let testAccounts = [
"0xf5682a7b3d9a54f3da6a436740d0f4064478b02b8abaeadd6fc30208e8beab50",
"0xcbfb9fd717f5e66e17bbfedbe9c204238a2edae5b902e53a8ad3c551bb5f85c6",
"0x5ec07333e8f056053c44ec627040bfdfbd4deca601d94f9bf9c355bb7597c65b",
"0xd48aaf166d07227d25e42acb36455a149f85d9d4354b73b119d1792511d8d018",
"0x03b1787bc68f5b6649bafaad38e87dddf763ac8f1f1648c1d08aff7a942f4999",
"0x0d1090c970315644fff64fdcb3d3953f6bbc46448f996bf47d3908b14e99d4e3",
"0x0d2591ac1edeab98e3c028f104c49f19c2d4d04a3009718bc831c94c6a3a38f1",
"0x749f2c164de596944b4aa96f0143c4052a63026872babac439a13e02f481b94e",
"0xd8dfca74c1de7b1ecffaec87a0681e4c333f27d2d575bf3543e00cf14d99d44e",
"0x2aa7abb5217f17b142cba821673ff3ce731f611f91c74a3a60a75495da5a0b59"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

