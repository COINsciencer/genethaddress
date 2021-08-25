var Wallet = require('ethereumjs-wallet')
const fs = require('fs');

// 生成  i 个钱包地址数量，改这里就可以了。 TeleGram：@btcok9
for(var i = 0; i < 20; i++){
    const EthWallet = Wallet.default.generate(false);
    
    const addressALL = EthWallet.getAddressString();
    const addr = addressALL + "\n";
    console.log("address: " + EthWallet.getAddressString());

    const privateKeyALL = EthWallet.getPrivateKeyString();
    const pKey = privateKeyALL + "\n";
    console.log("privateKey: " + EthWallet.getPrivateKeyString());
    
	//将所有地址保存到文件中
    fs.appendFile('address.txt', addr, (err) => {
        if (err) throw err;
        console.log('追加address');
     }); 
     //将所有的私钥保存到私钥文件中
     fs.appendFile('privateKeyALL.txt', pKey, (err) => {
        if (err) throw err;
        console.log('追加privateKey');
     }); 

}

