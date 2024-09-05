import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-center m-auto">
      <div className="flex items-center justify-center ">
        <h2 className="text-3xl mb-4">
          Inventory Management Sortware
        </h2>
      </div>
      <Link href="/dashboard/home/overview">View Dashboard</Link>
    </div>
  );
}
