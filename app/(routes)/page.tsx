import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container"
import Billboard from "@/components/billboard";

export const revalidate = 0;

const HomePage = async () => {
    const billboard = await getBillboard("d98184e8-434c-40dd-a10c-ba5cf0eb0787");
    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard}/>
            </div>
        </Container>
    )
}

export default HomePage;