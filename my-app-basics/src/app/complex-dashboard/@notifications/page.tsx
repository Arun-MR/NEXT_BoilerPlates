import Card from "@/app/components/card";
import Link from "next/link";

export default function Notifications(){
    return (<>
        <Card>
            <div>notifications</div>
        <Link href="/complex-dashboard/archived">Archived notifications</Link>
        </Card>
        
    </>
    )
}