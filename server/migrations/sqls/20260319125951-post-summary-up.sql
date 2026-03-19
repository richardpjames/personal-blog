ALTER TABLE posts
ADD COLUMN summary text;

ALTER TABLE posts
ALTER COLUMN title TYPE text;

ALTER TABLE posts
ALTER COLUMN slug TYPE text;

ALTER TABLE posts
ALTER COLUMN content TYPE text;

UPDATE posts
SET summary = 'TBC'
WHERE summary IS NULL;

ALTER TABLE posts
ALTER COLUMN summary SET NOT NULL;