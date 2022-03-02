import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();
  const { newsId } = router.query;
  return <h1>{newsId} Page</h1>;
}

export default DetailsPage;
