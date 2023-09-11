import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoCreateDto, TodoUpdateDto } from './dto';

@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService){}

    async create(data: TodoCreateDto) {
        const todo = await this.prisma.todo.create({
            data
        })
        return todo;
    }

    async findAll() {
        return await this.prisma.todo.findMany();
    }

    async update(data: TodoUpdateDto) {
        const todo = await this.prisma.todo.updateMany({
            where: {
                id: data.id
            },
            data,
        })
    } 

    async delete(id: string) {
        await this.prisma.todo.delete({
            where: { id: Number(id) },
        });
    }
}
