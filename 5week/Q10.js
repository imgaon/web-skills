const usersBudget = [10, 20, 50];
const productPrices = [50, 250, 400];

function canPurchase(price, budget) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 코드 작성
            const arr = []

            // console.log(price, budget)
            for (i = 0; i < price.length; i++) {
                // console.log(price[i], budget[i])
                if (price[i] < budget [i]) {
                    arr.push(i + 1)
                }
            }
            
            if (arr.length > 0) {
                resolve(arr)
            }else {
                reject("구매가능한 제품이 없습니다.")
            }
        }, 100);
    });
}

// 코드 작성
async function callCanPurchase() {
    const checkItem = await canPurchase(productPrices, usersBudget)

    try{
        console.log(`구매가능한 상품은 ${checkItem} 입니다.`)
    }catch (e) {
        console.log("sdfsdfsdf")
    }
}
callCanPurchase()

canPurchase(productPrices, usersBudget)
.then(arr => {
    console.log(`구매가능한 상품은 ${arr} 입니다.`)
})
.catch(error => {
    console.log(error)
    
})