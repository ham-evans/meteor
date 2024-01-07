import { Metadata } from "next";

import { AddContactModal } from "@/components/dialogs/add-contact-dialog";

export default async function DashboardPage() {
  return (
    <div className="h-full flex-1 flex-col space-y-8 pb-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Important metrics at glance.</p>
        </div>
        <AddContactModal />
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Dashboard | Meteor ",
  description:
    "Meteor  is enterprise ready comprehensive Next.js  kit for building and launching modern web applications.",
};
