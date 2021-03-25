-- Your SQL goes here
CREATE TYPE type AS ENUM ('Fuel', 'Scheduled', 'Preventive', 'Tires', 'BreakDown');
create table maintenance (
    id uuid primary key,
    kms integer not null,
    price integer not null,
    type type not null,
    description text,
    car varchar not null references cars,
    owner varchar not null references users,
    date date not null,
    created_date timestamp not null
)
