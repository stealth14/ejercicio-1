import { useCallback, useEffect, useState } from "react";

import Result, { Refreshable } from "@/interfaces/result";
import Blog from "@/models/Blog";

export default function useBlog(id?: number): Refreshable<Blog> {
  const [result, setResult] = useState<Result<Blog>>({ status: "loading" });

  const fetch = useCallback(async () => {
    if (!id) {
      setResult({ status: "loading" });
      return;
    }

    try {
      const item = await Blog.get(id);

      setResult({ status: "success", item });
    } catch (error) {
      console.error("useTask.init", error);
      setResult({ status: "error", error });
    }
  }, [id]);

  const refresh = useCallback(async () => {
    await fetch();
  }, [fetch]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { ...result, refresh };
}
