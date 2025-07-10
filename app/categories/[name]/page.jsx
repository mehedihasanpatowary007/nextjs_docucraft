import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByCategories } from "@/utils/doc-util";

async function CategoriesPage({ params }) {
  const { name } = await params;
  const decodeName = decodeURIComponent(name);
  const docs = getDocuments()
  const matchedDocuments = getDocumentsByCategories(docs, decodeName)
  return <ContentDisplay id={matchedDocuments[0].id}/>;
}

export default CategoriesPage;
