import { extract } from "@/helpers";
import useBlog from "@/hooks/blog";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { blogId } = router.query;

  const blog = useBlog(Number(blogId));

  if (blog.status === "loading") {
    return <div>...cargando</div>;
  }

  if (blog.status === "error") {
    return (
      <div>
        <pre>{JSON.stringify(blog.error, null, 2)}</pre>
      </div>
    );
  }

  if (blog.status === "not-found") {
    return <div>no encontrado</div>;
  }

  if (blog.status === "success") {
    return (
      <div>
        <div>consulta exitosa!!</div>
        <pre>{JSON.stringify(blog.item, null, 2)}</pre>
      </div>
    );
  }
}
