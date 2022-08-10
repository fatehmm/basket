let buttons = Array.from(document.getElementsByClassName("btn"));

console.log(buttons);
let basket = localStorage.getItem("basket");
if (!basket) {
    localStorage.setItem("basket", JSON.stringify([]));
}
buttons.forEach((button, index) => {
    button.addEventListener("click", function(e){
        basket = JSON.parse(localStorage.getItem("basket"));
        let name = this.parentElement.parentElement.firstElementChild.innerText;
        let desc = this.parentElement.previousElementSibling.innerText;
        let price = this.previousElementSibling.firstElementChild.innerText;
        let image = this.parentElement.parentElement.parentElement.firstElementChild.src;
        let id = this.parentElement.parentElement.parentElement.id;
        
        let existed = basket.find((value)=>{
            return value.id == id;
        })
        if(existed){
            existed.count++;
        }else{
            let item = {name, desc, price, image, id, count: 1}
            basket.push(item);
        }
        localStorage.setItem("basket", JSON.stringify(basket))
        console.log(basket);
        GetCount();
        GetTotalValue();
    })
});

body.addEventListener("load", function(){
    GetCount();
    GetTotalValue();
})

function GetCount()
{
    let basket = JSON.parse(localStorage.getItem("basket"));
    let count = basket.reduce((count, item) => {
        return (count += item.count);
    }, 0);

    let counter = document.querySelector("#counter_span");
    counter.innerText = count;
}
function GetTotalValue()
{
    let basket = JSON.parse(localStorage.getItem("basket"));
    let total = basket.reduce((total, value) => {
        return total += value.count * value.price;
    }, 0);
    let total_span = document.querySelector(".total_span");
    total_span.innerText = `Total Price: ${total}$`
}