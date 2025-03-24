import { useState } from "react";

import Blog from "@/models/Blog";

export default function Page() {
  const [loading, setLoading] = useState(false);

  const create = async () => {
    setLoading(true);
    try {
      await Blog.create({
        data: {
          title: "blog creado desde el front",
          body: "blog creado desde el front",
        },
      });
    } catch (error: any) {
      console.error("first", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading && <>guardando...</>}

      <button onClick={create}>crear blog</button>
    </div>
  );
}
