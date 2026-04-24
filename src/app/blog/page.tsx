import { BlogPage } from "@/components/pages/BlogPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | SGS - Segurança do Trabalho",
  description: "Artigos técnicos, tendências do mercado de SST e guias práticos escritos pelos nossos especialistas em governança e tecnologia.",
};

export default function Page() {
  return <BlogPage />;
}
