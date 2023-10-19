import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './message.service';

@Controller('/messages')
export class MessageController {
    constructor(private messageService: MessageService){}

    @Get()
    listMessages() {
        return this.messageService.findAll();
    }
    @Post()
    createMessage(@Body() body: CreateMessageDto){
        return this.messageService.create(body.content);
    }
    @Get('/:id')
    async getMessage(@Param('id') id: string){
        const message = await this.messageService.findOne(id);
        if(!message) {
            throw new NotFoundException("message not found");
        }
        return message;
    }
    
}
