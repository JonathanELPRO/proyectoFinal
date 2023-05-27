import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    nombre:string;
    @Column()
    apellido:string;
    @Column()
    username:string;
    @Column()
    password:string;
    @OneToMany(()=>Post, post=>post.user)
    posts: Post[];
    
    // @OneToMany(()=>Dog, dog=>dog.raza)
    // dogs: Dog[]
}
