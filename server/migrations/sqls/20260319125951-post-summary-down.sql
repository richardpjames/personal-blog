ALTER TABLE posts
DROP COLUMN summary;

ALTER TABLE posts
ALTER COLUMN title TYPE varchar(255)
USING title::varchar(255);

ALTER TABLE posts
ALTER COLUMN slug TYPE varchar(255)
USING slug::varchar(255);

ALTER TABLE posts
ALTER COLUMN content TYPE varchar(255)
USING content::varchar(255);