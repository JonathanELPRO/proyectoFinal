import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    fecha:Date;
    @Column()
    titulo:string;
    @Column()
    contenido:string;
    @ManyToOne(()=>User, user=>user.posts)
    user:User;
    @OneToMany(()=>Comment, comment=>comment.post)
    comments: Comment[]
    // @ManyToOne(()=>Race, race=>race.dogs)
    // raza:Race;
    // @OneToMany(()=>Dog, dog=>dog.raza)
    // dogs: Dog[]
}
