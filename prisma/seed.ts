import { PrismaClient } from '@prisma/client';

async function main() {
  const prisma = new PrismaClient();
  const cities = await prisma.city.findMany();
  const hobbies = await prisma.hobbie.findMany();
  const users = await prisma.user.findMany();

  if (cities.length > 0 || hobbies.length > 0 || users.length > 0) {
    await prisma.city.deleteMany({});
    await prisma.hobbie.deleteMany({});
    await prisma.user.deleteMany({});
  }

  await prisma.city.createMany({
    data: [
      { state: 'Acre', city: 'Rio Branco' },
      { state: 'Acre', city: 'Cruzeiro do Sul' },
      { state: 'Acre', city: 'Tarauacá' },
      { state: 'Alagoas', city: 'Macéio' },
      { state: 'Alagoas', city: 'Rio Largo' },
      { state: 'Alagoas', city: 'Arapiraca' },
      { state: 'Amapá', city: 'Santana' },
      { state: 'Amapá', city: 'Laranjal do Jari' },
      { state: 'Amapá', city: 'Macapá' },
      { state: 'Amazonas', city: 'Manaus' },
      { state: 'Amazonas', city: 'Paritins' },
      { state: 'Amazonas', city: 'Itacoatiara' },
      { state: 'Bahia', city: 'Salvador' },
      { state: 'Bahia', city: 'Feira de Santana' },
      { state: 'Bahia', city: 'Vitória da Conquista' },
      { state: 'Ceará', city: 'Fortaleza' },
      { state: 'Ceará', city: 'Caucaia' },
      { state: 'Ceará', city: 'Juazeiro do Norte' },
      { state: 'Distrito Federal', city: 'Brasília' },
      { state: 'Espírito Santo', city: 'Serra' },
      { state: 'Espírito Santo', city: 'Vila Velha' },
      { state: 'Espírito Santo', city: 'Vitória' },
      { state: 'Goiás', city: 'Goiânia' },
      { state: 'Goiás', city: 'Aparecida de Goiânia' },
      { state: 'Goiás', city: 'Anápolis' },
      { state: 'Maranhão', city: 'São Luiz' },
      { state: 'Maranhão', city: 'Imperatriz' },
      { state: 'Maranhão', city: 'São José do Ribamar' },
      { state: 'Mato Grosso', city: 'Cuiabá' },
      { state: 'Mato Grosso', city: 'Várzea Grande' },
      { state: 'Mato Grosso', city: 'Rondonópolis' },
      { state: 'Mato Grosso do Sul', city: 'Campo Grande' },
      { state: 'Mato Grosso do Sul', city: 'Dourados' },
      { state: 'Mato Grosso do Sul', city: 'Três Lagoas' },
      { state: 'Minas Gerais', city: 'Belo Horizonte' },
      { state: 'Minas Gerais', city: 'Uberlândia' },
      { state: 'Minas Gerais', city: 'Contagem' },
      { state: 'Pará', city: 'Belém' },
      { state: 'Pará', city: 'Ananindeua' },
      { state: 'Pará', city: 'Santarém' },
      { state: 'Paraíba', city: 'João Pessoa' },
      { state: 'Paraíba', city: 'Campina Grande' },
      { state: 'Paraíba', city: 'Santa Rita' },
      { state: 'Paraná', city: 'Curitiba' },
      { state: 'Paraná', city: 'Londrina' },
      { state: 'Paraná', city: 'Maringá' },
      { state: 'Pernambuco', city: 'Recife' },
      { state: 'Pernambuco', city: 'Olinda' },
      { state: 'Pernambuco', city: 'Santa Cruz do Capibaribe' },
      { state: 'Piauí', city: 'Teresina' },
      { state: 'Piauí', city: 'Paranaíba' },
      { state: 'Piauí', city: 'picos' },
      { state: 'Rio de Janeiro', city: 'Rio de Janeiro' },
      { state: 'Rio de Janeiro', city: 'São Gonçalo' },
      { state: 'Rio de Janeiro', city: 'Duque de Caxias' },
      { state: 'Rio Grande do Norte', city: 'Natal' },
      { state: 'Rio Grande do Norte', city: 'Mossoró' },
      { state: 'Rio Grande do Norte', city: 'Paranamirim' },
      { state: 'Rio Grande do Sul', city: 'Porto Alegre' },
      { state: 'Rio Grande do Sul', city: 'Caxias do Sul' },
      { state: 'Rio Grande do Sul', city: 'Pelotas' },
      { state: 'Rondônia', city: 'Porto Velho' },
      { state: 'Rondônia', city: 'Ji-Paraná' },
      { state: 'Rondônia', city: 'Ariquemes' },
      { state: 'Roraima', city: 'Boa Vista' },
      { state: 'Roraima', city: 'Rorainópolis' },
      { state: 'Roraima', city: 'Caracaraí' },
      { state: 'Santa Catarina', city: 'Joinville' },
      { state: 'Santa Catarina', city: 'Florianópólis' },
      { state: 'Santa Catarina', city: 'Blumenau' },
      { state: 'São Paulo', city: 'São Paulo' },
      { state: 'São Paulo', city: 'Guarulhos' },
      { state: 'São Paulo', city: 'Campinas' },
      { state: 'Sergipe', city: 'Aracaju' },
      { state: 'Sergipe', city: 'Nossa Senhora do Socorro' },
      { state: 'Sergipe', city: 'Lagarto' },
      { state: 'Tocantis', city: 'Palmas' },
      { state: 'Tocantis', city: 'Araguaína' },
      { state: 'Tocantis', city: 'Guripi' },
    ],
  });

  await prisma.hobbie.createMany({
    data: [
      { name: 'Jogar video game' },
      { name: 'Desenhar' },
      { name: 'Tocar guitarra' },
      { name: 'Caminhar' },
      { name: 'Cozinhar' },
    ],
  });
}

main();
