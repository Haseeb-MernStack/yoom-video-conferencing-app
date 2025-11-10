// app/meeting/[id]/page.tsx
import MeetingClient from "@/components/MeetingClient";

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params; // ✅ Unwrap Promise
    return <MeetingClient id={id} />;
}
