import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Post } from "./post.entity";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    fecha:Date;
    @Column()
    contenido:string;
    @Column()
    likes:number;
    @Column()
    dislikes:number;
    @ManyToOne(()=>Post, post=>post.comments)
    post:Post;
    // @ManyToOne(()=>Race, race=>race.dogs)
    // raza:Race;
    
}
