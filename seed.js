const mongoose=require("mongoose");
const Product=require("./models/product")
const products=[
    {
        name:"Iphone 12",
        img:"https://images.unsplash.com/photo-1610034499386-e70758847b99?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
        price:1200,
        desc:"The iPhone 12 and iPhone 12 mini are Apple's mainstream flagship iPhones for 2020. The phones come in 6.1-inch and 5.4-inch sizes with identical features, including support for faster 5G cellular networks, OLED displays, improved cameras, and Apple's latest A14 chip, all in a completely refreshed design."
    },
    {
        name:"Macbook",
        img:"https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        price:200000,
        desc:"Apple MacBook Pro is a macOS laptop with a 13.30-inch display that has a resolution of 2560x1600 pixels. It is powered by a Core i5 processor and it comes with 12GB of RAM. The Apple MacBook Pro packs 512GB of SSD storage."
    },
    {
        name:"Canon Camera EOS",
        img:"https://images.unsplash.com/photo-1499696786230-3ebd9d0d6fd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        price:45000,
        desc:"Canon EOS (Electro-Optical System) is an autofocus single-lens reflex camera (SLR) and mirrorless camera series produced by Canon Inc. ... Since 2005, all newly announced EOS cameras have used digital image sensors rather than film."
    },
    {
        name:"JBL Headphones",
        img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
        price:2000,
        desc:"Introducing JBL T450BT on-ear wireless headphones. They're flat-folding, lightweight, comfortable and compact. Under the hood, a pair of 32mm drivers punch out some serious bass, reproducing the powerful JBL Pure Bass sound you've experienced in much bigger venues."
    },
    {
        name:"Logitech Mouse",
        img:"https://www.logitech.com/content/dam/logitech/en/products/mice/m171/gallery/m171-gallery-blue-1.png",
        price:765,
        desc:"The Logitech M235 Wireless Mouse is a utilitarian computing accessory that allows you to navigate through your PC effectively."
    },
    {
        name:"External Harddisk",
        img:"https://cdn.mos.cms.futurecdn.net/yVHoQpeAfJVwzmMtPE4s5A.jpg",
        price:3000,
        desc:"Get this HP 1 TB wired external hard drive and store all your important documents, favourite movies, songs and pictures. This hard drive can handle small and large files and has a capacity of 1 TB. This slim, portable and stylish device is easy to carry around and also offers fast data transfer."
    },
    {
        name:"Wireless Keyboard",
        img:"https://images-na.ssl-images-amazon.com/images/I/61Uqam09cEL._AC_SL1500_.jpg",
        price:1500,
        desc:"The HP LV290AA wireless keyboard and mouse are especially designed for all those who wish to get rid of the clutter caused by multiple wires on the desk. The set featuring a full-fledged keyboard and a mouse, tags along a 2.4GHz Nano receiver that allows the accessories to communicate with the computer system. "
    },
    {
        name:"Smart Tv",
        img:"https://i.gadgets360cdn.com/products/large/realme-smart-tv-43-db-800x450-1590390507.jpg",
        price:1200,
        desc:"A smarter way to watch. As the centerpiece in your home, Samsung Smart TVs are dedicated to giving you access to a world of content beyond streaming so you can schedule recordings, search and game all while connecting to more devices across your home."
    },
    {
        name:"Hp Computers",
        img:"https://i.pcmag.com/imagery/roundups/03yEDeTzPo1WxOu5QGWq9Zq-16..1598476026.jpg",
        price:1200,
        desc:"The HP All-in-One PC blends the power of a desktop with the beauty of a slim, three-sided borderless display for one dependable device designed to grow with you. With easy upgrades[1] in three simple steps, you can feel confident your tech will stay up-to-date."
    },
    {
        name:"Speakers ",
        img:"https://images.idgesg.net/images/article/2020/06/fluance-ai60-opener-100848062-large.3x2.jpg",
        price:950,
        desc:"This lightweight, stylish and compact player offers crisp and clear sound. High Sound Quality. These magnetically shielding speakers take your music-listening experience to the next level. Auto Shut Off. These speakers automatically shut-off when you switch off your desktop or laptop."
    },
]

const seedData=async ()=>{
   await Product.insertMany(products);
   console.log("DataBase seeded");
}
module.exports=seedData;