import Card from "@/app/components/card";
import Link from "next/link";

export default function ArchivedNotifications(){
    return ( <Card>
        <div>notifications</div>
    <Link href="/complex-dashboard">Default notifications</Link>
    </Card>
    )
}