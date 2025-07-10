import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentsByAuthor } from "@/utils/doc-util";

async function AuthorPage({ params }) {
  const { name } = await params;

  const docs = getDocuments();
  const matchedDocuments = getDocumentsByAuthor(docs, name);
  console.log(matchedDocuments);
  return <ContentDisplay id={matchedDocuments[0].id} />;
}

export default AuthorPage;
