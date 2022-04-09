import { NestFactory } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ValidationPipe } from './pipes/validation.pipe';

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

  // Global usage of guards and pipes in the app:
  // app.useGlobalGuards(new JwtAuthGuard(new JwtService({})));
  // app.useGlobalPipes(new ValidationPipe());
  await app.listen(port, () =>
    console.log('Server is running on port: ' + port),
  );
}
bootstrap();
