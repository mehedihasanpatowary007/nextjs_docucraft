import ContentDisplay from "@/app/components/ContentDisplay";

async function SubContentDetailsPage({ params }) {
  const { subContentId } = await params;
  return <ContentDisplay id={subContentId} />;
}

export default SubContentDetailsPage;
