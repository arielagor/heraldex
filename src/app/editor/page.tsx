import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import EditorPage from "@/components/editor/EditorPage";

export const metadata: Metadata = {
  title: "Design Your Blazon — Heraldex Editor",
  description:
    "Create your heraldic identity with the Heraldex blazon editor. Choose tinctures, ordinaries, and charges to design your clan's unique coat of arms.",
};

export default function Editor() {
  return (
    <>
      <Navbar />
      <main id="main">
        <EditorPage />
      </main>
    </>
  );
}
