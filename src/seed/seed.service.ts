import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon?limit=700';

  constructor(private readonly httpService: HttpService) {}

  async executeSeed() {
    const { data } = await this.httpService.axiosRef.get<PokeResponse>(
      this.baseUrl,
    );
    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];

      console.log({ name, no });
    });
    return 'Seed executed';
  }
}
