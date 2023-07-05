let viewproductdata = [
    {
        id: 1,
        url: "file:///D:/admin/img/71X+tjZ0OhL._AC_SL1500_.jpg",
        name: "Wordsworth & Silver",
        price: 300,
        Qty: 1,
        Description: "Not only is the toy bar shaped with funny animals on top, but it also has funny sounds that help children feel excited to help them learn to reflect, grasp, look at objects, very Good for brain development Made of high-quality fabric, with good sweat absorbency, helps prevent back heat, sweat when sleeping.",
    },
    {
        id: 2,
        url: "file:///D:/admin/img/41bRr5ar2wL._AC_UF1000,1000_QL80_.jpg",
        name: "Wordsworth & Black",
        price: 200,
        Qty: 1,
        Description: "Not only is the toy bar shaped with funny animals on top, but it also has funny sounds that help children feel excited to help them learn to reflect, grasp, look at objects, very Good for brain development Made of high-quality fabric, with good sweat absorbency, helps prevent back heat, sweat when sleeping.",
    }, {
        id: 3,
        url: "file:///D:/admin/img/81bU5HlRPZL._AC_UF894,1000_QL80_.jpg",
        name: "Wordsworth & Black",
        price: 150,
        Qty: 1,
        Description: "Not only is the toy bar shaped with funny animals on top, but it also has funny sounds that help children feel excited to help them learn to reflect, grasp, look at objects, very Good for brain development Made of high-quality fabric, with good sweat absorbency, helps prevent back heat, sweat when sleeping.",
    }, {
        id: 4,
        url: "file:///D:/admin/img/istockphoto-185078634-612x612.jpg",
        name: "Text & Blue",
        price: 100,
        Qty: 1,
        Description: "Not only is the toy bar shaped with funny animals on top, but it also has funny sounds that help children feel excited to help them learn to reflect, grasp, look at objects, very Good for brain development Made of high-quality fabric, with good sweat absorbency, helps prevent back heat, sweat when sleeping.",
    }, {
        id: 5,
        url: "file:///D:/admin/img/pen4_002_1.jpg",
        name: "Text & Black",
        price: 150,
        Qty: 1,
        Description: "Not only is the toy bar shaped with funny animals on top, but it also has funny sounds that help children feel excited to help them learn to reflect, grasp, look at objects, very Good for brain development Made of high-quality fabric, with good sweat absorbency, helps prevent back heat, sweat when sleeping.",
    }, {
        id: 6,
        url: "file:///D:/admin/img/19235.jpg",
        name: "Text & Dark Black",
        price: 200,
        Qty: 1,
        Description: "Not only is the toy bar shaped with funny animals on top, but it also has funny sounds that help children feel excited to help them learn to reflect, grasp, look at objects, very Good for brain development Made of high-quality fabric, with good sweat absorbency, helps prevent back heat, sweat when sleeping.",
    }
];

const viewproduct = () => {
    let tbl = "";
    viewproductdata.map((val) => {
        const { id, name, price, Qty, Description, url } = val;
        tbl += `
                <div class="col-4 ">
                    <div class=" bg1 rounded-3 p-3 mb-3">
                        <img src="${url}" class="view-img h-50 rounded-3 col-12"  alt="">
                        <div class="h-50">
                            <div class= "text-center col-12">
                                <h3 class="text-white py-2">${name}</h3>
                                <h3 class="text-white py-2 visually-hidden">${id}</h3>
                                <div class="d-flex justify-content-around align-items-center text-dark">
                                    <h5  class="text-white ">${price}</h5>
                                    <h5  class="text-white ">${Qty}</h5>
                                </div>
                            <h6 class="text-white pt-2 pb-3" >${Description}</h6>
                            </div>
                            <button onclick='AddToCart(${id})' id="cartbtn" class="btn w-100 col-12 ">Add To Cart</button> 
                        </div> 
                    </div>
                </div>
                
                `
        document.getElementById('cards').innerHTML = tbl;
    });
    localStorage.setItem('viewProduct', JSON.stringify(viewproductdata))
}
viewproduct();
let cart = [];
const AddToCart = (id) => {
    let pdata = JSON.parse(localStorage.getItem('addtocart')) || [];
    let ans = pdata.find((v)=>{
        return v.id == id;
    });
    if(ans){
        alert('Already Added to Cart');
    }else{
        viewproductdata.filter((val) => {
            if (val.id == id) {
                if (localStorage.getItem('addtocart') === null || localStorage.getItem('addtocart') === undefined) {
                    cart.push(val);
                    localStorage.setItem('addtocart', JSON.stringify(cart));
                } else {
                    let allCartData = JSON.parse(localStorage.getItem('addtocart'))
                    allCartData.push(val);
                    localStorage.setItem('addtocart', JSON.stringify(allCartData));
                }
                viewproduct();
            }
        });
        alert("Product successfully add");

    }

}
