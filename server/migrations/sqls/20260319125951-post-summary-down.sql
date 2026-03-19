ALTER TABLE posts
DROP COLUMN summary;

ALTER TABLE posts
ALTER COLUMN title TYPE varchar
USING title::varchar;

ALTER TABLE posts
ALTER COLUMN slug TYPE varchar
USING slug::varchar;

ALTER TABLE posts
ALTER COLUMN content TYPE varchar
USING content::varchar;