class productManager{
    constructor(products){
        this.products=[]
    }


    comprobar(prod) {
        if ((prod.title !="") & (prod.description !="")& (prod.price !="")& (prod.thumbnail !="")& (prod.code !="")& (prod.stock!="")) {
            return true

    }
    else return false
}

    addProduct(prod){
        if (prod.code != this.products.find(cod =>cod = this.code) & (this.comprobar(prod))){
            prod.id=Math.random
            this.products.push(prod)       
        }      
        
    }

    getProduct(){
        console.log(this.products)
    }

    getProductById(id){
        const p= this.products.find(p =>p.id=id)
        console.log(p)        
    }
}


class product{
    constructor(title,description,price,thumbnail,code,stock,id){
        this.title=title,
        this.description=description,
        this.price=price,
        this.thumbnail=thumbnail,
        this.code=code,
        this.stock=stock
        this.id=id
    }

    
}

const product1 = new product ("arroz","blanco",300,"imgArrox",333,10,4)
const product2 = new product ("fideos","codo",400,"imgFideo",387,10,6)
const product3 = new product ("carne","bife",800,"imgCarne",323,10,8)
const product4 = new product ("pollo","muslo",500,"imgMuslo",311,10,10)

const productMan = new productManager





