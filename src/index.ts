import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { Todo } from "./entity/Todo";

createConnection()
  .then(async connection => {
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);
    //
    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);
    //
    // console.log("Here you can setup and run express/koa/any other framework.");
    const todo = new Todo();
    todo.text = "Learn React Native";
    await connection.manager.save(todo);
    console.log("Saved a new todo with id: " + todo.id);

    let todos = await connection.manager.find(Todo);
    console.log("Loaded todos: ", todos);

    let todoRepository = await connection.getRepository(Todo);
    const todoToUpdate = await todoRepository.findOneById(
      "5ad861759c049011930721f4"
    );
    todoToUpdate.text = "updatedddddd !!!!!!";

    await todoRepository.save(todoToUpdate);

    console.log("after update");

    todos = await connection.manager.find(Todo);
    console.log("Loaded todos: ", todos);
  })
  .catch(error => console.log(error));
