require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remain minor good private flower term'; 
let testAccounts = [
"0x79a6b44f463e8224aaae11c86b92e3550fa0d5f4055e0c734c614ea1780ebbca",
"0xe6038602cb4f705efe40f5a79752994c8e55bb580c99a6da4ec2d8c1201074da",
"0x3cb9227952fa524fbed81e214cd481de3737155377e803616ffac5e3ee021aa4",
"0x0766983cdaac3168e2f2eba819577a9bc338e173c8479766ea646fe3a44ed58a",
"0x0fd4d56fff5d03808743949be328e465fc2da68b46a0da9d378786b7a40ebdbc",
"0xfd1e9fb2d05bab102755e47152806313ddd01b0e9f0b03db8ec34ef4b952c0f4",
"0x3e705fcfdc45d5b8aca1ca474f44392452bebc05439b27877ef042c67134345f",
"0x01e7b3b3b60fe6de40cbc4f2023b3d078a7894580223902b08ac5d026b72016f",
"0xb53bae0db41dfefc01833cdeeebd159b9dd5ee937f202ffa7383cababfe24a9b",
"0x0c9284e9d8b301927e108c82fa1191e393ba094fe760ad04d9b5f336f7b96ec6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

