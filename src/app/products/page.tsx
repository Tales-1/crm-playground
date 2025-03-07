import { promises as fs } from "fs" 
import path from "path"
import { z } from "zod";
import { productSchema } from "./_data/product-schema";
import ProductsBody from "./_components/products-body";

async function GetProductsAsync(){
    const data = await fs.readFile(path.join(process.cwd(), "src/app/products/_data/products.json"));

    const products = JSON.parse(data.toString());

    return z.array(productSchema).parse(products);
}

export default async function ProductsPage(){

    const products = await GetProductsAsync();

    return(
        <main>
            <ProductsBody data={products} />
        </main>
    )
}