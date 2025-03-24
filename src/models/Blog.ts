import Entity from "@/models/Entity";
import api from "@/utils/api";

interface Attributes {
  title: string;
  body: string;
}

export default class Blog extends Entity<Attributes> {
  static async get(id: number): Promise<Blog> {
    const url = `/blogs/${id}`;

    const response = await api.open.get(url);

    const { data } = response.data;

    return data;
  }
}
