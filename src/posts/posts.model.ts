/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from 'src/users/users.model';

interface PostCreateAttributes {
    title: string;
    content: string;
    image: string;
    userId: number;

}

@Table({tableName: "posts"})
export class Post extends Model<Post, PostCreateAttributes> {
    @Column({type: DataType.INTEGER, unique:true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false,})
    title: string;

    @Column({type: DataType.STRING,})
    content: string;

    @Column({type: DataType.STRING,})
    image: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER,})
    userId: number;

    @BelongsTo(() => User)
    author: User;
}

