import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByTags } from "@/utils/doc-util";

async function TagsPage({ params }) {
  const { name } = await params;
  const decodeName = decodeURIComponent(name);
  const docs = getDocuments();
  const matchedDocuments = getDocumentsByTags(docs, decodeName);
  return <ContentDisplay id={matchedDocuments[0].id} />;
}

export default TagsPage;
