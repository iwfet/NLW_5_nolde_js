import {Entity, Column, CreateDateColumn,  PrimaryColumn } from "typeorm"
import { v4 as uuid } from "uuid"

@Entity("messagens")
class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text:string;

    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { Message}