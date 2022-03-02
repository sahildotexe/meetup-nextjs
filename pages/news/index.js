import { Fragment } from "react/cjs/react.production.min";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/1">1</Link>
        </li>
        <li>
          <Link href="/news/2">2</Link>
        </li>
        <li>
          <Link href="/news/3">3</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
