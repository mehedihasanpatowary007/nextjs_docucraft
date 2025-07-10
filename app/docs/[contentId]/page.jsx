import ContentDisplay from "@/app/components/ContentDisplay";

async function ContentDetailsPage({params}) {
  const {contentId} = await params
  return <ContentDisplay id={contentId} />;
}

export default ContentDetailsPage;
