drop schema if exists titanic cascade;
drop user if exists titanic;

create user titanic with password 'password';
create schema authorization titanic;