import { Model, Optional } from 'sequelize';

interface AuthorAttributes {
    id: number;
    name: string;
}

interface AuthorCreationAttributes extends Optional<AuthorAttributes, 'id'> { }

export class Author extends Model<AuthorAttributes, AuthorCreationAttributes> implements AuthorAttributes {
    public id!: number;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}