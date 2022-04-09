/* eslint-disable prettier/prettier */
// TODO: get userId from token
// TODO: Use validation pipes for every route

export class CreatePostDto {
    readonly title: string;
    readonly content: string;
    readonly image: string;
    readonly userId: number;
}