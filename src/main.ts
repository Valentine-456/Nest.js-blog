import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

async function bootstrap() {
  const port = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Nest.js tutorial')
    .setDescription(
      'Here are the basics of app development using Nest.js framework',
    )
    .setVersion('1.0.0')
    .addTag('Valentine')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  // app.useGlobalGuards(JwtAuthGuard);
  await app.listen(port, () =>
    console.log('Server is running on port: ' + port),
  );
}
bootstrap();
