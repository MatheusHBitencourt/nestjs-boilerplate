# nestjs-boilerplate

## Rodar em modo debug (com hot-reload)

```bash
docker-compose up --build
```

O app sobe na porta `3000` e o debugger fica disponível na porta `9229`. Alterações nos arquivos são refletidas automaticamente no container sem precisar reiniciá-lo.

## Build de produção

```bash
npm run build
```

O output é gerado em `./dist`.
