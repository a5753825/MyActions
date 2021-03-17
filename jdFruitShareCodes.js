/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  '36dbb93e0b8b43bbb26c753467a06e46@cf0b06ebf7404b63be0d33c57c4eb9ce@fa67e92bfbe7438f9341aaefe2744aa0@014298aea25c40fbb3fac4421eb6aa52@2e646d4115e64072b88cc31f10cd1c62@5d5542491d3d4220a1b62936143a07c4@6249009635c84caa8c51dc37a24a2886@a90defd57e2945349900f0cb18dd44ca@e977e25dd850421b96bb00ecf5a5b863@d67c1305522f46e2b20f58508c6c06ca@03ca52c603244ad0bce1edeed5030ae8',//账号一的好友shareCode,不同好友中间用@符号隔开
  '36dbb93e0b8b43bbb26c753467a06e46@cf0b06ebf7404b63be0d33c57c4eb9ce@fa67e92bfbe7438f9341aaefe2744aa0@014298aea25c40fbb3fac4421eb6aa52@2e646d4115e64072b88cc31f10cd1c62@5d5542491d3d4220a1b62936143a07c4@6249009635c84caa8c51dc37a24a2886@a90defd57e2945349900f0cb18dd44ca@e977e25dd850421b96bb00ecf5a5b863@d67c1305522f46e2b20f58508c6c06ca@03ca52c603244ad0bce1edeed5030ae8',//账号二的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
