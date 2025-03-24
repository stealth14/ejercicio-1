export type Timestamps = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

export interface Pagination {
  page: number;
  pageSize: number;
}

export default class Entity<Attributes> {
  id: number;
  attributes: Attributes & Timestamps;

  constructor({
    id,
    attributes,
  }: {
    id: number;
    attributes: Attributes & Timestamps;
  }) {
    this.id = id;
    this.attributes = attributes;
  }
}

export class Relation<Entity> {
  data: Entity;
  constructor(entity: Entity) {
    this.data = entity;
  }
}
