import PostPagination from "@/app/components/PostPagination";
import PostsList from "@/app/components/PostsList";
import { notFound } from "next/navigation";
import { allPosts, Post} from "contentlayer/generated"
import { getPagination } from "@/utils/pagination";


interface Props {
  params: {
    number: string;
  };
}

export const generateStaticParams = () => {
  return Array.from({ length: allPosts.length }).map((_, index) => ({
    number: `${index + 1}`,
  }));
};

const LayoutPages = ({ params }: Props) => {
  let arrayCurrentPosts;
  let totalPagesNumber;

  try {
   const {currentPosts, totalPages} = getPagination(allPosts, 2, params.number);
   arrayCurrentPosts = currentPosts
   totalPagesNumber = totalPages
  } catch (error) {
    notFound();
  }

  return (
    <div>
      <div className="grid gap-4">
        <PostsList posts={arrayCurrentPosts} />
        {totalPagesNumber > 1 && (
          <PostPagination totalPages={totalPagesNumber} currentPage={parseInt(params.number)} />
        )}
        
      </div>
    </div>
  );
};

export default LayoutPages;
