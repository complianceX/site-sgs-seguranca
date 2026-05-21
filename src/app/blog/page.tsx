import { BlogPage } from "@/components/pages/BlogPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Blog e Insights",
  description:
    "Artigos técnicos, tendências do mercado de SST e guias práticos sobre governança e tecnologia aplicada à segurança do trabalho.",
  path: "/blog",
  keywords: ["Blog SST", "NRs", "Governança SST"],
});

export default function Page() {
  return <BlogPage />;
}
