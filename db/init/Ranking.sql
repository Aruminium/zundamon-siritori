CREATE TABLE Users(
    name VARCHAR(32) NOT NULL,  --User名
    count INT default 0  --継続回数
);

CREATE view RANKING
AS SELECT RANK() OVER(ORDER BY count DESC) 
AS rank,  -- 順位
   name,  --名前
   count  --継続回数
   FROM Users  --Usersテーブルから引っ張ってくる
   order by rank limit 10;  --10位までのビュー