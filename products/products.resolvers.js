const productModels=require('./products.model')

module.exports={
    Query:{
        products:()=>{
            return productModels.getAllproducts()
        },

        productsByPrice:(_,args)=>{
            return productModels.getProductsByPrice(args.min,args.max)
        },

        product:(_,args)=>{
            return productModels.getProductById(args.id)
        }
    },

    Mutation:{                                          //to insert or modify documents
        addNewProducts:(_,args)=>{ 
            return productModels.addNewProduct(args.id,args.description,args.price)
        },

        addNewProductReview:(_,args)=>{
            return productModels.addNewProductReview(args.id,args.rating,args.comment)
        }
    }
}