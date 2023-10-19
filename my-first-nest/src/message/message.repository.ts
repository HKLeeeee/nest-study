import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";
import {join, resolve} from "path";
@Injectable()
export class MessageRepository {
    file: string = join('/Users/hkleeeee/Desktop/boostcamp/study/my-first-nest', "messages.json");
    async findOne(id : string){
        const contents = await readFile(this.file, "utf-8");
        const messages = JSON.parse(contents);

        return messages[id];
    }

    async findAll(){
        return JSON.parse(await readFile(this.file, "utf-8"));
    }

    async create(content: string){
        const contents = await readFile(this.file, "utf-8");
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);
        messages[id] = {
            content, id
        }
        await writeFile(this.file, JSON.stringify(messages));
    }
}