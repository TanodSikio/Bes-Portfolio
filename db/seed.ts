import { loadEnvConfig } from "@next/env";

const SEED_PROJECTS = [
  { slug: "store-ledger", title: "Store Ledger", year: 2025,
    summary: "Records store credit instead of a paper notebook." },
  { slug: "org-checkin", title: "Org Check In", year: 2026,
    summary: "Scans members in at the door with a QR code." },
  { slug: "barangay-reports", title: "Barangay Reports", year: 2026,
    summary: "Lets residents pin a broken streetlight on a map." },
];

async function main() {
  loadEnvConfig(process.cwd());

  const { db } = await import("./index");
  const { projects } = await import("./schema");

  await db.insert(projects).values(SEED_PROJECTS).onConflictDoNothing();

  console.log("Seeded projects");
}

main();