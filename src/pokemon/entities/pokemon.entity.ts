import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Pokemon {
  // id: string // Mongo DB will automatically generate an id for us
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
