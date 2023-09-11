import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoCreateDto, TodoUpdateDto } from './dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) { }
    
    @Post()
    async create(@Body() data: TodoCreateDto) { 
        return this.todoService.create(data);
    }

    @Get() 
    async findAll() {
        return this.todoService.findAll();
    }

    @Put()
    async update(@Body() data: TodoUpdateDto) {
        return this.todoService.update(data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string){
        this.todoService.delete(id)
    }
    

}
