import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class Todo {
  @ObjectIdColumn() id: ObjectID;

  @Column() text: string;
}
