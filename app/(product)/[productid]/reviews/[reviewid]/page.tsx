import { notFound } from "next/navigation";

export default function ReviewDetail({
  params: { productid, reviewid },
}: {
  params: {
    productid: string;
    reviewid: string;
  };
}) {
  if (parseInt(reviewid) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {reviewid} for product {productid}
    </h1>
  );
}
