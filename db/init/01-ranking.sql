DROP TABLE if EXISTS ranking;
CREATE TABLE ranking (
    id serial PRIMARY KEY,
    name VARCHAR(32) NOT NULL, --ユーザ名
    continuation_count SMALLINT NOT NULL --しりとり継続回数
);