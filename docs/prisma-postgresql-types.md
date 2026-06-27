# Tipos de Campo Prisma → PostgreSQL

Referência rápida para definição de tipos em modelos Prisma com PostgreSQL.

---

## String

| Prisma                   | PostgreSQL         | Quando usar                          |
|--------------------------|--------------------|--------------------------------------|
| `String`                 | `text`             | Padrão — texto sem limite            |
| `String @db.VarChar(n)`  | `varchar(n)`       | Limite explícito de caracteres       |
| `String @db.Char(n)`     | `char(n)`          | Tamanho fixo (ex: código de país)    |
| `String @db.Uuid`        | `uuid`             | UUID como texto nativo               |
| `String @db.Inet`        | `inet`             | Endereço IP                          |
| `String @db.Xml`         | `xml`              | Dados XML                            |
| `String @db.VarBit`      | `varbit`           | String de bits variável              |
| `String @db.Bit(n)`      | `bit(n)`           | String de bits fixo                  |
| `String @db.Citext`      | `citext`           | Texto case-insensitive (requer extensão) |

---

## Números Inteiros

| Prisma                              | PostgreSQL     | Quando usar                     |
|-------------------------------------|----------------|---------------------------------|
| `Int`                               | `integer`      | Inteiro padrão (−2B a +2B)      |
| `Int @db.SmallInt`                  | `smallint`     | Inteiro pequeno (−32k a +32k)   |
| `Int @default(autoincrement())`     | `serial`       | Auto-incremento inteiro         |
| `Int @db.SmallInt @default(autoincrement())` | `smallserial` | Auto-incremento pequeno  |
| `Int @db.Oid`                       | `oid`          | Identificador de objeto interno |
| `BigInt`                            | `bigint`       | Inteiro grande (−9Q a +9Q)      |
| `BigInt @default(autoincrement())`  | `bigserial`    | Auto-incremento grande          |

---

## Números Decimais / Ponto Flutuante

| Prisma                      | PostgreSQL          | Quando usar                          |
|-----------------------------|---------------------|--------------------------------------|
| `Float`                     | `double precision`  | Ponto flutuante (impreciso, rápido)  |
| `Float @db.Real`            | `real`              | Ponto flutuante simples (4 bytes)    |
| `Decimal`                   | `decimal(65,30)`    | Precisão exata (padrão)              |
| `Decimal @db.Decimal(p, s)` | `decimal(p,s)`      | Precisão e escala customizadas       |
| `Decimal @db.Money`         | `money`             | Valores monetários com símbolo       |

> **Regra geral:** use `Decimal` para dinheiro/financeiro, `Float` para cálculos científicos.

---

## Boolean

| Prisma    | PostgreSQL | Quando usar     |
|-----------|------------|-----------------|
| `Boolean` | `boolean`  | Verdadeiro/Falso |

---

## Data e Hora

| Prisma                         | PostgreSQL        | Quando usar                              |
|--------------------------------|-------------------|------------------------------------------|
| `DateTime`                     | `timestamp(3)`    | Data e hora (padrão, sem fuso)           |
| `DateTime @db.Timestamp(n)`    | `timestamp(n)`    | Data e hora com precisão customizada     |
| `DateTime @db.Timestamptz(n)`  | `timestamptz(n)`  | Data e hora **com fuso horário**         |
| `DateTime @db.Date`            | `date`            | Apenas data (sem hora)                   |
| `DateTime @db.Time(n)`         | `time(n)`         | Apenas hora (sem data)                   |
| `DateTime @db.Timetz(n)`       | `timetz(n)`       | Hora com fuso horário                    |

> **Recomendado:** use `@db.Timestamptz` para aplicações com usuários em múltiplos fusos.

---

## JSON

| Prisma             | PostgreSQL | Quando usar                                  |
|--------------------|------------|----------------------------------------------|
| `Json`             | `jsonb`    | Padrão — JSON binário (indexável, eficiente) |
| `Json @db.Json`    | `json`     | JSON como texto puro (sem indexação)         |
| `Json @db.JsonB`   | `jsonb`    | Explícito — igual ao padrão                  |

> **Prefira `jsonb`** na quase totalidade dos casos.

---

## Bytes

| Prisma             | PostgreSQL | Quando usar          |
|--------------------|------------|----------------------|
| `Bytes`            | `bytea`    | Dados binários brutos |
| `Bytes @db.ByteA`  | `bytea`    | Explícito — igual ao padrão |

---

## Enums

```prisma
enum Status {
  ACTIVE
  INACTIVE
}

model User {
  status Status @default(ACTIVE)
}
```

PostgreSQL cria um tipo `enum` nativo.

---

## Arrays (PostgreSQL only)

Adicione `[]` ao tipo para criar um array nativo:

```prisma
model Post {
  tags   String[]
  scores Int[]
  flags  Boolean[]
}
```

---

## Exemplos práticos

```prisma
model User {
  id        Int      @id @default(autoincrement())
  uuid      String   @default(uuid()) @db.Uuid
  name      String                              // text
  email     String   @db.VarChar(255)
  bio       String?                             // text nullable
  balance   Decimal  @db.Decimal(10, 2)
  score     Float
  active    Boolean  @default(true)
  createdAt DateTime @default(now()) @db.Timestamptz(3)
  metadata  Json?
  avatar    Bytes?
}
```
