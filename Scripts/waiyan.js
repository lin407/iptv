let body = $response.body;

if ($request.url.includes("www.unischool.cn/api/common/v1/account/user/student/info")) {
    let obj = JSON.parse(body);
    obj.data.vip = true;
    obj.data.endTime = "2099-09-09";
    // obj.data.nickname = "baby";
    // obj.data.usableIntegrate = 9999999;
    body = JSON.stringify(obj);
} else {
    body = body.replace(/"vip"\s*:\s*[^,}]+/g, '"vip":1');
    body = body.replace(/"vipFlag"\s*:\s*[^,}]+/g, '"vipFlag":false');
    body = body.replace(/"superVip"\s*:\s*[^,}]+/g, '"superVip":true');
    body = body.replace(/"superDignityVip"\s*:\s*[^,}]+/g, '"superDignityVip":true');
    body = body.replace(/"price"\s*:\s*[^,}]+/g, '"price":0');
    body = body.replace(/"lockStatus"\s*:\s*[^,}]+/g, '"lockStatus":1');
    body = body.replace(/"downLoad"\s*:\s*[^,}]+/g, '"downLoad":true');
    body = body.replace(/"unlockTime"\s*:\s*[^,}]+/g, '"unlockTime":1725207442');
    body = body.replace(/"expireTime"\s*:\s*[^,}]+/g, '"expireTime":984848484949');
    body = body.replace(/"purchased"\s*:\s*[^,}]+/g, '"purchased":true');
    // body = body.replace(/"purchasedStatus"\s*:\s*[^,}]+/g, '"purchasedStatus":2');
    body = body.replace(/"free"\s*:\s*[^,}]+/g, '"free":true'); //同步绘本
    
    // body = body.replace(/"canReceiveIntegrate"\s*:\s*[^,}]+/g, '"canReceiveIntegrate":9999');
    // body = body.replace(/"credits"\s*:\s*[^,}]+/g, '"credits":999999');
}

$done({
    body
});