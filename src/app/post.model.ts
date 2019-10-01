export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Deserializable {
  deserialize(input: any): this;
}

export class Post implements Deserializable, IPost {
  userId: number;
  id: number;
  title: string;
  body: string;

  deserialize(input: IPost): this {
    Object.assign(this, input);
    return this;
  }
}


