import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;

const HomePage = async () => {
    const products =await getProducts({ isFeatured: true})
    const billboard = await getBillboard("d98184e8-434c-40dd-a10c-ba5cf0eb0787");
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" items={products}/>
            </div>
        </Container>
    )
}

export default HomePage;