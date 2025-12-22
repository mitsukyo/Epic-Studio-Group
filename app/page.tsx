import PreviewPage from "./preview/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Epic Group Studio - We turn CEO Authors into Media Brands",
  description:
    "Epic Group Studio - We turn CEO Authors into Media Brands",
};
export default function Home() {
  return (
    <>
      <PreviewPage />
    </>
  );
}
